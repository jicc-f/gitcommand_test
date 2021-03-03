export default{
    addCart(context,payload){
        let oldProduct = context.state.mygoods.find(item => item.iid === payload.iid);
        //判断
       return new Promise((resolve,reject) =>{
        if(oldProduct){
          // oldProduct.counter += 1;
          context.commit("addCounter",oldProduct);
          resolve("添加商品成功+1");
        }else{
          //  playload.counter = 1;
          //  state.mygoods.push(playload);
          context.commit("addGoods",payload);
          resolve("添加商品成功")
          //  console.log(state.mygoods)
        }

       })
  
    }
  }