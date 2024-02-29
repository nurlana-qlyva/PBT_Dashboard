import React, { useState, useEffect, useMemo } from "react";
import './dashboard.css';
import TamamlanmisOranlar from "./Grafikler/TamamlanmisIsOranlari/TamamlanmisOranlar";
import DashboardStatisticCards from "./DashboardStatisticCards/DashboardStatisticCards";
import Filter from "./Fillter/Filter";
import LokasyonDagilimTable from "./Grafikler/LokasyonDagilimTable/LokasyonDagilimTable";
import IsEmriOzetTablo from "./Grafikler/IsEmriOzetTable/IsEmriOzetTablo";
import IsTalepTipEnvanter from "./Grafikler/IsTalepTipEnvanter/IsTalepTipEnvanter";
import IsEmriTipEnvanter from "./Grafikler/IsEmriTipEnvanter/IsEmriTipEnvanter";
import IsEmriDurumEnvanter from "./Grafikler/IsEmriDurumEnvanter/IsEmriDurumEnvanter";
import IsTalepDurumEnvanter from "./Grafikler/IsTalepDurumEnvanter/IsTalepDurumEnvanter";
import PersonelIsGucu from "./Grafikler/PersonelIsGucu/PersonelIsGucu";
import ArizaliMakinelerTablo from "./Grafikler/ArizaliMakineler/ArizaliMakineler";
import AylikBakimMaliyeti from "./Grafikler/AylikBakimMaliyeti/AylikBakimMaliyeti";
import MakineTipEnvanter from "./Grafikler/MakineTipEnvanter/MakineTipEnvanter";
import ToplamHarcananIsGucu from "./Grafikler/ToplamHarcananIsGucu/ToplamHarcananIsGucu";

import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import IsEmirlerininZamanDagilimi from "./Grafikler/IsEmirlerininZamanDagilimi/IsEmirlerininZamanDagilimi";

const plainOptions = ['İş Emri Tipi Grafiği', 'İş Talebi Tipi Grafiği', 'Tamamlanmış İş talepleri ve İş Emirleri Oranları', 'Aylık Bakım Maliyetleri', 'Personel Bazında Harcanan İş Gücü', 'İş Emri Durumu Grafiği', 'İş Talebi Durumu Grafiği', 'Bakım İşlemlerinin Zaman İçerisinde Dağılımı', 'Toplam Harcanan İş Gücü', 'Lokasyon Bazında İş talepleri / İş Emirleri Dağılımı', 'İş Emirleri Özet Tablosu', 'Arızalı Makineler', 'Makine Tiplerine Göre Envanter Dağılımı'];

const components = [
  {
    id: 1,
    key: 'İş Emri Tipi Grafiği',
    component: <IsEmriTipEnvanter />
  },
  {
    id: 2,
    key: 'İş Talebi Tipi Grafiği',
    component: <IsTalepTipEnvanter />
  },
  {
    id: 3,
    key: 'Tamamlanmış İş talepleri ve İş Emirleri Oranları',
    component: <TamamlanmisOranlar />
  },
  // {
  //   id: 4,
  //   key: 'Periyodik Bakımlar Grafiği',
  //   component: <BakimBarChart />
  // },
  {
    id: 5,
    key: 'Aylık Bakım Maliyetleri',
    component: <AylikBakimMaliyeti />
  },
  {
    id: 6,
    key: 'Personel Bazında Harcanan İş Gücü',
    component: <PersonelIsGucu />
  },
  {
    id: 7,
    key: 'İş Emri Durumu Grafiği',
    component: <IsEmriDurumEnvanter />
  },
  {
    id: 8,
    key: 'İş Talebi Durumu Grafiği',
    component: <IsTalepDurumEnvanter />
  },
  {
    id: 9,
    key: 'Toplam Harcanan İş Gücü',
    component: <ToplamHarcananIsGucu />
  },
  {
    id: 10,
    key: 'Bakım İşlemlerinin Zaman İçerisinde Dağılımı',
    component: <IsEmirlerininZamanDagilimi />
  },
  {
    id: 11,
    key: 'Lokasyon Bazında İş talepleri / İş Emirleri Dağılımı',
    component: <LokasyonDagilimTable />
  },
  {
    id: 12,
    key: 'Makine Tiplerine Göre Envanter Dağılımı',
    component: <MakineTipEnvanter />
  },
  {
    id: 13,
    key: 'İş Emirleri Özet Tablosu',
    component: <IsEmriOzetTablo />
  },
  {
    id: 14,
    key: 'Arızalı Makineler',
    component: <ArizaliMakinelerTablo />
  }
];

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);
  const [filteredGraphs, setFilteredGraphs] = useState(plainOptions);
  const [isDragging, setIsDragging] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [componentLayout, setComponentLayout] = useState([]);
  const [localStorageKey, setLocalStorageKey] = useState("dashboard-layout");

  useEffect(() => {
    const container = document.getElementById('chart-container');

    const resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setContainerSize({ width, height });
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const savedLayout = localStorage.getItem(localStorageKey);
    if (savedLayout) {
      setComponentLayout(JSON.parse(savedLayout));
    }
  }, [localStorageKey]);

  useEffect(() => {
    if (componentLayout.length > 0) {
      localStorage.setItem(localStorageKey, JSON.stringify(componentLayout));
    }
  }, [componentLayout, localStorageKey]);

  useEffect(() => {
    const savedLayout = localStorage.getItem(localStorageKey);
    if (savedLayout) {
      setComponentLayout(JSON.parse(savedLayout));
    }
  }, [localStorageKey]);

  const updateFilters = (selectedGraphs) => {
    setFilteredGraphs(selectedGraphs);
  };

  const handleLayoutChange = (layout) => {
    setComponentLayout(layout);
    localStorage.setItem(localStorageKey, JSON.stringify(layout));
  };

  const memoizedFilteredGraphs = useMemo(() => filteredGraphs, [filteredGraphs]);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  return (
    <>
      <Filter style={{ padding: mobileView ? "24px 0px" : 24 }} onUpdateFilters={updateFilters} />
      <div id="chart-container" style={{ padding: mobileView ? "24px 0px" : 24 }}>
        <DashboardStatisticCards />
        <ResponsiveGridLayout
          className="layout"
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
          isDraggable={!isDragging}
          onDragStart={handleDragStart}
          onDragStop={handleDragStop}
          onLayoutChange={handleLayoutChange} // Add this line to handle layout change
          layout={componentLayout} // Pass layout state to set initial layout
        >
          {memoizedFilteredGraphs.map((graphKey, index) => (
            <div key={graphKey} className="chart resizable-graph" data-grid={{ w: 4, h: 4, x: (index % 3) * 4, y: Math.floor(index / 3) * 4 }} onClick={handleClick}>
              {React.cloneElement(components.find(component => component.key === graphKey).component, { containerSize })}
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </>
  );
};

export default Dashboard;
