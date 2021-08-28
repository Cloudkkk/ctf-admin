import React from "react";
import axios from "axios";
import {Table, Tag, loading, Input,message,Button} from "antd";
import {useEffect, useState,useRef} from "react";
import create from "@ant-design/icons/lib/components/IconFont";
import "../../App.css"
import urlObj from "../../const/const"
export default function Three() {
  const {Search} = Input;
const {url} = urlObj;
  const [loadStatus,
    setLoadStatus] = useState();
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
  //解析传回来的数据
  const Parse = (arr) => {
    let tempArr = [];
    if (Array.isArray(arr)) {
      arr.forEach((item) => {
        let obj = {
          name: item[0],
          uid: item[1],
        }
        tempArr.push(obj);
      })
    }
    
    return tempArr;
  }
  // 请求小程序和配置文件
  const myRequest = (i) => {
    success()
    axios({method: "get", url: `${url}/stats/user/${i}`, type: 'json'})
      .then(function (response) {
        setProgram(response.data.msg);
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
        alert('OK')
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
      title: "Uid",
      dataIndex: "uid",
      key: "uid"
    },
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
        {/* <Search value={pValue} onChange={handleChangep} placeholder="输入要添加的用户名" allowClear enterButton="添加" size="large"  onSearch={addProg}
      /> 
       <Search value={pValue_} onChange={handleChangep_} placeholder="输入要删除的用户名" allowClear enterButton="删除" size="large"  onSearch={delProg}
      /> */}
      {< Table columns = {
          columns
        }
        dataSource = {
          Parse(program)
        } > </Table>}
      </div>

    </div>
  );
}
