let express=require('express');

const app=express();
const path=require('path')
app.set("view engine", "hbs");

app.get('/',function (req,res){
    res.render('index.hbs')
});

app.listen(process.env.PORT || 3000,function (){
    console.log("Server is running");
})