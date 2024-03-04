import useFetch from '../../../hooks/useFetch'
import { Pie } from '@ant-design/charts';
import { Spin } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const IsEmriTipEnvanter = () => {
    const [data, isLoading] = useFetch("GetIsEmriTipEnvanter?ID=2")

    const total = data.reduce((acc, entry) => acc + entry.ISEMRI_SAYISI, 0);

    let formattedData = [];

    if (data) {
        formattedData = data.map(item => ({
            ...item,
            "İş emri sayısı": item.ISEMRI_SAYISI,
            "İş emri tipi": item.ISEMRI_TIPI.slice(0, 15) + '...'
        }));
    }

    const config = {
        data: formattedData,
        angleField: "İş emri sayısı",
        colorField: "İş emri tipi",
        radius: .8,
        label: {
            text: (d) => `${(d.ISEMRI_SAYISI * 100 / total).toFixed(1)}%`,
            position: 'outside',
        },
        legend: {
            color: {
                title: false,
                position: 'top',
                rowPadding: 5,
            },
        },
        paddingRight: 80,
    };

    const modalConfig = { ...config, radius: .99 }


    return (
        <div style={{ height: '100%', width: '100%' }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emri Tipi Grafiği</h3>
                <Ayarlar chart={<Pie {...modalConfig} />} />
            </div>
            {isLoading ? <Spin size="large" /> : <Pie {...config} />}
        </div>
    );
}

export default IsEmriTipEnvanter;