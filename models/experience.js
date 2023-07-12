/*
 * @Description:  项目信息
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-07-12 15:59:42
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-07-12 18:33:54
 */
const mongoose = require('mongoose')

// 为下方数据写一条数据
// db.experience.insert({
    // company: '北京百度网讯科技有限公司',
    // companyId: '1',
    // companyNum: 10000,
    // timeStart: new Date('2018-09-01'),
    // timeEnd: new Date('2020-09-01'),
    // city: '北京',
    // location: '北京市海淀区西北旺东路10号院百度科技园1号楼',
    // description: '百度是全球最大的中文搜索引擎、最大的中文网站。百度是中国最大的搜索引擎，同时也是最大的中文网站。百度是一家基于中国的跨国公司，业务涵盖搜索引擎、音乐、电子商务、无线搜索、百科知识、娱乐服务、社交网络等领域，拥有超过5万名员工，遍布全球多个国家。',
//     project: [
//         {
//             experienceId: '1',
//             companyId: '1',
//             projectName: '百度搜索',
//             projectDescription: '百度搜索是百度公司推出的一款互联网搜索服务，于2000年1月1日正式上线，是全球最大的中文搜索引擎，同时也是最大的中文网站。百度搜索是中国最大的搜索引擎，同时也是最大的中文网站。百度搜索是一家基于中国的跨国公司，业务涵盖搜索引擎、音乐、电子商务、无线搜索、百科知识、娱乐服务、社交网络等领域，拥有超过5万名员工，遍布全球多个国家。',
//             projectImage: 'https://img1.baidu.com/it/u=2358683615,2576306305&fm=26&fmt=auto&gp=0.jpg',
//             projectUrl: 'https://www.baidu.com/'
//         },
//         {
//             experienceId: '1',
//             companyId: '1',
//             projectName: '百度贴吧',
//             projectDescription: '百度贴吧是百度公司推出的一款互联网搜索服务，于2000年1月1日正式上线，是全球最大的中文搜索引擎，同时也是最大的中文网站。百度贴吧是中国最大的搜索引擎，同时也是最大的中文网站。百度贴吧是一家基于中国的跨国公司，业务涵盖搜索引擎、音乐、电子商务、无线搜索、百科知识、娱乐服务、社交网络等领域，拥有超过5万名员工，遍布全球多个国家。',
//             projectImage: 'https://img1.baidu.com/it/u=2358683615,2576306305&fm=26&fmt=auto&gp=0.jpg',
//             projectUrl: 'https://tieba.baidu.com/'
//         },
//    ]
// })

const experienceSchema = new mongoose.Schema({
    // 公司名字
    company: { 
        type: String,
        required: true
    },
    // 公司id
    companyId:{
        type: String,
        unique: true,
    },
    // 公司人数
    companyNum: {
        type: Number
    },  
    // 入职开始时间
    timeStart: {
        type: Date,
        required: true
    },
    // 入职结束时间
    timeEnd: {
        type: Date,
        required: true
    },
    // 城市
    city: {
        type: String,
    },
    // 公司所在地址
    location: {
        type: String,
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'experienceProject'
    }],
    // 描述
    description: {
        type: String,
    },
})

const  experienceProjectSchema = new mongoose.Schema({
    // 项目id
    experienceId: {
        type: String,
    },
 
    // 项目名称
    projectName: {
        type: String,
    },
    // 项目描述
    projectDescription: {
        type: String,
    },
    // 项目图片
    projectImage: {
        type: Array,
    },
    // 项目技术栈
    skills:{
        type: Array,
    },
    // 项目职责
    task: {
        type: String,
    }
  

})

const Experience = mongoose.model('Experience', experienceSchema)

const ExperienceProject = mongoose.model('experienceProject', experienceProjectSchema)    

module.exports = { 
    Experience,
    ExperienceProject
 }