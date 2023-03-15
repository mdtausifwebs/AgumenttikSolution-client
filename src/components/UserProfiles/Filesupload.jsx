import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { upload } from "../../redux/Fileupload";
const Filesupload = () => {
  const dispatch = useDispatch();
  const [filename, setfilename] = useState();
  const [fileurl, setfileurl] = useState();
  const [filetype, setfiletype] = useState();

  const handleFilechange = ({ name, base64, type }) => {
    // console.log('base64',base64.split(","));
    // if (type.split("/")[0] === "image" || Number(size.split(" ")[0]) > 10000) {
    //   alert("Only Images allowed!!");
    //   return;
    // }
    setfilename(name);
    setfileurl(base64.split(",")[1]);
    setfiletype(type);
  };
  const Submithandler = async () => {
    const obj = {
      name: filename,
      url: fileurl,
      type: filetype,
    };
    // console.log("obj", obj);
    await dispatch(upload(obj));
  };

  return (
    <div>
      <div>
        <div>
          <FileBase type="file" multiple={false} onDone={handleFilechange} />
        </div>
        <div>
          <button onClick={Submithandler}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Filesupload;
