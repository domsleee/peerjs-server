"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateClientId_1 = require("../services/generateClientId");
const defaultConfig = {
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
    generateClientId: generateClientId_1.generateClientId
};
exports.default = defaultConfig;
