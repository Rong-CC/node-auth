/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-12 15:59:01
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-12 20:37:38
 */
const express = require('express');

const { ExperienceModel }  = require('../models/experience');

const router = express.Router();

const authMiddleware = require('./../middleware/auth');

const experienceController = require('./../controllers/experience')

// 获取公司信息
router.get('/experience', authMiddleware, experienceController.getExperience)

// 添加公司信息
router.post('/experience/add',authMiddleware, experienceController.getExperienceAdd)

// 修改公司信息
router.post('/experience/update',authMiddleware, experienceController.getExperienceUpdate)

router.get('/experience/detail',authMiddleware, experienceController.getExperienceDetail)

// 添加项目信息
router.post('/experience/project/add',authMiddleware, experienceController.getExperienceProjectAdd)

module.exports = router;