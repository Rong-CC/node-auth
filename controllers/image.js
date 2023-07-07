const etag = require('etag');

const  uploadImage  = (req, res, next) => {
    const content = 'Hello, world!';
   const hash = etag(content);
    // res.set({
    //     'ETag': hash,
    //     'maxAge': 10000,
    //     'CacheControl': 'public, max-age=3600'
    //     // 'Expires':  new Date(new Date().getTime() + 60 * 1000)
    //     // 'Cache-Control': 'no-cache',
    //   });
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