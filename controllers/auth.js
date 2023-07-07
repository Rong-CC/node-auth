const jwt = require('jsonwebtoken') //token 认证
const config = require('../config')
const { get } = require('lodash')
const uuid = require('uuid')
// 生成token
const GenerateToken = user => {
    return jwt.sign({
      user_id: get(user, '_id'),
    //   user_uuid: get(user, 'user_uuid'),
      user_name: get(user, 'username'),
    //   user_role: get(user, 'user_role')
    }, config.JWT_SECRET, {
     jwtid: uuid.v4(),
      expiresIn: config.JWT_EXPIRY,
      issuer: config.JWT_ISSUER,
      audience: config.JWT_AUDIENCE,
      algorithm: config.JWT_ALG
    })
  }
  const ReturnUserInfo = user => {
    return {
      user: get(user, 'username'),
    }
  }
  
const validateToken = async function (req, res, next) {
    // console.log(req,res.userInfo,'req.headers')
    // const token = GenerateToken(req.userInfo)
    // console.log(token,'token')
    // res.cookie('authorization', token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   expires: new Date(Date.now() + config.JWT_EXPIRY)
    // })
    return res.send({ success: true, code: 200, data: ReturnUserInfo(req.userInfo)})
  }

  module.exports = {
    validateToken
  }
  