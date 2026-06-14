/// <reference types="vite/client" />
/// <reference types="@serwist/vite/typings" />

declare module "virtual:serwist" {
  import type { Serwist } from "serwist";

  export function getSerwist(): Promise<Serwist>;
}
