"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
function loadEnv() {
    let envPath;
    if (process.env.NODE_ENV === "production") {
        envPath = path_1.default.join(process.cwd(), "server", ".env");
    }
    else {
        envPath = path_1.default.join(process.cwd(), "server", ".env.local");
    }
    dotenv_1.default.config({ path: envPath });
}
function main() {
    loadEnv();
    const config = (0, config_1.parseConfig)(process.env);
    const app = (0, express_1.default)();
    app.get("/", (req, res) => {
        res.status(200).json({
            success: true,
            data: {
                message: "Hello",
            },
        });
    });
    app.listen(config.PORT, () => {
        console.log(`Server running on port: ${config.PORT}`);
    });
}
main();
