import axios from "axios";
const url = "https://agumenttiksolutionserver.onrender.com/api/v1/";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const upload = (queary) => async (dispatch) => {
  try {
    // console.log('queary', queary);
    dispatch({
      type: "uploadRequest",
    });
    const { data } = await axios.post(`${url}upload`, queary, config);
    // console.log(data);
    dispatch({
      type: "uploadSuccess",
      payload: data.file,
    });
  } catch (error) {
    dispatch({
      type: "uploadFaild",
      payload: error.message,
    });
  }
};


export const getfile = () => async (dispatch) => {
  try {
    // console.log(queary);
    dispatch({
      type: "getfileRequest",
    });
    const { data } = await axios.get(`${url}getfile`, config);
    // console.log(data);
    dispatch({
      type: "getfileSuccess",
      payload: data.file,
    });
  } catch (error) {
    dispatch({
      type: "getfileFaild",
      payload: error.message,
    });
  }
};
