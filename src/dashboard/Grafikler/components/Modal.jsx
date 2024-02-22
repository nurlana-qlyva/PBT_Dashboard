import { useState } from "react"
import { Button, Modal } from 'antd';

export const ChartModal = ({chart}) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button type="secondary" onClick={() => setOpen(true)}>
                Zoom
            </Button>
            <Modal
                title="İş Emirleri/ İş Talepleri Grafiği"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={'calc(100% - 100px)'}
            >
                {chart}
            </Modal>
        </>
    )
}

