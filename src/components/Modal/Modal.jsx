import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const modalsContainer = document.querySelector("#modals");

const Modal = ({
  onOverlayClick,
  onEscKeydown,
  children,
  target,
  onCloseButtonClick,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", onEscKeydown);

    return () => {
      document.removeEventListener("keydown", onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      {target === "ingredient" && (
        <>
          <div className={styles.modalIngredient}>
            <div className={styles.CloseIcon}>
              <CloseIcon onClick={onCloseButtonClick} type="primary" />
            </div>
            {children}
          </div>
          <ModalOverlay onClick={onOverlayClick} />{" "}
        </>
      )}
      {target === "order" && (
        <>
          <div className={styles.modalOrder}>
            <div className={styles.CloseIcon}>
              <CloseIcon onClick={onCloseButtonClick} type="primary" />
            </div>
            {children}
          </div>
          <ModalOverlay onClick={onOverlayClick} />
        </>
      )}
    </>,
    modalsContainer
  );
};

export default Modal;
