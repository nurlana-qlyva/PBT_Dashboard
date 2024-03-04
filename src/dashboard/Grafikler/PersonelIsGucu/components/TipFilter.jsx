import { Button, Popover, Divider, Checkbox } from 'antd';
import { useState } from 'react';
import styled from "styled-components";
import { usePersonel } from '../PersonelContext';

const StyledButton = styled(Button)`
    border: none !important;
    box-shadow: none !important;
`;

const CheckboxGroup = Checkbox.Group;

const TipFilter = () => {
    const { personels, setPersonels } = usePersonel();
    const [checkedList, setCheckedList] = useState(personels);
    const [allPersonels, setAllPersonels] = useState(personels)

    const onChange = (checkedValues) => {
        setCheckedList(checkedValues);
        setPersonels(checkedValues);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? allPersonels : []);
        setPersonels(e.target.checked ? allPersonels : []); 
    };

    const content = (
        <div className='filter' style={{maxHeight: 400, overflow: 'auto'}}>
            <Checkbox indeterminate={checkedList.length > 0 && checkedList.length < allPersonels.length} onChange={onCheckAllChange} checked={checkedList.length === allPersonels.length}>
                Tümü
            </Checkbox>
            <Divider />
            <CheckboxGroup options={allPersonels} value={checkedList} onChange={onChange} style={{ display: 'flex', flexDirection: 'column' }} />
        </div>
    );

    return (
        <Popover placement="rightTop" content={content} style={{ border: 0 }}>
            <StyledButton>Personeli düzenle</StyledButton>
        </Popover>
    );
};

export default TipFilter;
