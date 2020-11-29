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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="long-arrow-alt-right"
          className={`${styles.fixedmodal__arrowforhide} svg-inline--fa fa-long-arrow-alt-right fa-w-14`}
          role="img"
          viewBox="0 0 448 512"
          width="30px"
          onClick={hideForm}
        >
          <path
            fill="currentColor"
            d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
          />
        </svg>
      </div>
      <input type="text" placeholder={modalTexts.placeholdername} />
      <input type="text" placeholder={modalTexts.placeholderemaul} />
      <input type="text" placeholder={modalTexts.placeholderphone} />
      <button className={styles.fixedmodal__btn} type="submit">
        {modalTexts.btnText}
      </button>
    </form>
  );
};
export default ContactFixedModal;
