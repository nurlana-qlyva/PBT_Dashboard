import React, { useState } from 'react';
import { Button, Popover, Space, Dropdown } from 'antd';
import { DownOutlined } from "@ant-design/icons";


export default function FilterButton({ filterProps, buttonTitle }) {
  // const [open, setOpen] = useState(false);
  // const hide = () => {
  //     setOpen(false);
  // };
  // const handleOpenChange = (newOpen) => {
  //     setOpen(newOpen);
  // };



  return (

    <Dropdown menu={filterProps} trigger="click">
      <Button>
        <Space>
          {buttonTitle}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    // <Popover
    //     placement="bottomLeft"
    //     content={contentData}
    //     title={title}
    //     trigger="click"
    //     open={open}
    //     onOpenChange={handleOpenChange}
    // >
    //     <Button type="primary">{buttonTitle}</Button>
    // </Popover>
  )
}
