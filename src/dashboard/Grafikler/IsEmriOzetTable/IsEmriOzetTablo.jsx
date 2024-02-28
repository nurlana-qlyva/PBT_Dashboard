import { Table } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const columns = [
    {
        title: 'Satır etiketleri',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
        width: 60,
        ellipsis: true,
    },
    {
        title: 'Sayı',
        className: 'column-money',
        dataIndex: 'number',
        align: 'center',
        width: 80,
        ellipsis: true
    },
    {
        title: 'Toplam Maliyet',
        dataIndex: 'amount',
        width: 100,
        ellipsis: true
    },
    {
        title: 'Ortalama Çalışma Süresi (dk)',
        dataIndex: 'time',
        width: 100,
        ellipsis: true
    },
    {
        title: 'Toplam Çalışma Süresi (dk)',
        dataIndex: 'time',
        width: 100,
        ellipsis: true
    },
];

const data = [
    {
        key: '1',
        name: 'Arıza',
        number: '3',
        time: '139417',
        amount: '5674'
    },
    {
        key: '2',
        name: 'Arızalı parça onarımı',
        number: '3',
        time: '9949',
    },
    {
        key: '3',
        name: 'Bakım',
        number: '3',
        time: '581',
    },
    {
        key: '4',
        name: 'Eğitimç toplantı ve seminer',
        number: '3',
        time: '203',
    },
    {
        key: '5',
        name: 'Periyodik bakım',
        number: '3',
        time: '4305',
    },
    {
        key: '6',
        name: 'İş talebi',
        number: '3',
        time: '2043',
    },
    {
        key: '7',
        name: 'Kullanıcılara verilen destek',
        number: '3',
        time: '93',
    },
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
                    x: 1500,
                }}
            />
        </div>
    )
}

export default IsEmriOzetTablo;


