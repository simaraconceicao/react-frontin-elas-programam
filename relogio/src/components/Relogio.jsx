import { useState } from 'react'

const Relogio = () => {
  let time = new Date().toLocaleTimeString()
  const [horario, setHorario] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setHorario(time)
  }

  setInterval(updateTime,1000)
  return (
    <h1>Horário Local: {horario}</h1>
  )
}

export default Relogio