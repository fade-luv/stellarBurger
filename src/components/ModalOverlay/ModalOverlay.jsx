import React from "react";
import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
const ModalOverlay = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick} />;
};

export default ModalOverlay;
