const express = require("express");
const connectDB = require("./db/db");
const noteModel=require('./models/notemodel')

const app=express()
app.use(express.json())

app.post('/notes',async(req,res)=>{
 const data=req.body
await noteModel.create({
    title:data.title,
     discription:data.discription
})
res.status(201).json({
message:"note created"
})
})
app.get('/notes',async(req,res)=>{
    const notes = await noteModel.find({
        title:"loli"
    })

    res.status(200).json({
        message:"note fatch successfully",
        notes:notes
    })

})

app.delete('/notes/:id', async(req,res)=>{
 const id=req.params.id
 await noteModel.findOneAndDelete({
    _id:id
 })

 res.status(200).json({
    message:"note delete"
 })

})

app.patch("/notes/:id",async(req,res)=>{
    const id=req.params.id
    const description=req.body.description

    await noteModel.findOneAndUpdate({_id:id},{description:description})

    res.status(200).json({
        message:"note updated"
    })
})


module.exports=app
