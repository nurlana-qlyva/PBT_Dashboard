import useFetch from '../../../hooks/useFetch'
import { useState } from 'react';
import { Spin, Table } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const columns = [
    {
        title: 'Makine tipi',
        dataIndex: 'MAKINE_TIPI',
    },
    {
        title: 'Adet',
        className: 'column-money',
        dataIndex: 'MAKINE_SAYISI',
        align: 'center',
    },
    {
        title: 'Yüzde',
        dataIndex: 'MAKINE_SAYISI',
        render: (text) => `${text}%`,
    },
];

const MakineTipEnvanter = () => {
    // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [data, isLoading] = useFetch("GetMakineTipEnvanter?ID=2")

    // const onSelectChange = (newSelectedRowKeys) => {
    //     setSelectedRowKeys(newSelectedRowKeys);
    // };

    const handlePageSizeChange = (current, size) => {
        setPageSize(size);
    };

    // const rowSelection = {
    //     // selectedRowKeys,
    //     onChange: onSelectChange,
    // };

    return (
        < div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Makine Tiplerine Göre Envanter Dağılımı</h3>
                <Ayarlar chart={<Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    // rowSelection={rowSelection}
                    pagination={{ pageSize: pageSize, onChange: handlePageSizeChange }}
                />} />
            </div>
            {
                isLoading ? <Spin size='large' /> :
                    (<Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        // rowSelection={rowSelection}
                        pagination={{ pageSize: pageSize, onChange: handlePageSizeChange }}
                    />)
            }
        </div >
    );
}

export default MakineTipEnvanter