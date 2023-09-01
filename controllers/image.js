/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-07 20:52:51
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-14 17:37:24
 */
const etag = require('etag');

const  uploadImage  = (req, res, next) => {
    res.set('Cache-Control', 'public, max-age=36000');

    // const expirationDate = new Date();
    // expirationDate.setHours(expirationDate.getHours() + 1);
  
    // // 设置 Expires 头
    // res.setHeader('Expires', expirationDate.toUTCString());
    
    // const content = 'Hello, world!';
    console.log('req', '我请求了')
    // const hash = etag(content);
    res.json({ message: 'hello index!'});
    // const { file } = req
    // if (!file) {
    //   return res.status(400).send({
    //     success: false,
    //     message: '图片不能为空',
    //   })
    // }
    // if (file.size > 300){
    //     return res.status(400).send({
    //         success: false,
    //         message: '图片不能大于300kb',
    //     })
    // }
    // next()
}
module.exports = {
    uploadImage
}