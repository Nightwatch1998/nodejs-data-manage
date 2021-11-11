const express = require('express')

const router = express.Router()

//1.第一个场景
router.use(function(req,res,next){
    console.log('log from router');
    next();
})

function valid_login_params(req,res,next){
    let {name,password}  = req.query
    // console.log(name)
    // console.log(password)
    if(!name||!password){
        res.json({
            message:"参数校验失败"
        })
    }else{
        req.formdata = {
            name,
            password
        }
        next()
    }

}

//2.第二个场景,路由内部使用
router.get('/login',[valid_login_params/*middleware*/],(req,res)=>{
    let {formdata} = req
    res.json({
        formdata,
        message:'from router demo'
    })
}) 

module.exports = router

