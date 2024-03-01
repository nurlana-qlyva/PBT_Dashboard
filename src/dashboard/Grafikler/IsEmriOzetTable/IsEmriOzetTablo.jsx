import { Table } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const columns = [
    {
        title: 'İş Emri Tipi',
        dataIndex: 'IS_EMRI_TIPI',
        render: (text) => <a>{text}</a>,
        // width: 60,
        ellipsis: true,
    },
    {
        title: 'İş Emri Sayısı',
        className: 'column-money',
        dataIndex: 'IS_EMRI_SAYISI',
        align: 'center',
        // width: 80,
        ellipsis: true
    },
    {
        title: 'Toplam Maliyet',
        dataIndex: 'TOPLAM_MALIYET',
        // width: 100,
        ellipsis: true
    },
    {
        title: 'Ortalama Çalışma Süresi (dk)',
        dataIndex: 'ORTALAMA_CALISMA_SURESI',
        // width: 100,
        ellipsis: true
    },
    {
        title: 'Toplam Çalışma Süresi (dk)',
        dataIndex: 'TOPLAM_CALISMA_SURESI',
        // width: 100,
        ellipsis: true
    },
];

const data = [
    {
        key: '1',
        IS_EMRI_TIPI: 'Arıza',
        IS_EMRI_SAYISI: '3',
        TOPLAM_CALISMA_SURESI: '139417',
        ORTALAMA_CALISMA_SURESI: '139417/3',
        TOPLAM_MALIYET: '5674'
    }
];

const TableFooter = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p><strong>Toplam:</strong></p>
            <p>78987</p>

        </div>
    )
}

const IsEmriOzetTablo = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emirleri Özet Tablosu</h3>
                <Ayarlar chart={<Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    footer={() => <TableFooter sum={data} />}
                />} />
            </div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                footer={() => <TableFooter sum={data} />}
                scroll={{
                    x: 1000,
                }}
            />
        </div>
    )
}

export default IsEmriOzetTablo;


