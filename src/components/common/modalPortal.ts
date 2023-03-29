// src/components/ModalPortal.ts
import { ReactNode } from "react";
import ReactDom from "react-dom";

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  if (typeof document !== "undefined") {
    const el = document.getElementById("portal") as HTMLElement;
    return ReactDom.createPortal(children, el);
  }
};

export default ModalPortal;
