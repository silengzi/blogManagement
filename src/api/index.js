import request from './request'
export const reqAllArticle = () => request({
    url: '/article/getAllArticle'
})
export const reqAllUser = () => request({
    url: '/user/getAllUser'
})

