import {Router} from 'express';
import {Todo} from '../models/todosM'

const router=Router();



const todos:Todo[]=[]; //using models


router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post("/todo",(req,res,next)=>{

   const newTodo:Todo={
    id:new Date().toISOString(),
    text:req.body.text
   }; 

   todos.push(newTodo);
   res.json({todos:todos});
})

router.post("/deleteTodo",(req,res,next)=>{
    const Id=req.body.Id;
    let flag=0;
    todos.forEach(ele => {
        if(ele.id==Id)
        {
            let index=todos.indexOf(ele);//finding the index of to be deleted item.
            todos.splice(index,1); //deleting the element from todo list
            flag=1;
        }   
    });

    if(flag==0)
    {
        res.status(404).json({"message":"id not found"})
    }
    else{
        res.json({"message":"item deleted"});
    }
})

export default router;