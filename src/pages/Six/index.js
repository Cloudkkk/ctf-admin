import React from "react";
import axios from "axios";
import {Table, Tag, loading, Input} from "antd";
import {useEffect, useState,useRef} from "react";
import create from "@ant-design/icons/lib/components/IconFont";
export default function Six() {
  const columns = [
    {
      title: "交换机编号",
      dataIndex: "a",
      key: "a",
      render: (text) => <a>{text}</a>
    }, {
      title: "CPU占用率",
      dataIndex: "b",
      key: "b"
    },
    {
      title: "磁盘使用情况",
      dataIndex: "c",
      key: "c"
    },
    {
      title: "内存使用情况",
      dataIndex: "d",
      key: "d"
    },
  ];
  const data = [ 
  {
    key: '1',
    a: 'S1',
    b: 13,
    c:"3.5 GB/8 GB",
    d:"1.5 GB/1 GB"
  },{
    key: '2',
    a: 'S2',
    b: 14,
    c:"4.5 GB/8 GB",
    d:"1.8 GB/1 GB"
  },{
    key: '3',
    a: 'S3',
    b: 18,
    c:"3.8 GB/8 GB",
    d:"2.1 GB/1 GB"
  },]
  return(<div>
     {< Table columns = {
    columns
  }
  dataSource = {
    data
  } > </Table>}
  </div>)
 
}
  