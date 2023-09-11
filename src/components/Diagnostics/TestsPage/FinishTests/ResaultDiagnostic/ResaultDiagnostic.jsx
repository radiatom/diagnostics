import React, { useEffect, useRef, useState } from "react";
import "./ResaultDiagnostic.scss";
import img from "./../../../../../img/icons/che.webp";
import { useDispatch } from "react-redux";
import { changeSolution, deleteResult } from "../../testReducer";
import AlertDelete from "../AlertDelete/AlertDelete";

const ResaultDiagnostic = ({ el, index, id, solution }) => {
    const [alert, setAlert] = useState(false);
    const [yesOrNo, setYesOrNo] = useState(false);
    useEffect(() => {
        if (yesOrNo) {
            setStyle({"maxHeight":"0px"})
            setTimeout(()=>dispatch(deleteResult(id)),1000)
        }
    }, [yesOrNo]);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, (index * 1000) / 2);
    }, []); //показати компонент через index*1000/2 мілісекунд

    const [style,setStyle]=useState({})
    // Створюємо об'єкт refs для збереження посилань на ref в залежності від id
    const refs = useRef({});
    // Створюємо ref для поточного компонента
    const componentRef = useRef(null);

    // Додаємо ref до об'єкта refs з ключем, який дорівнює id
    useEffect(() => {
        refs.current[id] = componentRef;
    }, [id]);
    return (
        <div className={show ? "show" : "noShow"} ref={componentRef} style={style}>
            <div className={solution ? "resaultDiagnostic" : "resaultDiagnostic resaultDiagnostic_active"}>
                {solution ? (
                    <div onClick={() => dispatch(changeSolution(id))}></div>
                ) : (
                    <div onClick={() => dispatch(changeSolution(id))}>
                        <img src={img} alt="ok" />
                    </div>
                )}
                <p>{el}</p>
                <button className="resaultDiagnostic__btnDelete" onClick={() => setAlert(true)}>
                    Видалити
                </button>
            </div>
            <div className={alert&&yesOrNo===false?"blur":''}></div>
            {alert &&yesOrNo===false? <AlertDelete setYesOrNo={setYesOrNo} setAlert={setAlert} /> : ""}
        </div>
    );
};

export default ResaultDiagnostic;
