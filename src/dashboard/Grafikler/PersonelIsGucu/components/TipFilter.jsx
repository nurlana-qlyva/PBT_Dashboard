
import { Button, Popover, Divider, Checkbox } from 'antd';
import { useState } from 'react';
import styled from "styled-components";

const StyledButton = styled(Button)`
        border: none !important;
        box-shadow: none !important;
`;

const CheckboxGroup = Checkbox.Group;

const TipFilter = () => {
    const [checkedList, setCheckedList] = useState([]);

    // const onChange = (checkedValues) => {
    //     setCheckedList(checkedValues);
    //     onUpdateFilters(checkedValues); // Send checked values to parent component
    // };

    // const onCheckAllChange = (e) => {
    //     setCheckedList(e.target.checked ? plainOptions : []);
    //     onUpdateFilters(e.target.checked ? plainOptions : []); // Send all values if "Tümü" checked
    // };

    // const content = (
    //     <div className='filter'>
    //         <Checkbox indeterminate={checkedList.length > 0 && checkedList.length < plainOptions.length} onChange={onCheckAllChange} checked={checkedList.length === plainOptions.length}>
    //             Tümü
    //         </Checkbox>
    //         <Divider />
    //         <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} style={{ display: 'flex', flexDirection: 'column' }} />
    //     </div>
    // );

    return (
        <Popover placement="rightTop" content={''} style={{ border: 0 }}>
            <StyledButton>Personeli düzenle</StyledButton>
        </Popover>
    )
}

export default TipFilter