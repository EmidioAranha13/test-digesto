import React from "react";
import './index.css';
import ReactLoading from 'react-loading';

/**
 * Loading screen.
 */
export const Loading = () => {

    const red = '#920606';

    return(
        <div className="loading">
            <p className="title">Buscando processo. Aguarde!</p>
            <ReactLoading type={"spinningBubbles"} color={red} height={200} width={200}/>
        </div>
    );
}

