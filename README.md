## web服务器 如何处理一个请求

* url-->网络-->dns解析-->目标服务器   
## 1.定义一个api/路由 (get/post/detele/put) 都可以得到响应

    app.all('/demo',(req,res)=>{})

## 2.无论客户端使用任何uri,都可以得到响应
    
    app.all('*',(req,res)=>{})

## 3.路由的拆分
    express.Router()
* member
* sku
* order

# 中间件
* app级别的使用
* router级别的使用
* 异常处理

## mysql
* node-application-->ORM(sequelize)-->驱动(node-mysql)-->mysql db

