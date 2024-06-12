const express = require('express');
const app = express();
const port = 4000;
const {dbconnection} = require('./connect');
const  cookie = require('cookie-parser');
const path = require('path');
const userRouter =  require('./routes/userRouter');
const staticRouter = require('./routes/staticRouter');
const adminRoute = require('./routes/rolesRoutes');
const jobsRoute = require('./routes/jobsRoute');
// set views 
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));
app.use(express.static('views'));

app.use(express.static(path.join(__dirname,'public')));

//For Data
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookie());

//routes
app.use('/',staticRouter);
app.use('/users',userRouter);
app.use('/',adminRoute);
app.use('/',jobsRoute)

dbconnection('mongodb://127.0.0.1:27017/job-app')
app.listen(port,()=>{
    console.log(`Server started At port ${port}`);
});