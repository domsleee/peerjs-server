"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateClientId = void 0;
const short_uuid_1 = __importDefault(require("short-uuid"));
const letterTranslator = short_uuid_1.default("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
function generateClientId() {
    return letterTranslator.new().toString().substring(0, 6);
}
exports.generateClientId = generateClientId;
