/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-05 14:45:07
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-07 20:29:39
 */
const { User } = require('./models/user');

// 用来验证token的
const JwtStrategy = require('passport-jwt').Strategy // 验证token
//用来从请求中提取JWT的
const ExtractJwt = require('passport-jwt').ExtractJwt  

const config = require('./config')

// 从请求中提取JWT的配置
const opts = {
    // Prepare the extractor from the header.
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    // secretOrKey   : 'jwt_secret_key'
    // jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    // Use the secret passed in which is loaded from the environment. This can be
    // a certificate (loaded) or a HMAC key.
    secretOrKey: config.secret,
    // Verify the issuer.
    issuer: config.JWT_ISSUER,
    // Verify the audience.
    audience: config.JWT_AUDIENCE,
    // Enable only the HS256 algorithm.
    algorithms: [config.JWT_ALG],
    // Pass the request object back to the callback so we can attach the JWT to it.
    passReqToCallback: true
  }
  


// module.exports = function (passport){
//     passport.use(new JwtStrategy(opts,
//         async function(req,token, done) {
//             console.log(req,token,'token')
//             const user = await User.findOne({token:token}).catch((err)=>{
//                  if (err) { return done(err); }
//             });
//             console.log(user)
//             if (!user) { return done(null, false); }
//             return done(null, user);
//         }
//     ));
// }
module.exports = passport => {
    passport.use(new JwtStrategy(opts, async function (req,jwt_payload, done) {
    console.log(req,'jwt_payload------')
      try {
        const userInfo = await User.findOne({
          _id: jwt_payload.id
        })
        if (!!userInfo) {
          done(null, userInfo)
        } else {
          done(null, false)
        }
      } catch (e) {
        return done(e)
      }
    }))
  }
 