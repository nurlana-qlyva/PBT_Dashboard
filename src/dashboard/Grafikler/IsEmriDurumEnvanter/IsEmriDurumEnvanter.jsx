import useFetch from '../../../hooks/useFetch'
import { Spin } from 'antd';
import { Pie } from '@ant-design/charts';
import { Ayarlar } from '../components/Ayarlar';

const IsEmriDurumEnvanter = () => {
    const [data, isLoading] = useFetch("GetIsEmriDurumEnvanter?ID=2")

    // const total = data.reduce((acc, entry) => acc + entry.ISEMRI_SAYISI, 0);

    let formattedData = [];

    if (data) {
        formattedData = data.map(item => ({
            ...item,
            "İş emri sayısı": item.ISEMRI_SAYISI,
            "İş emri durumu": item.ISEMRI_DURUMU
        }));
    }

    const config = {
        data: formattedData,
        angleField: 'İş emri sayısı',
        colorField: 'İş emri durumu',
        radius: .8,
        label: {
            text: (d) => `${d.ISEMRI_DURUMU}\n ${d.ISEMRI_SAYISI}`,
            position: 'spider',
        },
        legend: false
    };

    const modalConfig = { ...config, radius: .96 }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emri Durumu Grafiği</h3>
                <Ayarlar chart={<Pie {...modalConfig} />} />
            </div>
            {isLoading ? <Spin size="large" /> : <Pie {...config} />}
        </div>
    );

}

export default IsEmriDurumEnvanter;

