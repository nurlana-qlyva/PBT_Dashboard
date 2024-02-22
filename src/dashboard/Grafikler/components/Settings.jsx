import { Button, Popover } from 'antd';
import { EllipsisOutlined } from "@ant-design/icons"
import { useState } from 'react';
import { SettingsList } from './SettingsList';



export const ChartSettings = ({chart}) => {
    const [open, setOpen] = useState(false)
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const content = <SettingsList chart={chart}/>

    return <Popover
        placement="bottom"
        content={content}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
    >
        <Button><EllipsisOutlined /></Button>
    </Popover>
}