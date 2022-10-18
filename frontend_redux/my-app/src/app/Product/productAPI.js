// A mock function to mimic making an async request for data
import axios from "axios";


const SERVER_URL_GET_PER_CAT="http://127.0.0.1:8000/api/getproductspercat/"
const SERVER_URL_GET="http://127.0.0.1:8000/api/getproduct/"
const SERVER_URL_UPD="http://127.0.0.1:8000/api/updateproduct/"
const SERVER_URL="http://127.0.0.1:8000/api/updateproduct/"


export function getData(cat_id) {
  return new Promise((resolve) =>
  axios(SERVER_URL_GET_PER_CAT + cat_id).then((res) => resolve({ data: res.data })),
  );
}

export const addData = (newData) => {
  // console.log(newData);
  return new Promise((resolve) =>
    axios.post(SERVER_URL, newData).then((res) => resolve({ data: res.data }))
  );
};

export const delData = (id) => {
  // console.log(id);
  return new Promise((resolve) =>
    axios.delete(SERVER_URL+ id).then((res) => resolve({ data: res.data }))
  );
};

export function updData(newData,id,token) {
  return new Promise((resolve) =>
    axios.patch(SERVER_URL_UPD +id, newData,{
      headers: {
          'Authorization': `Bearer ${token}`
      }
  }).then((res) => resolve({ data: res.data }))
  );
}