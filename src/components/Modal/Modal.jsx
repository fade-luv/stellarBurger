import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
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
 const navigate = useNavigate();


  return ReactDOM.createPortal(
   
    <>
      <div className={styles.modal}>
        <div className={styles.CloseIcon}>
          <Link to="/">
            <CloseIcon onClick={onCloseButtonClick} type="primary" />
          </Link>
        </div>
        {children}
      </div>
      <Link to="/">
        <ModalOverlay onClick={onOverlayClick} />
      </Link>
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



export default React.memo(Modal);
