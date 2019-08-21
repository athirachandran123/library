const express=require('express');
const signupRouter=express.Router();
function router(nav){

books=[
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
signupRouter.route('/')
.get((req,res)=>{
    res.render('books',{
        nav:[
            {
                    link:'/books',
                    title:'books'
            },
            {
                    link:'/authors',
                    title:'Authors'
            }
            ],
            title:'library',books
        }
    );
});

return signupRouter;
}
module.exports=router;
