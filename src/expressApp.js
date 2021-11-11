const express = require('express')
//实例化
const app = express()
const port = 3000

//注册路由
const memberRouter = require('../router/member.js')
const skuRouter = require('../router/sku.js')
app.use('/member',memberRouter) //member/list
app.use('/sku',skuRouter)    //sku/list

//通过请求方法
app.get('/name/:age',(req,res)=>{
    let {age} = req.params;
    console.log(age)
    res.json({
        name:'tom',
        age
    })
})
app.post('/name',(req,res)=>{
    res.send('tom post')
})

//通过uri
app.get('/user/byname',(req,res)=>{
    let {name} = req.query;
    res.json({
        name
    })
})
app.get('/user/byid',(req,res)=>{
    let {id} = req.query;
    res.json({
        id
    })
})
// 任何请求方式
app.all('/demo',(req,res)=>{
    res.json({
        message:'demo',
        method:req.method
    })
})
//任何的URL
// app.all('*',(req,res)=>{
//     res.json({
//         message:'demo',
//         method:req.method,
//         uri:req.path
//     })
// })
app.listen(port,()=>{
    console.log('server启动成功')
})