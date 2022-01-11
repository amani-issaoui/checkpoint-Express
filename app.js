const express = require('express');
const path= require('path');
const routes=require('./routes');
const global = require('./middelwear/global')
const app=express();
app.set('port',process.env.PORT || 5000);

app.use(express.static(path.join(__dirname,"views")))
app.set("view engine","ejs");
app.use(global)
app.use(routes);
app.listen(app.get('port'),()=>{
    console.log("server start");
});