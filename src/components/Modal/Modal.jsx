import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const modalsContainer = document.querySelector("#modals");

const Modal = ({
  onOverlayClick,
  onEscKeydown,
  children,
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
          <div className={styles.modal}>
            <div className={styles.CloseIcon}>
              <CloseIcon onClick={onCloseButtonClick} type="primary" />
            </div>
            {children}
          </div>
          <ModalOverlay onClick={onOverlayClick} />{" "}
    </>,
    modalsContainer
  );
};

Modal.propTypes = {
  onOverlayClick: PropTypes.func.isRequired,
  onEscKeydown: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
}.isRequired;



export default Modal;
