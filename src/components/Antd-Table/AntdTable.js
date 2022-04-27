import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";

function AntdTable() {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/comments").then(
      res => {
        setloading(false);
        setstate(
          res.data.map(row => ({
            Name: row.name,
            Email: row.email,
            id: row.id
          }))
        );
      }
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      width: 150
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 100
    }
  ];

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <Table
          columns={columns}
          dataSource={state}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      )}
    </div>
  );
}

export default AntdTable;