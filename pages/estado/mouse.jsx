import { useState } from "react"

export default function mouse(props){
  
  const [x, setX] = useState(0)
  const [y, alterarY] = useState(0)

  const estilo = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#222",
    color: "#FFF",
    height: "100vh"
  }

  function quandoMover(ev){
    setX(ev.clientX)
    alterarY(ev.clientY)
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>
    </div>
  )
}