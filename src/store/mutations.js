export default{
        addCounter(state,payload){
             payload.counter += 1;     
        },
        addGoods(state,payload){
            payload.isChecked  = true;
            payload.counter = 1;
            state.mygoods.push(payload);
        }
      }