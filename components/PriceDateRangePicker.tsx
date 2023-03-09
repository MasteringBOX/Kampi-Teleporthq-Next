import * as React from 'react';
import {Dayjs} from 'dayjs';
import * as dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {DateRangePickerDay, DateRangePickerDayProps, LocalizationProvider} from '@mui/x-date-pickers-pro';
import {AdapterDayjs} from '@mui/x-date-pickers-pro/AdapterDayjs';
import {DateRange, DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {useState, useEffect} from "react";
import DateSelect from "./DateSelect"
import {RadioButtons} from "./RadioButtons"


export default function PriceDateRangePicker(props) {
    const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);
    const [kmOption, setKmOption] = useState("100Km");
    const [horaRecogida, setHoraRecogida] = useState("9h");
    const [horaDevolucion, setHoraDevolucion] = useState("20h");
    const [days, setDays] = useState(0);
    const [finalPrice, setFinalPrice] = useState("");
    const [open, setOpen] = useState(false);


    const setPrice= (price) => {
        props.onPriceChange(price);
    }
    const handleHoraRecogidaChange = (event) => {
        setHoraRecogida(event.target.value);
    };

    const handleHoraDevolucionChange = (event) => {
        setHoraDevolucion(event.target.value);
    };


    const handleOpen = () => {
        setOpen(true);
    }


    const disabledDateRanges = [
       // { start: '2023-03-05', end: '2023-03-12' },
    ];

    useEffect(() => {
        calculatePrice(value, kmOption, horaRecogida, horaDevolucion);
    }, [value, kmOption, horaRecogida, horaDevolucion]);

    type PriceRange = {
        start: string;
        end: string;
        price: number;
    };

    const priceRanges: PriceRange[] = [
        {
            start: "01-01",
            end: "01-07",
            price: 119,
        },
        {
            start: "01-08",
            end: "06-30",
            price: 109,
        },
        {
            start: "07-01",
            end: "08-31",
            price: 129,
        },
        {
            start: "09-01",
            end: "10-30",
            price: 119,
        },
        {
            start: "11-01",
            end: "12-03",
            price: 109,
        },
        {
            start: "12-04",
            end: "12-10",
            price: 119,
        },
        {
            start: "12-11",
            end: "12-21",
            price: 109,
        },
        {
            start: "12-22",
            end: "12-31",
            price: 119,
        },
    ];

    /*const getDayPrice = (date: Dayjs) => {
        const range = priceRanges.find((r) => {
            const isAfterStart = date.isAfter(r.start, 'day') || date.isSame(r.start, 'day');
            const isBeforeEnd = date.isBefore(r.end, 'day') || date.isSame(r.end, 'day');
            return isAfterStart && isBeforeEnd;
        });

        return range ? range.price : 0;
    };*/

    const getDayPrice = (date: Dayjs) => {
        const monthDay = date.format('MM-DD');
        const range = priceRanges.find((r) => {
            const startMonthDay = dayjs(r.start, 'MM-DD').format('MM-DD');
            const endMonthDay = dayjs(r.end, 'MM-DD').format('MM-DD');
            const isAfterStart = monthDay >= startMonthDay;
            const isBeforeEnd = monthDay <= endMonthDay;
            return isAfterStart && isBeforeEnd;
        });

        return range ? range.price : 0;
    };


    const isDayDisabled = (date: Dayjs) => {
        const isDisabledRange = disabledDateRanges.some((r) =>
            date.isSame(r.start, 'day') || date.isSame(r.end, 'day') ||
            (date.isAfter(r.start, 'day') && date.isBefore(r.end, 'day'))
        );

        if (isDisabledRange) {
            return true;
        }

        const [start, end] = value;
        if (start && !end) {
            return disabledDateRanges.some((r) =>
                (start.isBefore(r.end, 'day') && date.isAfter(r.end, 'day'))
            );
        } /*else if (start && end) {
            return disabledDateRanges.some((r) =>
                start.isBefore(r.end, 'day') && end.isAfter(r.start, 'day')
            );
        } */

        return false;
    };

    const handleDateChange = (newDateRange: DateRange<Dayjs>) => {
        const [newStart, newEnd] = newDateRange;
        const [oldStart, oldEnd] = value;

        console.log("DateChange")

        if (newStart && newEnd) {
            const isDisabledRange = disabledDateRanges.some((r) =>
                (newStart.isBefore(r.end, 'day') && newEnd.isAfter(r.start, 'day'))
            );

            if (isDisabledRange) {
                setValue([newStart, null]);
            } else {
                setValue(newDateRange);
            }
        } else if (newStart && oldEnd && newStart.isAfter(oldEnd, 'day')) {
            setValue([newStart, null]);
        } else {
            setValue(newDateRange);
        }

    };

    const calculatePrice = (range, kmOption, horaRecogida, horaDevolucion) => {
    const [start, end] = range;
        if (start == null || end == null ) {
            setPrice(0);
            return;
        }
        let days = dayjs(end).diff(start, 'day');
        let initialPrice = 0;
        for (let i = 0; i < days; i++) {
            const currentDate = dayjs(start).add(i, 'days');
            const price = getDayPrice(currentDate);
            if (price) {
                initialPrice += price;
            }
        }
        const lastDay = lastDayRatio(horaRecogida, horaDevolucion);
        days = days + lastDay;
        setDays(days);

        const lastDayPrice = lastDay*getDayPrice(end);
        const kmPrice = getKmOptionPrice(kmOption, days);
        const finalPrice = initialPrice + kmPrice + lastDayPrice;
        console.log(initialPrice);
        console.log(lastDayPrice);
        console.log(kmPrice);
        console.log(finalPrice);
        setPrice(finalPrice);
    }

    const getKmOptionPrice = (kmOption, days) => {
        if (kmOption === '100Km') {
            return 0;
        } else if (kmOption === '200km') {
            return 9.99 * days;
        } else if (kmOption === '300km') {
            return 19.99 * days;
        } else { // 'Kmilimitados'
            return 49.99 * days;
        }
    }

    const lastDayRatio = (horaRecogida, horaDevolucion) => {

        if(horaRecogida ===  "9h" && horaDevolucion === "20h") {
            return 1;
        } else if ((horaRecogida === "14h" && horaDevolucion === "20h") || (horaRecogida === "9h" && horaDevolucion === "12h")){
            return 0.5;
        }
        return 0;
    }

    const renderPickerDay = (
        date: Dayjs,
        dateRangePickerDayProps: DateRangePickerDayProps<Dayjs>,
    ) => {

        if (isDayDisabled(date)) {
            dateRangePickerDayProps.disabled = true;
        }
        return <DateRangePickerDay {...dateRangePickerDayProps} />;
    };

    const renderDay = (date: Dayjs, dateRangePickerDayProps: DateRangePickerDayProps<Dayjs>) => {
        const { selected, disabled } = dateRangePickerDayProps;
        const price = getDayPrice(date);
        /*if (isDayDisabled(date)) {
            dateRangePickerDayProps.disabled = true;
        }*/

        return (
            <DateRangePickerDay
                {...dateRangePickerDayProps}
                className={`rs-picker-date rs-range-picker-cell ${selected ? "rs-picker-selected" : ""}`}
            >
                {date.date()}
                    <div className="rs-picker-price">
                        {price + "€"}
                    </div>
            </DateRangePickerDay>
        );
    };

    const kilometraje = () => {

        return (<div className="reserva-kampi-container-gap">
            <label className="reserva-kampi-text-bold">Opcion de Kilometraje</label>
            <select
                name="kilometraje"
                className="reserva-kampi-select"
                value={kmOption}
                onChange={(e) => setKmOption(e.target.value)}
            >
                <option value="100Km">100 Km por día (incluído)</option>
                <option value="200km">200 km por día (9,99€ al día)</option>
                <option value="300km">300km por día (19,99€ al día)</option>
                <option value="Kmilimitados">
                    Kilometraje ilimitado (49,99€ al día)
                </option>
            </select>
            </div>
        )
    }


    return (
        <div className="reserva-kampi-container-gap">
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Salida', end: 'Regreso', clearButtonLabel: 'Borrar', cancelButtonLabel: 'Cancelar', okButtonLabel: "Aceptar"}}
        >
            <DateRangePicker
                //open={open}
                componentsProps={{
                    actionBar: {
                        actions: ['clear', 'cancel', 'accept'],
                    },
                }}
                disablePast
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleDateChange}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> al </Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
                renderDay={renderDay}
                shouldDisableDate={isDayDisabled}
            />
        </LocalizationProvider>
            <input
                type="hidden"
                name="price"
                value={props.price.toFixed(2)}
                className="input"
            />
            <input
                type="hidden"
                name="salida"
                value={value != null && value[0] !=null ? value[0].toString() : 'Sin Definir'}
                className="input"
            />
            <input
                type="hidden"
                name="regreso"
                value={value != null && value[1] !=null ? value[1].toString() : 'Sin Definir'}
                className="input"
            />
            <RadioButtons
                horaRecogida={horaRecogida}
                horaDevolucion={horaDevolucion}
                onHoraRecogidaChange={handleHoraRecogidaChange}
                onHoraDevolucionChange={handleHoraDevolucionChange}
            />
            {kilometraje()}
            {props.price ? (
                <div className="reserva-kampi-container08">
                    <span className="reserva-kampi-text06 Card-Text">Precio del alquiler</span>
                    <span className="reserva-kampi-text07">{props.price.toFixed(2)}€ por {days} días</span>
                </div> ) : (
                 <div className="reserva-kampi-container08">
                <span className="reserva-kampi-text06 Card-Text" onClick={handleOpen}>Selecciona fechas para continuar</span>
                </div>)}
        </div>
    );
}
