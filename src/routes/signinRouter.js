const express=require('express');
const signinRouter=express.Router();
function router(nav){

signin=[
    {
        title:"Song Of Ice n Fire",
        genre:"Fantasy",
        author:"George R.R. Martin"
    } ,

    {
        title:"Harry Potter",
        genre:"Fantasy",
        author:"J.K. Rowling"
    },

    {
        title:"Half Girlfriend",
        genre:"Romance",
        author:"Chetan Bhagat"
       
    },


    {
        title:"Theory Of Everthng",
        genre:"Science",
        author:"Stephen Hawkins"
    },


    {
         title:"Les Miserables",
        genre:"Historical Fiction",
        author:"Victor Hugo"
        
    }





]
signinRouter.route('/')
.get((req,res)=>{
    res.render('signin',{
        nav,
            title:'library',books
        }
    );
});

return signinRouter;
}
module.exports=router;
