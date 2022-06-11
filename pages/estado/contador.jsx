import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador(){

  const [valor, setValor] = useState(0)

  function soma(){
    setValor(valor + 1)
  }

  function subtracao(){
    setValor(valor - 1)
  }

  return(
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1>Contador</h1>
      <ContadorDisplay valor={valor} />
      <div>
        <button onClick={subtracao}>-</button>
        <button onClick={soma}>+</button>
      </div>
    </div>
  )
}