/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-04 22:56:55
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-12 17:15:14
 */
const mongoose = require('mongoose')
const username = encodeURIComponent(process.env.DB_USER)
const password = encodeURIComponent(process.env.DB_PASS)
let uri = `mongodb+srv://${username}:${password}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`

 mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('数据库连接成功')

}).catch((err) => {
    console.log('数据库连接失败',err)
})



// 4.2 : 连接异常 --- 回调函数的参数中保存了异常的信息
mongoose.connection.on('error',function (err){
    console.log('数据库连接异常！'+err)
})
// 4.3 : 断开连接
mongoose.connection.on('disconnectied',function (){
    console.log('断开数据库的连接!')
})