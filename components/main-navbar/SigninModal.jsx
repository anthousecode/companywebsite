import { Modal } from "react-bootstrap";
import styles from "./styles.module.scss";

const SigninModal = ({ signinModal, setSigninModal, modalTexts }) => {
  const onSignin = (e) => {
    e.preventDefault();
    setSigninModal(false);
  };
  return (
    <Modal centered show={signinModal} onHide={() => setSigninModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {modalTexts.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSignin} className={styles.signinform}>
          <div className={styles.signinform__login}>
            <label htmlFor="loginemailsigninmodal">
              {modalTexts.labelinputloginemail}
            </label>
            <input type="text" id="loginemailsigninmodal" />
          </div>
          <div className={styles.signinform__password}>
            <label htmlFor="passwordsigninmodal">
              {modalTexts.labelinputpassword}
            </label>
            <input type="text" id="passwordsigninmodal" />
          </div>
          <div className={styles.signinform__btn}>
            <button type="submit">{modalTexts.btnText}</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default SigninModal;
