import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";

const NODE_ENV_DEVELOPMENT = "development";

export const clientInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export function doGet<T>(
  url: string,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  return clientInstance.get<T>(url, configuration);
}

export async function doPost<T, D>(
  url: string,
  data: D,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  return clientInstance.post<T, AxiosResponse<T>, D>(url, data, configuration);
}

export async function doPut<T, D>(
  url: string,
  data: D,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  await addCsrfTokenHeader(url);
  return clientInstance.put<T, AxiosResponse<T>, D>(url, data, configuration);
}

export async function doDelete<T>(
  url: string,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  await addCsrfTokenHeader(url);
  return clientInstance.delete<T>(url, configuration);
}

export async function doPatch<T, D>(
  url: string,
  data: D,
  configuration: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  await addCsrfTokenHeader(url);
  return clientInstance.patch<T, AxiosResponse<T>, D>(url, data, configuration);
}

export function addDelegationIdHeader(delegationId: string): Axios {
  clientInstance.defaults.headers.common.delegationId = delegationId;

  return clientInstance;
}

export function removeDelegationIdHeader(): Axios {
  delete clientInstance.defaults.headers.common.delegationId;

  return clientInstance;
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
