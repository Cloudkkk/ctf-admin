import React from "react";
import axios from "axios";
import {Table, Tag, loading, Input,message,Button} from "antd";
import {useEffect, useState,useRef} from "react";
import create from "@ant-design/icons/lib/components/IconFont";
import urlObj from "../../const/const"
import "./index.css";
export default function Two() {

  const {Search} = Input;

  const [loadStatus,setLoadStatus] = useState();
  const [dpid,setDpid] = useState([]);
  const [program,setProgram] = useState([]);
  const [config,setConfig] = useState([]);

    const [pValue,setpValue] = useState([])
    const [pValue_,setpValue_] = useState([])
    const [cValue,setcValue] = useState([])
    const [cValue_,setcValue_] = useState([])
    // const dpidnow = useRef();
    // const pInput = useRef(null);
    // const btn = useRef();
    const {url} = urlObj;
    const handleChangep = (e)=>{
      setpValue(e.target.value)
    }
    const handleChangep_ = (e)=>{
      setpValue_(e.target.value)
    }
    const handleChangec = (e)=>{
      setcValue(e.target.value)
    }
    const handleChangec_ = (e)=>{
      setpValue_(e.target.value)
    }
       const success = () => {
      message.success('操作成功');
    };
   
  //解析传回来的数据
  const Parse = (arr) => {
    let tempArr = [];
    if (Array.isArray(arr)) {
      arr.forEach((item) => {
        let obj = {
          name: item[0],
          time: item[1],
          size: item[2]
        }
        tempArr.push(obj);
      })
    }
    
    return tempArr;
  }
  // 请求小程序和配置文件
  const myRequest = (i) => {
    success()
    axios({method: "get", url: `${url}/stats/program/${i}`, type: 'json'})
      .then(function (response) {
        setProgram(Parse(response.data.msg));
        console.log(Parse(response.data.msg));
        // console.log(program,typeof program);
      });
    axios({method: "get", url: `${url}/stats/config/${i}`, type: 'json'}).then(function (response) {
      setConfig(Parse(response.data.msg));
      console.log(Parse(response.data.msg));
      // console.log(program,typeof program);
    });

  }
  //tianjia xiaochengxu
  const addProg = () => {
    

  let name = pValue;
    axios({method: "put", url: `${url}/stats/program/${dpid[0]}/${name}`, type: 'json'})
      .then(function (response) {
        console.log(response);
        // console.log(program,typeof program);
      });
      setTimeout(()=>{
        success()
      },1000)
     
  }
  const delProg = () => {
    

    let name = pValue_;
      axios({method: "delete", url: `${url}/stats/program/${dpid[0]}/${name}`, type: 'json'})
        .then(function (response) {
          console.log(response);
          // console.log(program,typeof program);
        });
        setTimeout(()=>{
          success()
        },1000)
       
    }
    //tianjia xiaochengxu
  const addConf = () => {
    

    let name = cValue;
      axios({method: "put", url: `${url}/stats/config/${dpid[0]}/${name}`, type: 'json'})
        .then(function (response) {
          console.log(response);
          // console.log(program,typeof program);
        });
        setTimeout(()=>{
          alert('OK')
        },1000)
    }
    const delConf = () => {
    

      let name = cValue_;
        axios({method: "delete", url: `${url}/stats/config/${dpid[0]}/${name}`, type: 'json'})
          .then(function (response) {
            console.log(response);
            // console.log(program,typeof program);
          });
          setTimeout(()=>{
            alert('OK')
          },1000)
         
      }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>
    }, {
      title: "Time",
      dataIndex: "time",
      key: "time"
    }, {
      title: "Size",
      dataIndex: "size",
      key: "size"
    }
  ];
  const columns_ = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>
    }, {
      title: "Time",
      dataIndex: "time",
      key: "time"
    }, {
      title: "Size",
      dataIndex: "size",
      key: "size"
    }
  ];
  useEffect(() => {
    axios({method: "get", url: `${url}/stats/net/edge`})
      .then(function (response) {
        setDpid(response.data)
      });
    console.log(Object.prototype.toString.call(dpid));
    // setLoadStatus(true);
  }, []);
  return (

    <div>
      选择目标交换机 {dpid.map((i) => {
        return (
          <Button onClick={() => {
            myRequest(i)
          }}>{i}</Button>
        )
      })}

      <div className={"down"}>
        <Search value={pValue} onChange={handleChangep} placeholder="输入要添加的小程序名称" allowClear enterButton="添加小程序" size="large"  onSearch={addProg}
      /> 
       <Search value={pValue_} onChange={handleChangep_} placeholder="输入要删除的小程序名称" allowClear enterButton=" 删除小程序" size="large"  onSearch={delProg}
      />
      {< Table columns = {
          columns
        }
        dataSource = {
          program
        } > </Table>}
      </div>
      <div>
        <Search value={cValue} onChange={handleChangec} placeholder="输入要添加的配置名称" allowClear enterButton="添加配置文件" size="large"  onSearch={addConf
      }/> 
      <Search value={cValue_} onChange={handleChangec_} placeholder="输入要删除的配置名称" allowClear enterButton=" 删除配置文件" size="large"  onSearch={delConf}
      />{< Table columns = {
          columns_
        }
        dataSource = {
          config
        } > </Table>}
      </div>

    </div>
  );
}
