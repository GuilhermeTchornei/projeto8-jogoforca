import { useState } from "react";

export default function Chute(props) {
    let [valorInput, setValorInput] = useState('');

    return (
        <div className="chute">
            <label>Já sei a palavra!</label>
            <input data-test="guess-input" disabled={props.pause} type="text" onChange={(event) => setValorInput(event.target.value)} value={valorInput}></input>
            <button data-test="guess-button" disabled={props.pause} onClick={() => {
                props.chutarPalavra(valorInput);
                setValorInput("");
            }}>Chutar</button>
        </div>
    );
}