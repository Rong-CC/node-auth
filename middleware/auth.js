/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-06 21:43:37
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-07 20:38:40
 */
module.exports = function (req, res, next) {
    req.passport && req.passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) { return next(err) }
        if (!user)   return res.status(401).send({ success: false, code: 200, message: '权限禁止' })
        req.userInfo = user
        next()
      })(req, res, next)
  }