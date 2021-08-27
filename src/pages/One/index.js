import React from "react";
import axios from "axios";
import {Table, Tag, loading, Input} from "antd";
import {useEffect, useState,useRef} from "react";
import create from "@ant-design/icons/lib/components/IconFont";
export default function One() {
  const {Search} = Input;
  const [data,
    setData] = useState();
  const [loadStatus,
    setLoadStatus] = useState();
  const [dpid,
    setDpid] = useState([]);
  const [program,
    setProgram] = useState([]);
  const [config,
    setConfig] = useState([]);
    // const dpidnow = useRef();
    // const pInput = useRef(null);
  //解析传回来的数据
  const Parse = (arr) => {
    let tempArr = [];
    arr.forEach((item) => {
      let obj = {
        name: item[0],
        time: item[1],
        size: item[2]
      }
      tempArr.push(obj);
    })
    return tempArr;
  }
  // 请求小程序和配置文件
  const myRequest = (i) => {
    axios({method: "get", url: `http://192.168.195.128:8080/stats/program/${i}`, type: 'json'})
      .then(function (response) {
        setProgram(response.data.msg);
        console.log(Parse(response.data.msg));
        // console.log(program,typeof program);
      });
    axios({method: "get", url: `http://192.168.195.128:8080/stats/config/${i}`, type: 'json'}).then(function (response) {
      setConfig(response.data.msg);
      console.log(Parse(response.data.msg));
      // console.log(program,typeof program);
    });

  }
  const addProg = () => {
    

  
    axios({method: "put", url: `http://192.168.195.128:8080/stats/program/1/haha`, type: 'json'})
      .then(function (response) {
        console.log(response);
        // console.log(program,typeof program);
      });
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
    axios({method: "get", url: "http://192.168.195.128:8080/stats/net/edge"})
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
        <Search  placeholder="input program name plz ^_^" allowClear enterButton="添加小程序" size="large"  onSearch={addProg}
      /> {< Table columns = {
          columns
        }
        dataSource = {
          Parse(program)
        } > </Table>}
      </div>
      <div>
        <Search placeholder="input config name plz ^_^" allowClear enterButton="添加配置文件" size="large"  onSearch={addProg
      }/> {< Table columns = {
          columns_
        }
        dataSource = {
          Parse(config)
        } > </Table>}
      </div>

    </div>
  );
}
