var express =require('express');
var chalk=require('chalk');
var path=require('path')
var app=new express();
var nav=[
    {
            link:'/books',
            title:'Books'
    },
    {
            link:'/authors',
            title:'Authors'
    },

    {
        link:'/signin',
        title:'signin'
   },
   {
        link:'/signup',
        title:'signup'
   }
    ];
const booksRouter=require('./src/routes/bookRoutes.js')(nav);
const authorRouter=require('./src/routes/author.js')(nav);
const signinRouter=require('./src/routes/signinRouter.js')(nav);
const signupRouter=require('./src/routes/signupRouter.js')(nav);
app.use('/books',booksRouter);
app.use('/authors',authorRouter)
app.use('/signin',signinRouter)
app.use('/signup',signupRouter)
app.use(express.static(path.join(__dirname,'/public')));
app.set('views','./src/views');
app.set('view engine','ejs');






app.get('/',(req,res)=>{
    res.render('index',{
        nav,
        title:"library"
        }
    );
});

app.listen(3000,()=> {
    console.log('listening to port ' + chalk.blue('3000'));
});
