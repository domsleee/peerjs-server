import shortUUID from "short-uuid";

const letterTranslator = shortUUID("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

export function generateClientId(): string {
    return letterTranslator.new().toString().substring(0, 6);
}
