/*
 * @Description: 用户模块
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-04 15:50:16
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-12 17:38:07
 */
const express = require('express')
const { User } = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config')
const passport = require('passport')
const router = express.Router()
const { get } = require('lodash')
const authMiddleware = require('./../middleware/auth')
const authController = require('./../controllers/auth')
const uuid = require('uuid')

const SECRET = config.secret
require('../passport')(passport)


const GenerateToken = user => {
  return jwt.sign({
    id: get(user, '_id'),
    // user_uuid: get(user, 'user_uuid'),
    // user_name: get(user, 'user_name'),
    // user_role: get(user, 'user_role')
  }, config.secret, {
    jwtid: uuid.v4(),
    expiresIn: config.JWT_EXPIRY,
    issuer: config.JWT_ISSUER,
    audience: config.JWT_AUDIENCE,
    algorithm: config.JWT_ALG
  })
}


//  获得所有用户
router.get('/users', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

router.post('/register', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, message: '请输入您的账号密码' })
  }
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
  }).catch((err) => {
    if (err.code === 11000) {
      res.json({ success: false, message: '用户名已存在' })
    }
    if (err) {
      res.json({ success: false, message: '注册失败', err })
    }
  })
  res.json({ success: true, message: '注册成功' })
})

router.post('/login', async (req, res) => {
  const username = get(req, 'body.username')
  const password = get(req, 'body.password')
  // console.log(username, password, 'username, password')
  const user = await User.findOne({
    username: req.body.username,
  })
  if (!user) {
    res.json({ success: false, message: '认证失败,用户不存在!' })
  }
  user.comparePassword(req.body.password, (err, isMatch) => {
    if (isMatch && !err) {
      const token = GenerateToken(user)
      // user.token = token
      user.save(function (err) {
        if (err) {
          res.send(err)
        }
      })
      res.json({
        success: true,
        message: '验证成功!',
        token: 'Bearer ' + token,
        name: username,
      })
    } else {
      res.json({ success: false, message: '认证失败,密码错误!' })
    }
  })
})
// // 中间件
// const authMiddleware = async (req, res, next) => {
//   const raw = String(req.headers.authorization).split(' ').pop()
//   const { id } = jwt.verify(raw, SECRET, (err, data) => {
//     console.log(err, 'err')
//     if (err) {
//       res.status(401).send({
//         message: '请先登录',
//         success: false,
//       })
//     } else {
//       next()
//     }
//   })

//   req.user = await User.findById(id)
//   next()
// }
console.log(authMiddleware, 'authMiddleware')
router.get(
  '/profile',
  // passport.authenticate('jwt', { session: false }),
  authMiddleware,
  authController.validateToken
)
module.exports = router
