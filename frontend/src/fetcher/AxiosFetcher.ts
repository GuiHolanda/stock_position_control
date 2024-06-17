import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
// import { AuthorizationType } from "../features/GetLoggedInUser/types";

export enum AuthorizationType {
  BUYER,
  SUPPLIER,
  MANAGER,
  NONE,
}

const NODE_ENV_DEVELOPMENT = "development";

export const clientInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export function doGet<T>(
  authorizationTypeRequired: AuthorizationType,
  url: string,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  addAuthorizationHeader(authorizationTypeRequired);
  return clientInstance.get<T>(url, configuration);
}

export async function doPost<T, D>(
  authorizationTypeRequired: AuthorizationType,
  url: string,
  data: D,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  addAuthorizationHeader(authorizationTypeRequired);
  return clientInstance.post<T, AxiosResponse<T>, D>(url, data, configuration);
}

export async function doPut<T, D>(
  authorizationTypeRequired: AuthorizationType,
  url: string,
  data: D,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  addAuthorizationHeader(authorizationTypeRequired);
  await addCsrfTokenHeader(url);
  return clientInstance.put<T, AxiosResponse<T>, D>(url, data, configuration);
}

export async function doDelete<T>(
  authorizationTypeRequired: AuthorizationType,
  url: string,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  addAuthorizationHeader(authorizationTypeRequired);
  await addCsrfTokenHeader(url);
  return clientInstance.delete<T>(url, configuration);
}

export async function doPatch<T, D>(
  authorizationTypeRequired: AuthorizationType,
  url: string,
  data: D,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  addAuthorizationHeader(authorizationTypeRequired);
  await addCsrfTokenHeader(url);
  return clientInstance.patch<T, AxiosResponse<T>, D>(url, data, configuration);
}

export function addAuthorizationHeader(
  authorizationTypeRequired: AuthorizationType
): Axios {
  const environment = process.env.NODE_ENV;
  if (
    environment === NODE_ENV_DEVELOPMENT &&
    authorizationTypeRequired !== AuthorizationType.NONE
  ) {
    clientInstance.defaults.headers.common.Authorization = `Basic ${getCredentials(
      authorizationTypeRequired
    )}`;
  }
  return clientInstance;
}

export function addDelegationIdHeader(delegationId: string): Axios {
  clientInstance.defaults.headers.common.delegationId = delegationId;

  return clientInstance;
}

export function removeDelegationIdHeader(): Axios {
  delete clientInstance.defaults.headers.common.delegationId;

  return clientInstance;
}

function getCredentials(authorizationTypeRequired: AuthorizationType): string {
  const lowercaseAuthType =
    AuthorizationType[authorizationTypeRequired].toLowerCase();
  const credentialsBuffer = Buffer.from(
    `${lowercaseAuthType}:${lowercaseAuthType}`,
    "utf-8"
  );
  return credentialsBuffer.toString("base64");
}
export async function addCsrfTokenHeader(url: string): Promise<void> {
  const csrfTokenName = "x-csrf-token";
  clientInstance.defaults.headers.common[csrfTokenName] = "fetch";
  const urlBits = url.split("/");
  const prefix = urlBits.splice(0, 4).join("/");
  const res = await clientInstance.get(`${prefix}/csrf-token`);
  clientInstance.defaults.headers.common[csrfTokenName] =
    res?.headers[csrfTokenName] ?? "";
}
