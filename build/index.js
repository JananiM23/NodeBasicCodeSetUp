"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sample_router_1 = __importDefault(require("./routes/sample.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 5000;
app.get('/', (req, res) => {
    res.send("Welcome to Node js basic setup with typescript!");
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`, `http://localhost:${PORT}`);
});
app.use('/app', sample_router_1.default);
