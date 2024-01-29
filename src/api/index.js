import request from './request'
export const reqAllArticle = () => request({
    url: '/article/getAllArticle',
    method: 'get'
})
export const reqArticleById = (id) => request({
    url: '/article/getArticleById/' + id,
    method: 'get'
})
export const reqCreateArticle = (data) => request({
    url: '/article/createArticle',
    method: 'post',
    data
})
export const reqUpdateArticle = (data) => request({
    url: '/article/updateArticle',
    method: 'post',
    data
})
export const reqDeleteArticle = (formData) => request({
    url: '/article/deleteArticle',
    method: 'post',
    data: formData
})
export const reqAllUser = () => request({
    url: '/user/getAllUser'
})

