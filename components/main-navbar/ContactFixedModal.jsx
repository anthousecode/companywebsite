import React from "react";
import styles from "./styles.module.scss";

const ContactFixedModal = ({ modalTexts }) => {
  const openBtn = React.createRef();
  const form = React.createRef();
  const showForm = () => {
    form.current.style.marginRight = "0";
    openBtn.current.style.display = "none";
  };
  const hideForm = () => {
    form.current.style.marginRight = "-400px";
    openBtn.current.style.display = "flex";
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    hideForm();
  };
  return (
    <form className={styles.fixedmodal} ref={form} onSubmit={onSubmitForm}>
      <div
        className={styles.fixedmodal__openBtn}
        ref={openBtn}
        onClick={showForm}
      >
        {modalTexts.title}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h3 className={styles.fixedmodal__title}>{modalTexts.title}</h3>
        <img
          className={styles.fixedmodal__arrowforhide}
          src="../icons/arrowrighthidemodal.svg"
          alt="arrowrighthidemodal"
          onClick={hideForm}
        />
      </div>
      <input type="text" placeholder={modalTexts.placeholdername} />
      <input type="text" placeholder={modalTexts.placeholderemaul} />
      <input type="text" placeholder={modalTexts.placeholderphone} />
      <input type="text" placeholder={modalTexts.placeholdermessage} />
      <button className={styles.fixedmodal__btn} type="submit">
        {modalTexts.btnText}
      </button>
    </form>
  );
};
export default ContactFixedModal;
