import request from './request'
export function getDetailData(iid){
  return  request({
      url:'/detail',
      params:{
          iid
      }
  })
}
export  class Base{
  constructor(itemInfo,columns,services){
    //标题
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    //现在的价格
    this.lowNowPrice = itemInfo.lowNowPrice
    //价格区间
    this.newPrice = itemInfo.price;
    //过去价格
    this.oldPrice = itemInfo.oldPrice;
    //折扣
    this.discount = itemInfo.discountDesc;
    //sell-info信息
    this.columns = columns;
    // delivery-info
    this.services = services;
    
}
}


export class Shop{
  constructor(shopInfo){
    // 店铺logo
      this.logo = shopInfo.shopLogo;
    // 店铺名字
      this.name = shopInfo.name;
      
      this.cFans = shopInfo.cFans;
      this.cSells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
  }
}
export class GoodsParams{
  constructor(info,rule){
    //image里可能没有值
     this.image = info.image ? info.image[0] :''
     this.infos = info.set;
     this.sizes= rule.tables;
  }
}

