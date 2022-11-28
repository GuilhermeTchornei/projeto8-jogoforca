export default function Letras(props) {
    return (
        <div className="letras">
            {props.alfabeto.map((l, index) =>
                <button data-test="letter" key={index} className={props.listaLetras.includes(l) ? "selecionada" : ""} disabled={props.listaLetras.includes(l) ? "selecionada" : ""}
                    onClick={() => props.selecionaLetra(l)}>{l.toUpperCase()}
                </button>)}
        </div>
    );
}