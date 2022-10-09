import React from "react";
import styles from "./OrderDetails.module.css";
import img from "../../images/graphics.svg";
const OrderDetails = (props) => {
  return (
    <>
      <p className={`${styles.id} text text_type_digits-large`}>{props.id}</p>
      <h1 className={`${styles.title} mt-10`}>{props.title}</h1>
      <div className={`${styles.iconWrap} mt-15 mb-15`}>
        <img src={img} />
      </div>
      <p className={`${styles.info1} text text_type_main-small mb-2`}>
        Ваш заказ начали готовить
      </p>
      <p className={styles.info2}>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export default OrderDetails;
