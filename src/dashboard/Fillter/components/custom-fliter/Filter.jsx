import { Button, Popover, Checkbox } from 'antd';



const content = <Checkbox>tümü</Checkbox>


const Filter = () => {
    return <Popover
        placement="bottom"
        content={content}
        trigger="click"
        open={open}
        // onOpenChange={handleOpenChange}
    >
        <Button>Filtirle</Button>
    </Popover>
}

export default Filter