import useFetch from '../../../hooks/useFetch'
import { Pie } from '@ant-design/charts';
import { Spin } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const IsTalepTipEnvanter = () => {
  const [data, isLoading] = useFetch("GetIsTalepTipEnvanter?ID=2")

  const total = data.reduce((acc, entry) => acc + entry.TALEP_SAYISI, 0);

  let formattedData = [];

  if (data) {
    formattedData = data.map(item => ({
      ...item,
      "İş talebi sayısı": item.TALEP_SAYISI,
      "İş talebi tipi": item.TALEP_TIPI
    }));
  }

  const config = {
    data: formattedData,
    angleField: 'İş talebi sayısı',
    colorField: 'İş talebi tipi',
    radius: .8,
    label: {
      text: (d) => `${(d.TALEP_SAYISI * 100 / total).toFixed(1)}%`,
      position: 'outside',
      labelHeight: 10,
    },
    legend: {
      color: {
        title: false,
        position: 'top',
        rowPadding: 5,
      },
    },
  };

  const modalConfig = { ...config, radius: .969 }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>İş Talebi Tipi Grafiği</h3>
        <Ayarlar chart={<Pie {...modalConfig} />} />
      </div>
      {isLoading ? <Spin size="large" /> : <Pie {...config} />}
    </div>
  );
}

export default IsTalepTipEnvanter;