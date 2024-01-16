// const express = require("express"); is not understandable by TS
// const bodyparser = require("body-parser"); is not understandable by TS
import express from 'express';
import bodyParser from 'body-parser';
import todosRoute from './routes/todosR'
const app = express();

//middlewares
app.use(bodyParser.json());

//route
app.use(todosRoute);


app.listen(4000);
 
