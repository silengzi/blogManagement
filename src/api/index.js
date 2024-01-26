import request from './request'
export const reqAllArticle = () => request({
    url: '/article/getAllArticle',
    methods: 'get'
})
// export const reqArticleByid = () => request({
//     url: '/article/getArticleById'
// })
export const reqDeleteArticle = () => request({
    url: '/article/deleteArticle',
    methods: 'delete'
})
export const reqAllUser = () => request({
    url: '/user/getAllUser'
})

