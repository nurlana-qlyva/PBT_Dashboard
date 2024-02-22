import { Table } from 'antd';
import { useState } from 'react';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Due',
        dataIndex: 'due',
    },
    {
        title: 'Location',
        dataIndex: 'location',
    },
    {
        title: '',
        dataIndex: 'order',
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        due: '2 tasks',
        location: `Main Location ${i}`,
        order: `Issue Work Order ${i}`,
    });
}

const LokasyonDagilimTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [pageSize, setPageSize] = useState(7);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const handlePageSizeChange = (current, size) => {
        setPageSize(size);
    };
    
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };


    return <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: pageSize, onChange: handlePageSizeChange }}
    />;
}

export default LokasyonDagilimTable