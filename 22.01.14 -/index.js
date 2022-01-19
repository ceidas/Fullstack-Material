const express = require('express');

const userRouter = require('./src/routers/users')

const taskRouter = require('./src/routers/tasks')

//initialize express
const app = express();

const port = 8080;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {console.log("Server is at " + port);});