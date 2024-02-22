import React, { useState } from 'react';
import { Button, Popover, Space } from 'antd';
import FilterButton from './components/FilterButton';
import FilterGrafik from './components/FilterGrafik';
import { UserOutlined } from "@ant-design/icons";


export default function Filter() {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);

  window.addEventListener("resize", () => {
    setMobileView(window.innerWidth < 768);
  });
  // const [open, setOpen] = useState(false);
  // const hide = () => {
  //     setOpen(false);
  // };
  // const handleOpenChange = (newOpen) => {
  //     setOpen(newOpen);
  // };


  const items = [
    {
      label: "Sil",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "İleri Tarihe İş Emri Planla",
      key: "3",
      // icon: <UserOutlined />,
      // danger: true,
    },
    {
      label: "Atölye Transferi",
      key: "4",
      // icon: <UserOutlined />,
      // danger: true,
      // disabled: true,
    },
    {
      label: "İş Emri Formları...",
      key: "5",
      icon: <UserOutlined />,
    },
    {
      label: "Seçili İş Emrini Kapat",
      key: "7",
      // icon:<UserOutlined/>
    },
    {
      label: "İş Emri Tarihçesi",
      key: "8",
      // icon:<UserOutlined/>
    },
    {
      label: "Makine Tarihçesi",
      key: "9",
    },
    {
      label: "Malzeme İhtiyaç Analizi",
      key: "10",
    },
    {
      label: "Süreç Analizi",
      key: "11",
    },
    {
      label: "Maliyet Analizi",
      key: "12",
    },
    {
      label: "Seçili Kaydı Çoğalt",
      key: "13",
      icon: <UserOutlined />,
    },
  ];

  const menuProps = {
    items,
    // onClick: handleMenuClick,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: mobileView ? "0" : '0px 24px' }}>
      <Space wrap>
        <FilterButton title={'Title'} buttonTitle={'All locations'} menuProps={menuProps} />
        <FilterButton title={'Title'} buttonTitle={'Time'} menuProps={menuProps} />
        <FilterButton title={'Title'} buttonTitle={'Active'} menuProps={menuProps} />
        <FilterButton title={'Title'} buttonTitle={'All locations'} menuProps={menuProps} />
      </Space>

      <Space>
        <FilterGrafik />
      </Space>
    </div>
  )
}
