import React from "react";
import './index.css';
import '../../../bootstrap.min.css';
import { useSelector } from "react-redux";

const General = () => {

    const data = useSelector((state) => state.ProcessReducer.data);
    return(
        <div className="body-general">
            <div className="plate">
                <div className="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                    <div className="card-header">Detalhes do Processo</div>
                    <div className="card-body">
                        <h4 className="card-title">{data.tribunal}" - {data.numero} Nº </h4>
                        <p className="card-text">{data.foro_cnj}</p>
                        <p className="card-text">{data.area} {data.instancia}º Instância</p>
                        <p className="card-text">{data.classeNatureza}</p>
                        <p className="card-text">{data.assuntoExtra}</p>
                        <p className="card-text">Comarca: {data.comarca}</p>
                        <p className="card-text">Data de Distribuição: {data.distribuicaoData}</p>
                        <p className="card-text">Valor da Causa: {data.valor}</p>

                    </div>
                </div>
                {/* <div className="card border-secondary mb-3 "style={{maxWidth: "20rem"}}>
                    <div className="card-header">Audiências</div>
                    <div className="card-body">
                        <h4 className="card-title">b</h4>
                        <p className="card-text">info</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                    <div className="card-header">Processos Relacionados</div>
                    <div className="card-body">
                        <h4 className="card-title">c</h4>
                        <p className="card-text">info</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default General;

// {regional_cnj: null, numeroAlternativo: "[CÍVEL] CUMPRIMENTO DE SENTENÇA 5001682-88.2020.8.13.0672",…}
// acessos: ["2022-03-14 20:11:14", "2022-03-11 14:55:15", "2022-03-10 14:19:34", "2022-03-09 14:01:20",…]
// alteradoEm: "2022-03-14T20:11:14"
// anexos: [[107753283, "https://d2aru9ad1z9ipf.cloudfront.net/72018fff250c5149c9603e5152e3003f.html", 3,…],…]
// area: "Cível"
// arquivado: false
// assuntoExtra: "DIREITO DO CONSUMIDOR / RESPONSABILIDADE DO FORNECEDOR / INDENIZAÇÃO POR DANO MORAL / INCLUSÃO INDEVIDA EM CADASTRO DE INADIMPLENTE"
// audiencias: [["2020-03-19 14:30:00", "Unidade Jurisdicional Cível - 1º JD da Comarca de Sete Lagoas.",…],…]
// classeNatureza: "CIVEL CUMPRIMENTO DE SENTENCA"
// classeNatureza_dg: 2
// classes: [,…]
// comarca: "SETE LAGOAS - JUIZADO ESPECIAL"
// comarca_cnj: "Sete Lagoas"
// criadoEm: "2021-12-03T22:02:32"
// customs: []
// distribuicaoData: "2020-02-12"
// distribuicaoTipo: "SORTEIO"
// extinto: 0
// flag: 1
// fonte_sistema: "TJMG PJE"
// foro: "Sete Lagoas"
// foro_cnj: "Sete Lagoas"
// gratuita: null
// instancia: 1
// juiz: null
// liminar: null
// movs: [,…]
// numero: "5001682-88.2020.8.13.0672"
// numeroAlternativo: "[CÍVEL] CUMPRIMENTO DE SENTENÇA 5001682-88.2020.8.13.0672"
// partes: [,…]
// processoID: 466735443
// processosRelacionados: [{tribunal: "TJMG", natureza: "CIVEL PROCEDIMENTO DO JUIZADO ESPECIAL CIVEL",…},…]
// regional_cnj: null
// segredo_justica: false
// sentencaData: null
// situacao: null
// situacao_situacaoID: null
// tribunal: "TJMG"
// tribunalID: 49
// uf: "MG"
// valor: 10000
// vara: null
// vara_original: null