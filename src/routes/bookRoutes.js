const express=require('express');
const booksRouter=express.Router();
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
booksRouter.route('/')
.get((req,res)=>{
    res.render('books',{
        nav,
            title:'library',books
        }
    );
});
booksRouter.route('/:id')
.get((req,res)=>{
    const id= req.params.id;
    res.render(
        'book',
    {
        nav,
        title:"library",
        book:books[id]
    }
  );
});
return booksRouter;
}
module.exports=router;
