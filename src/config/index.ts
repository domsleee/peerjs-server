import { generateClientId } from "../services/generateClientId";

export interface IConfig {
  readonly host: string;
  readonly port: number;
  readonly expire_timeout: number;
  readonly alive_timeout: number;
  readonly key: string;
  readonly path: string;
  readonly concurrent_limit: number;
  readonly allow_discovery: boolean;
  readonly proxied: boolean | string;
  readonly cleanup_out_msgs: number;
  readonly ssl?: {
    key: string;
    cert: string;
  };
  readonly generateClientId?: () => string;
}

const defaultConfig: IConfig = {
  host: "::",
  port: 9000,
  expire_timeout: 5000,
  alive_timeout: 60000,
  key: "peerjs",
  path: "/",
  concurrent_limit: 5000,
  allow_discovery: false,
  proxied: false,
  cleanup_out_msgs: 1000,
  generateClientId: generateClientId
};

export default defaultConfig;
