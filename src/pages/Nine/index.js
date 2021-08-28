import React from "react";
import axios from "axios";
import {Table, Tag, loading, Input} from "antd";
import {useEffect, useState,useRef} from "react";
import create from "@ant-design/icons/lib/components/IconFont";
import urlObj from "../../const/const"
export default function Four() {
  const [program,setProgram] = useState([]);

    // const dpidnow = useRef();
    // const pInput = useRef(null);

const {url} = urlObj;

  const Parse = (obj) => {
    let res = [];
    
    for(let i in obj){
    //  console.log(obj[i]);
     let arr = obj[i]
     let tempArr = [];
     if (Array.isArray(arr)) {
       arr.forEach((item) => {
         let obj = {
           key: item[0],
           value: item[1]
         }
         tempArr.push(obj);
       })
       res.push(tempArr)
     }
    }
    console.log(res); 
    return res;
  }
 // 请求小程序和配置文件
  const myRequest = () => {
    axios({method: "get", url: `${url}/stats/net/config`, type: 'json'})
      .then(function (response) {
        setProgram(Parse(response.data));
        console.log(response.data);
        // console.log(program,typeof program);
      });
  }

 
 
  const columns = [
    {
      title: "加密算法",
      dataIndex: "key",
      key: "key",
      render: (text) => <a>{text}</a>
    }, {
      title: "秘钥",
      dataIndex: "value",
      key: "value"
    },
  ];
 
  useEffect(() => {
    axios({method: "get", url: `${url}/stats/net/program`})
      .then(function (response) {
        setProgram(Parse(response.data))
        console.log(program);
      });
   
    // console.log(Object.prototype.toString.call(dpid));
    // setLoadStatus(true);
  },[]);

  return (

    <div>
      {program.map((i,index)=>{
       return( 
         <div>
         {index+1}号交换机
         {< Table columns = {
          columns
        }
        dataSource = {
          i
        } > </Table>}
        </div>
        )
      })}
    </div>
  );
}
