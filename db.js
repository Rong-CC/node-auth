/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-04 22:56:55
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-05 15:18:57
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


