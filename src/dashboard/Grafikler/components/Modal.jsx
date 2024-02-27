import { useState } from "react"
import { Button, Modal } from 'antd';
import styled from "styled-components";

const StyledButton = styled(Button)`
        border: none !important;
        box-shadow: none !important;
`;

export const ChartModal = ({chart}) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledButton type="secondary" onClick={() => setOpen(true)}>
                Büyüt
            </StyledButton>
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

