import { combineReducers } from 'redux';

function global(state={

},action){
  switch(action.type){

  default:
    return state;
  }
}

function session(state={
  userinfo:{
    username:'Admin',
    state:1,
    sex:'男',
    adress:'山东省济南市市中区',
    introduction:'个人说明，非诚勿扰'
  }
},action){
  return state;
}

function dashboard(state={
  number:{
    users:1233,
    products:35455,
    orders:1242,
    bank:89000
  }
},action){
  return state;
}

const appReducer = combineReducers({
  global,
  session,
  dashboard
});

export default appReducer;