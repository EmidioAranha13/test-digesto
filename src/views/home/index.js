import React, {useState} from "react";
// import {useNavigate} from 'react-router-dom';
import './index.css';
import '../../bootstrap.min.css';
import {ReactComponent as DigestoLogo} from '../../assets/logo-home-digesto.svg';
import { cnjMask, Loading} from "../../components";

/**
 * Function responsible for create home page.
 */
export const Home = () => {

    const [cnj, setCnj] = useState("");                    //Cnj number
    const [valid, setValid] = useState(true);              //cnj validator 
    const [isLoading, setIsloading] = useState(false);     //shows the loading screen

    /**
     * This function handle with changes in search field.
     * @param {String} value cnj number.
     */
    const handleChange = (value) => {
        setCnj(cnjMask(value));
        setValid(true);
    };

    /**
     * Handle with payload submit. checks if the cnj is valid and sends it.
     */
    const handleSubmit = () => {
        const validCNJ = new RegExp('[0-9]{7}-[0-9]{2}.[0-9]{4}.[0-9]{1}.[0-9]{2}.[0-9]{4}');
        if(validCNJ.test(cnj)){
            setIsloading(true);
            setValid(true);
        }else{
            setValid(false);
        }
    };

    return(
        <div className="body">
            {isLoading ? (
                <Loading/>
            ):(
                <div className="process-card">
                    <DigestoLogo className="App-logo"/>
                    <p className="process-card-title">Bem Vindo ao serviço de busca de processos do Digesto</p>
                    <p className="process-card-desc">Digite abaixo o número CNJ do processo para iniciar a busca</p>
                    <form className="form-search">
                        <div className="search-field input-group mb-3">
                            <input 
                                value={cnj}
                                type="text"
                                maxLength={25}
                                className="form-control" 
                                placeholder="Formato: NNNNNNN-DD.AAAA.J.TR.OOOO" 
                                aria-label="Recipient's CNJ" 
                                aria-describedby="btn-search"
                                onChange={(event) => handleChange(event.target.value)}
                            />
                            <button 
                                className="btn btn-primary btn-search" 
                                type="button" 
                                id="btn-search"
                                onClick={()=>handleSubmit()}
                                
                            >
                                Buscar
                            </button>
                        </div>
                        {!valid && (cnj.trim() !== "" 
                            ? <label className="error">Número inválido! O valor informado não segue o formato.</label>
                            : <label className="error">Campo vazio! insira um número válido.</label>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
}