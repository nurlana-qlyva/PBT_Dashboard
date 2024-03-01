import { Table } from 'antd';
import { useState } from 'react';
import { Ayarlar } from '../components/Ayarlar';

const columns = [
    {
        title: 'Lokasyon',
        dataIndex: 'LOKASYON',
        width: 260,
        ellipsis: true,
    },
    {
        title: 'Toplam İş Talebi',
        dataIndex: 'TOPLAM_IS_TALEBI',
        // width: 100,
        ellipsis: true
    },
    {
        title: 'Toplam İş Emri',
        dataIndex: 'TOPLAM_IS_EMRI',
        // width: 100,
        ellipsis: true
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        LOKASYON: `Edward King ${i}`,
        TOPLAM_IS_TALEBI: 456,
        TOPLAM_IS_EMRI: 56,
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
        <div style={{ width: '100%', height: '100%' }}>

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
                scroll={{
                    x: 600,
                }}
            />
        </div>
    );
}

export default LokasyonDagilimTable

