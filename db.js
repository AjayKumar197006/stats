const mysql=require("mysql2")
require("dotenv").config()


const con=mysql.createConnection(
    {
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
)

function getData()
{
    return new Promise(function(success,reject)
{
    con.query(`SELECT * FROM stats`, function(err,res)
{
       if(err)
       {
        reject(err)
       }
       else
       {
        success(res)
       }
})
})
}

function addData(imgurl,tit,des,url)
{
    return new Promise(function(success,reject)
{
    con.query(`INSERT INTO stats(imgurl,title,desc,url) VALUES[?,?,?,?]` ,[imgurl,tit,des,url],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

function updateData(imgurl,tit,des,url,id)
{
    return new Promise(function(success,reject)
{
    con.query(`ALTER stats SET imgurl=?,title=?,desc=?,url=? where seq=?`,[imgurl,tit,des,url,id], function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

function deleteData(id)
{
    return new Promise(function(success,reject)
{
    con.query(`delete from stats where seq=?`,[id],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

module.exports={getData,addData,updateData,deleteData}