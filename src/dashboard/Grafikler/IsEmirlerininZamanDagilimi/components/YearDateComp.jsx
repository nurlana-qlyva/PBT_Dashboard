import { DatePicker } from 'antd';
import { Button, Popover, ConfigProvider } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { useYear } from '../YearContext';

const { RangePicker } = DatePicker;

const DatePickerComp = () => {
    const { handleSubmit, control } = useForm()
    const { setSelectedYear } = useYear();

    const onChange = (date, dateString) => {
        setSelectedYear(dateString);
    };

    return (
        <form>
            <Controller
                name="date"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <RangePicker
                        {...field}
                        onChange={(date, dateString) => {
                            field.onChange(date);
                            onChange(date, dateString);
                        }}
                    />
                )}
            />
        </form>

    )
}

const YearDatePicker = () => {

    return <ConfigProvider
        button={{
            style: { border: 'none' },
        }}
    >
        <div className="demo">
            <div>
                <Popover placement="rightTop" content={<DatePickerComp />}>
                    <Button>Yıla göre seç</Button>
                </Popover>
            </div>
        </div>
    </ConfigProvider>
}

export default YearDatePicker;