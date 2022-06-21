//render html files in node js
const express = require('express');
const app = express();
const path = require('path');
const filespath = path.join(__dirname,'public');
//console.log(filespath);
app.use(express.static(filespath));
app.listen(4603);