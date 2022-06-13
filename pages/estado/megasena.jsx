import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena(){
  const [qtde, setQtde] = useState(6)
  const [numeros, setNumeros] = useState(mega(qtde))

  function renderNumeros(){
    return numeros.map(
      numero => <NumeroDisplay key={numero} valor={numero} />
    )
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1>Mega Sena</h1>
      <div style={{
        display: 'flex',
        flexWrap: "wrap",
      }}>
        {renderNumeros()}
      </div>
      <div>
        <input type="number" min={6} max={16} onChange={(ev) => setQtde(ev.target.value)} />
        <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  )
}