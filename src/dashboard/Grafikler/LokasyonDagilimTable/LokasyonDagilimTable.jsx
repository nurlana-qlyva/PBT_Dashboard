import { Table } from 'antd';
import { useState } from 'react';
import { Ayarlar } from '../components/Ayarlar';

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
    const [pageSize, setPageSize] = useState(10);

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


    return (
        <div style={{width: '100%', height: '100%'}}>
            
            <style>
        {`
          .ant-table-cell {
            padding: 8px 16px !important;
          }
        `}
      </style>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Lokasyon Bazında İş talepleri / İş Emirleri Dağılımı</h3>
                <Ayarlar chart={<Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: pageSize, onChange: handlePageSizeChange }}
                />} />
            </div>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: pageSize, onChange: handlePageSizeChange }}
            />
        </div>
    );
}

export default LokasyonDagilimTable

