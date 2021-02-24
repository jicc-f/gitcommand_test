import request from './request'

 export function getRecommendData(){
  return  request({
         url:'/recommend'
     })
 }