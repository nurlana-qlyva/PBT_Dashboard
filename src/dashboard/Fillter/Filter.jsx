import { useState } from 'react';
import { Space, Button } from 'antd';
import FilterGrafik from './components/FilterGrafik';

export default function Filter({ onUpdateFilters, setComponentLayout, memoizedFilteredGraphs }) {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);

  window.addEventListener("resize", () => {
    setMobileView(window.innerWidth < 768);
  });

  const handleReset = () => {
    const initialLayout = memoizedFilteredGraphs.map((graphKey, index) => ({
      i: graphKey,
      x: (index % 3) * 4,
      y: Math.floor(index / 3) * 4,
      w: 4,
      h: 4,
    }));
    setComponentLayout(initialLayout);
    localStorage.setItem("componentLayout", initialLayout)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: mobileView ? "0" : '0px 24px' }}>
      <Space wrap>
        <Button onClick={handleReset}>Sıfırla</Button>
      </Space>

      <Space>
        <FilterGrafik onUpdateFilters={onUpdateFilters} />
      </Space>
    </div>
  )
}
