
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
    
      pid: ' 1025',
      command: 'sshd: mininet@pts/1',
    },{
    
      pid: '1026',
      command: '-bash',
    },{
    
      pid: '1078',
      command: 'sshd: mininet@pts/2',
    },{
    
      pid: '1079',
      command: '-bash',
    },{
    
      pid: '2296',
      command: 'sshd: mininet@notty',
    },{
    
      pid: '2309',
      command: 'sshd: mininet@notty',
    },{
    
      pid: '2437',
      command: '/home/mininet/program/1000_AES_d 8',
    },{
    
      pid: '2466',
      command: '/usr/lib/openssh/sftp-server',
    },{
    
      pid: '2467',
      command: '/home/mininet/program/1000_DES_d 10',
    },{
      
      pid: '2468',
      command: '/home/mininet/program/1000_DES_e 7',
    }
    ,{
      
      pid: ' 2798',
      command: '/usr/bin/python3 /usr/local/bin/ryu-manager /home/mininet/Projects/ryu/demonstration/controller.py /home/mininet/Projects/ryu/demonstration/ofctl_rest.py --observe-links'
    
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
  