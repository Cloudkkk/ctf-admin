import React from "react";
import axios from "axios";
import {Table, Tag, loading, Input} from "antd";
import {useEffect, useState,useRef} from "react";
import create from "@ant-design/icons/lib/components/IconFont";
export default function Four() {
  const {Search} = Input;
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

  //解析传回来的数据
  const Parse = (obj) => {
    var arr = []
    for (let i in obj) {
        let o = {};
        let res={};
        o[i] = obj[i]; //即添加了key值也赋了value值 o[i] 相当于o.name 此时i为变量
        res.name = Object.keys(o)[0];
        res.uid = Object.values(o)[0];
        arr.push(res)
    }
    return arr;
  }
  // 请求小程序和配置文件
  const myRequest = () => {
    axios({method: "get", url: `http://192.168.35.128:8080/stats/net/config`, type: 'json'})
      .then(function (response) {
        setProgram(Parse(response.data));
        console.log(Parse(response.data));
        // console.log(program,typeof program);
      });
  }
  //tianjia xiaochengxu
  const addProg = () => {
  let name = pValue;
    axios({method: "put", url: `http://192.168.35.128:8080/stats/program/${dpid[0]}/${name}`, type: 'json'})
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
      axios({method: "delete", url: `http://192.168.35.128:8080/stats/program/${dpid[0]}/${name}`, type: 'json'})
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
    axios({method: "get", url: "http://192.168.35.128:8080/stats/net/edge"})
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
          <button onClick={() => {
            myRequest(i)
          }}>{i}</button>
        )
      })}
      <div>
      {< Table columns = {
          columns
        }
        dataSource = {
          program
        } > </Table>}
      </div>

    </div>
  );
}
