import { ChartModal } from "./Modal"
import { Space } from 'antd';



export const SettingsList = ({ chart }) => {


    return (<>
        <Space direction="vertical">
            <ChartModal chart={chart} />
        </Space>

    </>)
}