
export function RadioButtons({
                                 horaRecogida,
                                 horaDevolucion,
                                 onHoraRecogidaChange,
                                 onHoraDevolucionChange,
                             }) {
    /*const handleHoraRecogidaClick = (event) => {
        onHoraRecogidaChange(event.target.value);
    };

    const handleHoraDevolucionClick = (event) => {
        onHoraDevolucionChange(event.target.value);
    };*/

    return (
        <div className="reserva-kampi-container01">
            <div className="reserva-kampi-container02">
                <div className="reserva-kampi-container03">
                    <label className="radio" htmlFor="9h">
                    <input
                        type="radio"
                        id="9h"
                        name="horaRecogida"
                        value="9h"
                        checked={horaRecogida === "9h"}
                        onChange={onHoraRecogidaChange}
                    />
                        <span>desde las 9h</span>
                    </label>
                </div>
                <div className="reserva-kampi-container03">
                    <label className="radio" htmlFor="14h">
                        <input
                            type="radio"
                            id="14h"
                            name="horaRecogida"
                            value="14h"
                            checked={horaRecogida === "14h"}
                            onChange={onHoraRecogidaChange}
                        />
                        <span>desde las 14h</span>
                    </label>
                </div>
            </div>
            <div className="reserva-kampi-container05">
                <div className="reserva-kampi-container03">
                <label className="radio" htmlFor="12h">
                    <input
                        type="radio"
                        id="12h"
                        name="horaDevolucion"
                        value="12h"
                        checked={horaDevolucion === "12h"}
                        onChange={onHoraDevolucionChange}
                    />
                    <span>hasta las 12h</span>
                </label>
            </div>
            <div className="reserva-kampi-container03">
                <label className="radio" htmlFor="20h">
                    <input
                        type="radio"
                        id="20h"
                        name="horaDevolucion"
                        value="20h"
                        checked={horaDevolucion === "20h"}
                        onChange={onHoraDevolucionChange}
                    />
                    <span>hasta las 20h</span>
                </label>
            </div>
            </div>
            <style jsx>
                {`
            .radio {
                display: block;
                cursor: pointer;
                user-select: none;
                text-align: left;
            }
            .radio + .radio {
                margin-top: 1px;
            }
            .radio input {
                display: none;
            }
            .radio input + span {
                display: inline-block;
                position: relative;
                padding-left: 30px;
                font-size: 18px;
            }
            .radio input + span:before {
                content: "";
                display: block;
                position: absolute;
                top: 4px;
                left: 0px;
                border-radius: 50%;
                margin-right: 5px;
                width: 20px;
                height: 20px;
                border: 1px solid #ccc;
                background: #fff;
            }
            .radio input + span:after {
                content: "";
                display: block;
                width: 16px;
                height: 16px;
                background: #2979ff;
                position: absolute;
                border-radius: 50%;
                top: 7px;
                left: 3px;
                opacity: 0;
                transform: scale(0, 0);
                transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
            }
            .radio input:checked + span:after {
                opacity: 1;
                transform: scale(1, 1);
            }
            `}
            </style>
        </div>
    );
}