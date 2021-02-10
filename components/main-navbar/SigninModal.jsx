import { useState } from "react";
import { Modal } from "react-bootstrap";
import Router from "next/router";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { onSignIn } from "../../pages/actionsPages";

const SigninModal = ({ signinModal, setSigninModal, modalTexts, onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSignin = (e) => {
    e.preventDefault();
    onSignIn(email, password);
    if (email === "test1@gmail.com" && password === "111111") {
      Router.push("/adminpage/headerfooter");
    } else Router.push("/userpage");
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
            <input
              type="text"
              id="loginemailsigninmodal"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.signinform__password}>
            <label htmlFor="passwordsigninmodal">
              {modalTexts.labelinputpassword}
            </label>
            <input
              type="text"
              id="passwordsigninmodal"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.signinform__btn}>
            <button type="submit">{modalTexts.btnText}</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const mapDispatch = { onSignIn };

export default connect(null, mapDispatch)(SigninModal);
