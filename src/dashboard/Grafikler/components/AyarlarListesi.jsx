import { ChartModal } from "./Modal"
import { Space } from 'antd';



export const AyarlarListesi = ({ chart }) => {


    return (<>
        <Space direction="vertical">
            <ChartModal chart={chart} />
        </Space>

    </>)
}