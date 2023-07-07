/*
 * @Description: 数据模型
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-04 13:28:56
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-05 16:18:50
 */

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// const username = encodeURIComponent('root')
// const password = encodeURIComponent('W08pIqLoMeRb9POx')
// const cluster = 'atlascluster.x1b0pz0.mongodb.net'
// let uri = `mongodb+srv://${username}:${password}@${cluster}/vercel`
//  mongoose.connect(uri,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('数据库连接成功')

// }).catch((err) => {
//     console.log('数据库连接失败',err)
// })

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true,   //不可重复约束
    required: true, //必填项约束
    },
  password: {
    type: String,
    required: true, 
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    },
  },
  token:{
    type: String
  }
})
// 校验用户输入密码是否正确
userSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', userSchema)

// //移除模型所有的数据
// User.db.dropCollection('users')

module.exports = { User }
