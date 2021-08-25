import React from "react";
import axios from "axios";
import { Table, Tag, Space, loading } from "antd";
import { useEffect, useState } from "react";
export default function One() {
  const [data, setData] = useState();
  const [loadStatus, setLoadStatus] = useState();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  useEffect(() => {
    // const a = "";
    // axios({
    //   method: "get",
    //   url: "http://web.juhe.cn/environment/air/cityair",
    //   params: {
    //     city: "北京",
    //     key: "ae3dd4398ddb67c891f8735d4e9bddf3",
    //   },
    // }).then(function (response) {
    //   arr.push(response);
    //   a = response;
    //   console.log(typeof a);
    //   console.log(":", a);
    // });
    setLoadStatus(true);
    setTimeout(() => {
      console.log("3000ms");
      console.log(loadStatus);
      setLoadStatus(false);
      setData([
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
        {
          key: "4",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
        {
          key: "5",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
      ]);
    }, 3000);
  }, []);

  return (
    <div>
      {<Table columns={columns} dataSource={data} loading={loadStatus}></Table>}
    </div>
  );
}
