/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-07 20:53:25
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-07 21:35:50
 */
const express = require('express');
const { ImageModel }  = require('../models/image');
const router = express.Router();
const authMiddleware = require('./../middleware/auth');

const imageController = require('./../controllers/image')

router.get('/file/images/upload', imageController.uploadImage)

module.exports = router;