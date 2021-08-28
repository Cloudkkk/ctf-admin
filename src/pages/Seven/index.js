
import React from "react";
import axios from "axios";
import {Table, Tag, loading, Input,Space} from "antd";
import {useEffect, useState,useRef} from "react";
import create from "@ant-design/icons/lib/components/IconFont";
export default function Seven() {
  const columns = [
 {
      title: "Pid",
      dataIndex: "pid",
      key: "pid"
    },
    {
      title: "Command",
      dataIndex: "command",
      key: "command"
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>重启 {record.name}</a>
          <a>暂停</a>
        </Space>
      ),
    },
 
  ];
  const data = [ 
    {
    
      pid: '1',
      command: 'kthreadd',
    },{
    
      pid: '2',
      command: 'rcu_gp',
    },{
    
      pid: '3',
      command: 'rcu_sched',
    },{
    
      pid: '5',
      command: 'rcu_bh',
    },{
    
      pid: '7',
      command: 'kdevtmpfs',
    },{
    
      pid: '8',
      command: 'netns',
    },{
    
      pid: '9',
      command: 'kauditd',
    },{
    
      pid: '10',
      command: 'khungtaskd',
    },{
    
      pid: '11',
      command: 'writeback',
    },{
      
      pid: '12',
      command: 'ksmd',
    }]
  return(<div>
     {< Table columns = {
    columns
  }
  dataSource = {
    data
  } > </Table>}
  </div>)
 
}
  