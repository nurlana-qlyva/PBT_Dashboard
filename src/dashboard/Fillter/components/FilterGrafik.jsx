import { Button, Popover } from 'antd';
import { useState } from 'react';
import { Checkbox, Divider } from 'antd';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['İş Emirleri/ İş Talepleri Grafiği', 'İş Emri/ İş Talebi Durumları Grafiği', 'Makine Tiplerine Göre Envanter Dağılımı', 'Tamamlanmış İş talepleri ve İş Emirleri Oranları', 'Periyodik Bakımlar Grafiği', 'Aylık Bakım Maliyetleri'];

const FilterGrafik = () => {
    const [open, setOpen] = useState(false);
    const [checkedList, setCheckedList] = useState([]);

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

    const onChange = (checkedValues) => {
        setCheckedList(checkedValues);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? [...plainOptions] : []);
    };

    const content = (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Tümü
            </Checkbox>
            <Divider />
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} style={{ display: 'flex', flexDirection: 'column' }} />
        </>
    );

    return (
        <Popover
            placement="bottom"
            content={content}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <Button>Filtrele</Button>
        </Popover>
    );
};

export default FilterGrafik;
