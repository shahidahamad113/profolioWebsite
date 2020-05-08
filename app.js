const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.render('home')
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/skills',(req,res)=>{
    res.render('skills');
})
app.get('/contact',(req,res)=>{
    res.render('contact')
});
app.get('/project',(req,res)=>{
    res.render('project');
})
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Node server has just stated');
    }
});