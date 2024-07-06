// command to import express
const express=require('express')

// instance for express
const app=new express();

// Connect DB
require('./connection');


// model file
const StudentModel=require('./model/StudentData')

app.use(express.json())

// async...await ->used to wait to fetch daata fromm db and contijue with other reqests. cannot  handle errors 
app.get('/students',async(req,res)=>{
    try{
        const data=await StudentModel.find();
        res.send(data);
    }catch(error){
        res.send('Data not found');
    }
})

// GET API
// app.get('/login',(req,res)=>{
//     res.send('This is Login Page')
// })
// (..)=> middliware function
// app.get('/',(req,res)=>{
//     res.send('this is home page')
// }
// )

// POST API
app.post('/addstudent',async(req,res)=>{
    try{
        var item=req.body;
        const datasave =new StudentModel(item);
        const saveddata= await datasave.save();
        res.send('Post Sucessfull')
    }catch(error){
        console.log(error)
    }
})


// Update api
app.put('/studentedit/:id',async(req,res)=>{
    try{
        const data=await StudentModel.findByIdAndUpdate(req.params.id,req.body)
        res.send('Updated Successfully')
    }catch(error){
        console.log(error)
    }
}
)

// Delete Api
app.delete('/removestudent/:id',async(req,res)=>{
    try{
        await StudentModel.findByIdAndDelete(req.params.id);
        res.send('Deleted Successfully')

    }catch(error){
        console.log(error)
    }
}
)


// to make app on listening mode (port_num,funct_to_print_message )
app.listen(3000,()=>{
    console.log('The Server is running on oport 3000')
})

