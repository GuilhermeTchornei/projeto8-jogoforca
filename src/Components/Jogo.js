export default function Jogo(props) {
    return (
        <div className="jogo">
            <img src={props.imagem} alt="/assets/forca0.png" data-test="game-image"/>
            <div>
                <button onClick={props.escolherPalavra} data-test="choose-word">Escolher Palavra</button>
                <strong data-test="word" data-answer={props.palavra} className={props.cor}>
                    <Palavra palavra={props.palavra} listaLetras={props.listaLetras}/>
                </strong>
            </div>
        </div>
    );
}

function Palavra(props) {
    const palavra = props.palavra.split("");
    return (
        palavra.map((l) => {
            if (props.listaLetras.includes(l)) return l;
            else return "_";
        })
    );
}