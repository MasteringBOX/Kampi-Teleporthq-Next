import React, { useState } from 'react';

function DateSelect() {
    // Set up state variables for selected values
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    // Function to generate an array of days in a month
    function getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    // Generate arrays for days, months, and years
    const days = Array.from({length: getDaysInMonth(month, year)}, (_, i) => i + 1);
    const months = Array.from({length: 12}, (_, i) => i + 1);
    const years = Array.from({length: 80}, (_, i) => new Date().getFullYear() - i - 24);

    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const monthOptions = months.map((month) => {
        const monthName = monthNames[month - 1];
        return <option key={month} value={month}>{monthName}</option>;
    });

    // Event handlers for select inputs
    function handleDayChange(e) {
        setDay(e.target.value);
        e.target.setCustomValidity('');
    }

    function handleMonthChange(e) {
        setMonth(e.target.value);
        e.target.setCustomValidity('');
    }

    function handleYearChange(e) {
        setYear(e.target.value);
        e.target.setCustomValidity('');
    }

    return (
        <div className="reserva-kampi-container-gap">
            <label className="reserva-kampi-text-bold">Fecha de Nacimiento del Conductor</label>
            <div className="reserva-kampi-container09">
            <select id="day"
                    className="reserva-kampi-select1"
                    value={day} onChange={handleDayChange}
                    required
                    onInvalid={(e) => { e.target.setCustomValidity('Introduce el día del nacimiento del conductor') }}
            >
                <option value="">Día</option>
                {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>

            <select id="month" className="reserva-kampi-select2" value={month} onChange={handleMonthChange} required
                    onInvalid={(e) => { e.target.setCustomValidity('Introduce el mes de nacimiento del conductor') }}
            >
                <option value="">Mes</option>
                {monthOptions}
            </select>

            <select id="year" className="reserva-kampi-select3" value={year} onChange={handleYearChange} required
                    onInvalid={(e) => { e.target.setCustomValidity('Introduce el año de nacimiento del conductor') }}
            >
                <option value="">Año</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
            </div>
    );
}

export default DateSelect;