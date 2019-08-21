var express =require('express');
var chalk=require('chalk');
var path=require('path')
var app=new express();

app.use(express.static(path.join(__dirname,'/public')));
app.set('views','./src/views');
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',{list:['book1','book2','book3'],title:'library'});
});

app.listen(4010,()=> {
    console.log('listening to port ' + chalk.blue('4010'));
});