import { Column } from '@ant-design/plots';
import { Spin } from 'antd';
import useFetch from '../../../hooks/useFetch';
import { Ayarlar } from './components/Ayarlar';
import { useYear } from './YearContext';


const convertMonthNumberToName = (monthNumber) => {
  if (!monthNumber || monthNumber < 1 || monthNumber > 12) return "";

  const date = new Date(2021, monthNumber - 1, 1);

  const formatter = new Intl.DateTimeFormat(navigator.language, { month: "long" });
  return formatter.format(date);
};

const AylikBakimMaliyeti = () => {
  const { selectedYear } = useYear();
  const [data, isLoading] = useFetch(`GetAylikBakimIsEmriMaliyet?ID=2&year=${selectedYear}`, [selectedYear]);

  let formattedData = [];

  if (data) {
    formattedData = data.map(item => ({
      ...item,
      AY: convertMonthNumberToName(item.AY)
    }));
  }

  const config = {
    data: formattedData,
    xField: 'AY',
    yField: 'AYLIK_BAKIM_ISEMRI_MALIYET',
    scrollbar: {
      x: {
        ratio: 3,
      },
    },
  };

  return (
    < div style={{ width: '100%', height: '100%' }} className='column'>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>Aylık Bakım Maliyetleri</h3>
        <Ayarlar chart={<Column {...config} />} />
      </div>
      {isLoading ? <Spin size="large" /> : <Column {...config} />}
    </div >
  );
};

export default AylikBakimMaliyeti



