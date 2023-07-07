/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-04 15:48:39
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-07 20:59:52
 */
module.exports = (app)=>{
    app.get('/', (req, res) => {
        res.json({ message: 'hello index!'});
    });
     // 在所有users路由前加/api
    app.use('/api', require('./user')); // 用户模块
    app.use('/api', require('./image')); // 图片模块

}