import { useState } from 'react';
import Chute from './Components/Chute';
import Jogo from './Components/Jogo';
import Letras from './Components/Letras';
import palavras from './palavras';

function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let [erros, setErros] = useState(0);
  let [imagem, setImagem] = useState("/assets/forca0.png");
  let [palavra, setPalavra] = useState("");
  let [listaLetras, setListaLetras] = useState(alfabeto);
  let [corPalavra, setCorPalavra] = useState("");
  let [jogoPausado, setJogoPausado] = useState(true);

  function perdeuJogo() {
    setJogoPausado(true);
    setListaLetras(alfabeto);
    setCorPalavra("vermelho");
    setImagem("/assets/forca6.png");
  }

  function ganhouJogo() {
    setJogoPausado(true);
    setListaLetras(alfabeto);
    setCorPalavra("verde");
  }


  function escolherPalavra() {
    setJogoPausado(false);
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
    setListaLetras([]);
    setErros(0);
    setImagem(`/assets/forca0.png`);
    setCorPalavra("");
  }

  function selecionaLetra(letra) {
    if (jogoPausado || listaLetras.includes(letra)) return;
    setListaLetras(listaLetras => [...listaLetras, letra]);
    if (!palavra.includes(letra))
    {
      setErros(erros += 1);
      setImagem(`/assets/forca${erros}.png`);

      if (erros >= 6)
      {
        perdeuJogo();
      }
    }
    else
    {
      setTimeout(verificaSeGanhou, 10);
    }
  }

  function verificaSeGanhou() {
    let letrasCertas = 0;
      const p = palavra.split("");
      p.map((l, i) => {
        if (listaLetras.includes(l))
        {
          letrasCertas++;
        }
      });
      if (letrasCertas === palavra.length - 1) ganhouJogo();
  }

  function chutarPalavra(palavraDigitada) {
    if (jogoPausado || !palavraDigitada) return;
    if (palavraDigitada.toLowerCase() === palavra) ganhouJogo();
    else perdeuJogo();
  }

  return (
    <div className="App">
      <Jogo escolherPalavra={escolherPalavra} imagem={imagem} palavra={palavra} cor={corPalavra} listaLetras={listaLetras} />
      <Letras alfabeto={alfabeto} selecionaLetra={(l) => selecionaLetra(l)} listaLetras={listaLetras} />
      <Chute chutarPalavra={(p) => chutarPalavra(p)} pause={jogoPausado} />
    </div>
  );
}

export default App;
