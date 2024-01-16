"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express"); is not understandable by TS
// const bodyparser = require("body-parser"); is not understandable by TS
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todosR_1 = __importDefault(require("./routes/todosR"));
const app = (0, express_1.default)();
//middlewares
app.use(body_parser_1.default.json());
//route
app.use(todosR_1.default);
app.listen(4000);
