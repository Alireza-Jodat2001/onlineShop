import { useContext } from "react"

import { EventContext } from "../../hook/Context/EventContext"

export default function Backdrop() {
  const { closeElement , backdrop , dispatchEvent } = useContext(EventContext)

  return (
    <div 
      style={{ background: 'rgba(0 , 0 , 0 , 0.3)' , backdropFilter: 'blur(2px)' }} 
      className={`${backdrop} position-absolute vh-100 w-100`} 
      onClick={() => dispatchEvent(closeElement())}
    ></div>
  )
}