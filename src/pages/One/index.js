import React from "react";
import axios from "axios";
import { useEffect } from "react";
export default function One() {
  const arr = [];
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
  }, []);

  return arr.map((item) => {
    return <div>{item}</div>;
  });
}
