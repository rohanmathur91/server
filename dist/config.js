"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseConfig = parseConfig;
const zod_1 = require("zod");
const configSchema = zod_1.z.object({
    PORT: zod_1.z.preprocess((val) => (typeof val === "string" ? val.trim() : val), zod_1.z.coerce.number()),
});
function parseConfig(env) {
    const result = configSchema.safeParse(env);
    if (!result.success) {
        throw result.error;
    }
    return result.data;
}
