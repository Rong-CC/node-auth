/*
 * @Description: 企业信息
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-12 16:20:31
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-12 20:33:52
 */
const { Experience, ExperienceProject } = require('../models/experience')

// 获取项目信息
const getExperience = async (req, res) => {
  const experience = await Experience.find()
  res.send({
    code: 200,
    success: true,
    data: experience,
  })
}
// 添加公司信息
const getExperienceAdd = async (req, res) => {
  const experience = await Experience.create(req.body).catch((err) => {
    if (err) {
      res.json({ success: false, message: '添加失败', err })
    }
    console.log(company, 'pa')
  })
  res.json({ success: true, message: '添加失败' })
}
// // 修改公司信息
const getExperienceUpdate = async (req, res) => {}

// 获取公司详情
const getExperienceDetail = async (req, res) => {
 // 第一种联合查询
  try {
    const ex = await Experience.findOne({
      companyId: req.query.companyId,
    }).populate('projects')
    console.log(ex)
    if (!ex) {
      console.log(res.status, '33')
     res.status(200).json({
        code: 500,
        success: false,
        message: '找到不数据',
      })
    } else {
      res.json({
        code: 200,
        success: true,
        data: ex,
      })
    }
  } catch (err) {
    console.log(err)
  }

//第二次种 暂时没实现
//  Experience.aggregate([
//     {
//         $lookup: {
//             form: "ExperienceProject",
//             localField: 'companyId',
//             foreignField: 'experienceId',
//             as: 'inventory_docs'
//         },
        
//          $match:{
//                 companyId: req.query.companyId
//         }
        
//     }
//  ],(err,data)=>{
//     console.log(err,data)
//  })
}

const getExperienceProjectAdd = async (req, res) => {
  const experience = await ExperienceProject.create(req.body).catch((err) => {
    if (err) {
      res.json({ success: false, message: '添加失败', err })
    }
  })
  res.json({ success: true, message: '添加成功!' })
}

module.exports = {
  getExperience,
  getExperienceAdd,
  getExperienceUpdate,
  getExperienceProjectAdd,
  getExperienceDetail,
}
