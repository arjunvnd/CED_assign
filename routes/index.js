var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  
  let todoAr=[]
  // console.log(todoAr[0])
  TODO.methods.arrayLength().call({from:coinbase})
    .then(todosLength=>{
      if(todosLength){
        for(let i = 0 ; i<=todosLength-1 ; i++){
          // console.log(i)
          TODO.methods.todoList(i).call({from:coinbase})
          .then(todo=>{
            todo._id=i
            console.log(todo)
            todoAr.push(todo)
            if(i===todosLength-1){
              // console.log(todoAr)
              res.render('index', { todos: todoAr });
            }
            
          })

      }

        
      }else{
        let todo = {
          name:`No task`,
          completed:false
        }
        res.send(`No tasks!!!`)
        // res.render('index', { todos: todoAr});
      }

      
    })
  
});
router.post('/',(req,res,next)=>{
  // alert('Hello')
  console.log(req.body)
  let addTask = req.body.task
  console.log(addTask)
  TODO.methods.createTask(addTask).send({from:coinbase,gas:6000000})
    
  res.redirect('/')
  
})
router.patch('/',(req,res,next)=>{
  console.log('Update')
  res.redirect('/')   
})

module.exports = router;
