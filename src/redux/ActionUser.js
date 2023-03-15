import axios from "axios";
const url = "https://agumenttiksolutionserver.onrender.com/api/v1/";
// const url = "http://localhost:4000/api/v1/";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};
export const Loginuser = (queary) => async (dispatch) => {
  try {
    // console.log(queary);
    dispatch({
      type: "LoginRequest",
    });
    const { data } = await axios.post(`${url}register`, queary, config);
    // console.log(data);
    dispatch({
      type: "LoginSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LoginFaild",
      payload: error.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  try {
    // console.log(queary)
    dispatch({
      type: "logoutRequest",
    });
    const { data } = await axios.get(`${url}logout`, config);
    // console.log(data);
    dispatch({
      type: "logoutSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "logoutFaild",
      payload: error.message,
    });
  }
};
export const getuser = () => async (dispatch) => {
  try {
    // console.log(queary)
    dispatch({
      type: "getuserRequest",
    });
    const { data } = await axios.get(`${url}getuser`, config);
    // console.log(data);
    dispatch({
      type: "getuserSuccess",
      payload: data?.user,
    });
  } catch (error) {
    dispatch({
      type: "getuserFaild",
      payload: error.message,
    });
  }
};

export const UploadFile = (queary) => async (dispatch) => {
  try {
    // console.log(queary)
    dispatch({
      type: "UploadFileRequest",
    });
    const { data } = await axios.post(`${url}UploadFile`, queary, config);
    dispatch({
      type: "UploadFileSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UploadFileFaild",
      payload: error.message,
    });
  }
};
