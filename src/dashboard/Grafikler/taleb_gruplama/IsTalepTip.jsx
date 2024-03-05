import useFetch from '../../../hooks/useFetch'
import { Pie } from '@ant-design/charts';
import { Spin, Select } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const IsTalepTip = ({ handleChange }) => {
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
    radius: .6,
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
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>İş Talebi Tipi Grafiği</h3>
        <div>
          <Select
            defaultValue="İş Talebi Tipi"
            style={{
              width: 130,
              marginRight: 10
            }}
            onChange={handleChange}
            options={[
              {
                value: 1,
                label: 'İş Talebi Tipi',
              },
              {
                value: 2,
                label: 'İş Talebi Durumu',
              },
              {
                value: 3,
                label: 'Lokasyon',
              }
            ]}
          />
          <Ayarlar chart={<Pie {...modalConfig} />} />
        </div>
      </div>
      {isLoading ? <Spin size="large" /> : <Pie {...config} />}
    </>
  );
}

export default IsTalepTip;