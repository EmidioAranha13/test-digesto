import React, {useState} from "react";
import '../../bootstrap.min.css';
import './index.css';
import {ReactComponent as DigestoLogo} from '../../assets/logo-home-digesto.svg';
import { Navbar } from "../../components";
import General from "./general";

/**
 * Function responsible for Process home page.
 */
export const Process = () => {

    const [current, setCurrent] = useState(0);

    const handleWithCurrent = (number) => {
        setCurrent(number);
    }

    return(
        <div className="body-proc">
            <Navbar onCurrent={handleWithCurrent} current={current}/>
            {current === 0 && <General/>}
            {/* {current === 1 && <Involved/>}
            {current === 2 && <Related/>}
            {current === 2 && <Attachments/>} */}
        </div>
    );
}
