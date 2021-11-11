const express = require('express')
const loginRouter = require('../router/user.js')

const app = express()
app.use(loginRouter)

function log_middleware(req,res,next){
    console.log('请求来了...')
    next();
}
app.use(log_middleware)

//中间件的完整结构
//1. 是一个函数
//2. err,req,res,next-->function

function demoMiddleware(err,req,res,next){
    //1.异常处理
    //2.处理业务功能，然后转交控制权
    //3.响应请求--结束响应-->当做路由的处理函数
}

//静态文件托管
app.use(express.static('public'))

//   /test?name=233
function valid_name_middlwware(req,res,next){
    let {name} = req.query;
    if(!name || name.length){
        res.json({
            message:'缺少name参数'
        })
    }else{
        next()
    }
}
app.all('*',valid_name_middlwware)

app.get('/test',(req,res)=>{
    res.json({
        message:'test'
    })
})
app.listen(3000,()=>{
    console.log("server 启动成功")
    console.log('Express started on port 3000');
})
