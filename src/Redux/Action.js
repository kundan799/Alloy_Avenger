import {
    GET_DATA_ERRORS,
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
  } from "./ActionType";
  import axios from "axios";
  const BASE_URL = "https://stempedia.onrender.com/data";
  //GET
  export const getDataApi = () => (dispatch) => {
    dispatch({ type: GET_DATA_LOADING });
    return axios
      .get(`${BASE_URL}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: GET_DATA_ERRORS });
      });
  };
  
  //post
  export const addDataApi = (add) => (dispatch) => {
    return axios
      .post(`${BASE_URL}`, add)
      .then(() => {
        console.log("data posted to server");
        dispatch(getDataApi());
      })
      .catch(() => {
        console.log("getting error while send data to server");
      });
  };

 
  
  
 
  