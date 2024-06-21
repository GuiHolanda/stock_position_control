import { JWTPayload, SignJWT, jwtVerify } from "jose";
interface AuthPayload {
  id: number;
  typeUser: "admin" | "user";
  expirationDate: Date;
}

const secretKey = "senhaMuitoGrande";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<AuthPayload> {
  const { payload } = await jwtVerify<AuthPayload>(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
