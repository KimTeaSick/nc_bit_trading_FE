// src/components/ModalPortal.ts
import { FC, ReactNode } from "react";
import ReactDom from "react-dom";

interface Props {
  children: ReactNode;
}

const ModalPortal: FC<Props> = ({ children }) => {
  if (typeof document !== "undefined") {
    const el: any = document.getElementById("portal");
    return ReactDom.createPortal(children, el);
  } else {
    return <div>asd</div>;
  }
};

export default ModalPortal;
