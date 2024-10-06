const express=require("express")
const db=require("./db.js")
const cors=require("cors")


const app=express()
app.use(express.json())
app.use(cors())




app.listen(8000,()=>
{
    console.log("server started")
})

app.get('/data',(req,res)=>
    {
        db.getData()
        .then((data)=>
        {
            res.send(data)
        })
        .catch((err)=>
        {
            res.send(err)
        })
    })
app.post('/data',(req,res)=>
{
    db.addData(req.body.imgurl,req.body.title,req.body.desc,req.body.url)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })

})

app.put('/data/:id',(req,res)=>
{
    const id=req.params.id
    db.updateData(req.body.imgurl,req.body.title,req.body.desc,req.body.url,id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.delete('/data/:id',(req,res)=>
{
    const id=req.params.id
    db.deleteData(id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})