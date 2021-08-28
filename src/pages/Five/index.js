import React from "react";
import axios from "axios";
import {Table, Tag, loading, Input,Upload, Button, message} from "antd";
import {useEffect, useState,useRef} from "react";

import { UploadOutlined } from '@ant-design/icons';
import urlObj from "../../const/const"
import "../../App.css"
export default function Five() {
  const {url} = urlObj;
  const {Search} = Input;
  const [loadStatus,
    setLoadStatus] = useState();
    const [fileList,setFilelist]=useState();
  const [dpid,
    setDpid] = useState([]);
  const [program,
    setProgram] = useState([]);
  const [config,
    setConfig] = useState([]);

    const [pValue,setpValue] = useState([])
    const [pValue_,setpValue_] = useState([])

    // const dpidnow = useRef();
    // const pInput = useRef(null);
    // const btn = useRef();
    const handleChangep = (e)=>{
      setpValue(e.target.value)
    }
    const handleChangep_ = (e)=>{
      setpValue_(e.target.value)
    }
    const success = () => {
      message.success('选择成功');
    };
  // // 请求小程序和配置文件
  // const myRequest = () => {
  //   axios({method: "get", url: `${url}/stats/net/config`, type: 'json'})
  //     .then(function (response) {
  //       setProgram(Parse(response.data));
  //       console.log(Parse(response.data));
  //       // console.log(program,typeof program);
  //     });
  // }
  //tianjia xiaochengxu

  useEffect(() => {
    axios({method: "get", url: `${url}/stats/net/edge`})
      .then(function (response) {
        setDpid(response.data)
      });
    console.log(Object.prototype.toString.call(dpid));
    // setLoadStatus(true);
  }, []);
  const props = {
    name: 'file',
    action: 'http://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        // never failed
        message.success(`${info.file.name} file uploaded successfully`);
       // message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
  return (
<div>
    <div>
      选择目标交换机 {dpid.map((i) => {
        return (
          <Button onClick={() => {
           success()
          }}>{i}</Button>
        )
      })}
      </div >
      <div className={"down"}>
<Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  </div>
  </div>
  );
}
