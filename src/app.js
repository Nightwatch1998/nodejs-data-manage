const express = require('express')

const app = express()

app.get('/demo',(req,res)=>{
    throw new Error('测试异常功能')
})

function errorHandlerMiddleware(err,req,res,next){
    if(err){
        res.status(500)
        .json({
            message:"服务器异常"
        })
    }else{
        //
    }
}
//404的处理
function notFoundHandler(req,res,next){
    res.json({
        message:'api不存在'
    })
}

//异常处理放在最底部
app.use(notFoundHandler)
app.use(errorHandlerMiddleware)

app.listen(3000,()=>{
    console.log('server is running')
})