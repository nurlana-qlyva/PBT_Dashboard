import { Table, Spin } from 'antd';
import { useMemo, useState } from 'react';
import { Ayarlar } from './components/Ayarlar';
import useFetch from '../../../hooks/useFetch';
import { useDate } from '../../../DateContext';

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

const LokasyonDagilimTable = () => {
    const { selectedDate } = useDate();

    const [data, isLoading] = useFetch(`GetLokasyonBazindaIsEmriTalebi?startDate=${selectedDate.lokasyon_dagilimi_zaman[0]}&endDate=${selectedDate?.lokasyon_dagilimi_zaman[1]}`, [selectedDate?.lokasyon_dagilimi_zaman]);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [pageSize, setPageSize] = useState(10);

    const formattedData = useMemo(() => {
        if (!data) return [];

        return data.map(item => ({
            ...item
        }));
    }, [data]);

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
        <div style={{ width: '100%', height: '100%', overflow: "auto"  }}>

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
                    dataSource={formattedData}
                    pagination={{ pageSize: pageSize, onChange: handlePageSizeChange }}
                />} />
            </div>
            {isLoading ? <Spin size="large" /> : (
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={formattedData}
                    pagination={{ pageSize: pageSize, onChange: handlePageSizeChange }}
                    scroll={{
                        x: 600,
                    }}
                />
            )}
        </div>
    );
}

export default LokasyonDagilimTable

