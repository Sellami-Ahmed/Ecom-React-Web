const initialState = {
  data:[],
};

const cartReducer = (state = initialState,  { type, data }) => {
  let list=[];
  let index=-1;
  switch (type) {
    case "ADD_PRODUCT":
      list=state.data;
      return {data:[...list, {...data,count:1}]};
    case "REMOVE_PRODUCT":
      list=state.data.filter((el) => el._id !== data._id);
      return {data:list}
    case "INCREMENT_PRODUCT":
      list=state.data;
      index=list.findIndex(el=>el._id ===data._id);
      if(index !==-1){
        list[index]={...list[index],count:list[index].count+1}
        list=list.filter((el) => el.count !==0);
        return{
          data:[...list]
          }
        }
      return (state);
    case "DESINCREMENT_PRODUCT":
      list=state.data;
      index=list.findIndex(el=>el._id ===data._id);
      if(index !==-1){
        list[index]={...list[index],count:list[index].count-1}
        list=list.filter((el) => el.count !==0);
        return{
          data:[...list]
        }
      }
      return (state);
    case "CLEAR_CART":
      return (state = {data:[]});

    default:
      return state;
  }
  
};

export default cartReducer;