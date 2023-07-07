/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-04 15:52:56
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-06 21:38:56
 */
module.exports = {
    secret : '123123123123213213',
    host : process.env.DB_HOST || 'localhost',
    port : process.env.DB_PORT || '27017',
    JWT_SECRET: 'renyide',
    JWT_EXPIRY: 86400000,
    JWT_ISSUER: 'RMS',
    JWT_AUDIENCE: 'RMS_XH',
    JWT_ALG: 'HS256'
  };