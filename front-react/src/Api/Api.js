import { apiUrl, headers } from "../Config/Config";
import STORE from "../Redux/Store"
const getToken=()=>{
  return STORE.getState().auth.token
}
const executeApi = async (api,method,body) => {
  const response = await fetch(apiUrl+api, {
    method: method,
    body: body,
    headers: headers,
  });
  return response.json();
};
const reqTokenApi = async (api,method,body) => {
  const response = await fetch(apiUrl+api, {
    method: method,
    body: body,
    headers: {...headers,
    'Authorization':"Bearer "+getToken(),},
  });
  return response.json();
};
const noBodyApi = async (api,method) => {
  const response = await fetch(apiUrl+api, {
    method: method,
    headers: {...headers,
    'Authorization':"Bearer "+getToken(),},
  });
  return response.json();
};
export const signUp=(body)=>executeApi("signUp","POST",body);
export const signIn=(body)=>executeApi("signIn","POST",body);
export const getAllProducts=()=>noBodyApi("product/getAll","GET");
export const addProduct=(body)=>reqTokenApi("product/add","POST",body);
