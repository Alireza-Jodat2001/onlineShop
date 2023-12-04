import { useContext } from "react";
import { EventContext } from "../../hook/Context/EventContext";

export default function Backdrop() {
  const { closeElement, backdrop, dispatchEvent } = useContext(EventContext);

  return (
    <div
      style={{ backdropFilter: "blur(2px)", background: "rgba(0, 0, 0, .5)" }}
      className={`${backdrop} w-screen h-screen fixed top-0 left-0`}
      onClick={() => dispatchEvent(closeElement())}
    ></div>
  );
}
