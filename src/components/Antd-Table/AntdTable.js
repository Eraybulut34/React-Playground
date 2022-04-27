import React from 'react';
import { Table, Button, message } from 'antd';

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

class AntdTable extends React.Component {
    
render() {
return (
<div>
<Table columns={columns} dataSource={dataSource} />
<Button type="primary" onClick={() => {
message.info('Click on left button.');
}}>Left Button</Button>
<Button type="primary" onClick={() => {
message.info('Click on right button.');
}}>Right Button</Button>
</div>
);
}
}

export default AntdTable;

