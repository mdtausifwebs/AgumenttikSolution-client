import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getfile } from "../../redux/Fileupload";
const Filesget = () => {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.reducer);
  useEffect(() => {
      console.log('files', files);
    const getdata = async () => {
      await dispatch(getfile());
    };
    getdata();
  }, [dispatch,files]);
  return <div>Filesget</div>;
};

export default Filesget;
