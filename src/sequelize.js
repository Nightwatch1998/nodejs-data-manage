const express = require('express')
const app = express()
const memberRouter = require('../router/member')
const skuRouter = require('../router/sku')
const models = require('../models')
//注册路由
app.use('/member',memberRouter)
app.use('/sku',skuRouter)

//async await异步操作
//将前端数据存入数据库
app.get('/create',async (req,res)=>{
    let {name} =req.query
    let user = await models.User.create({
        name
    })
    console.log(user)
    res.json({
        message:"创建成功",
        user
    })
})

//前端访问数据库数据
app.get('/list',async (req,res)=>{
    let list = await models.User.findAll()
    res.json({
        list
    })
})

//访问单条数据
app.get('/detail/:id',async (req,res)=>{
    let {id} = req.params
    let user = await models.User.findOne({
        where : {
            id
        }
    })
    res.json({
        user
    })
})

app.listen(3000,()=>{
    console.log("server 启动成功")
})