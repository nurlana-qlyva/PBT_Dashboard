import useFetch from '../../../hooks/useFetch'
import { Pie } from '@ant-design/charts';
import { Spin } from 'antd';
import { Ayarlar } from '../components/Ayarlar';


const IsTalepDurumEnvanter = () => {
    const [data, isLoading] = useFetch("GetIsTalepDurumEnvanter?ID=2")

    // const total = data.reduce((acc, entry) => acc + entry.IS_TALEP_SAYISI, 0);

    let formattedData = [];

    if (data) {
        formattedData = data.map(item => ({
            ...item,
            "İş talep sayısı": item.IS_TALEP_SAYISI,
            "İş talep durumu": item.IS_TALEP_SAYISI
        }));
    }

    const config = {
        data: formattedData,
        angleField: 'İş talep sayısı',
        colorField: 'IST_DURUM_ID',
        radius: .8,
        label: {
            text: (d) => `${d["İş talep sayısı"]}`,
            position: 'spider',
        },
        legend: false
    };

    const modalConfig = {...config, radius: 1}

    return (
        <div style={{height: '100%', width: '100%'}}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Talebi Durumu Grafiği</h3>
                <Ayarlar chart={<Pie {...modalConfig} />} />
            </div>
            {isLoading ? <Spin size="large" /> : <Pie {...config}/>}
        </div>
    );
}

export default IsTalepDurumEnvanter;


