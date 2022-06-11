import { useState } from "react"

export default function contador(){

  const [valor, setValor] = useState(0)

  function soma(){
    setValor(valor + 1)
  }

  function subtracao(){
    setValor(valor - 1)
  }

  return(
    <div>
      <h1>Contador</h1>
      <div>Valor: {valor}</div>
      <button onClick={subtracao}>-</button>
      <button onClick={soma}>+</button>
    </div>
  )
}