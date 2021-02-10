import React, { useState } from "react";
import HeaderRow from "../common/HeaderRow";
import styles from "./styles.module.scss";

const ContactUsBlock = ({ data }) => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [getnews, setGetNews] = useState(false);
  const { formTexts } = data;
  return (
    <div className={`${styles.contuctusrow} row`}>
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />

        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
            <form className={styles.contactform}>
              <section className={styles.contactform__topinputblock}>
                <label htmlFor="subject">{formTexts.labelinputsubject}</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onInput={(e) => setSubject(e.target.value)}
                />
              </section>
              <section className={styles.contactform__bottominputblock}>
                <label
                  className={styles.contactform__bottominputblock_detailslabel}
                  htmlFor="details"
                >
                  {formTexts.labelinputdetails}
                </label>
                <input
                  className={styles.contactform__bottominputblock_detailsfield}
                  type="text"
                  id="details"
                  placeholder={formTexts.placeholderinputname}
                  value={name}
                  onInput={(e) => setName(e.target.value)}
                />
                <div
                  className={
                    styles.contactform__bottominputblock_contactfieldsblock
                  }
                >
                  <input
                    type="text"
                    placeholder={formTexts.placeholderinputemail}
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder={formTexts.placeholderinputphone}
                    value={phone}
                    onInput={(e) => setPhone(e.target.value)}
                  />
                </div>
              </section>
              <div className={styles.contactform__subscribe}>
                <input
                  type="checkbox"
                  id="news"
                  value={getnews}
                  onChange={(e) => setGetNews(e.target.value)}
                />
                <label htmlFor="news">{formTexts.labelinputnews}</label>
              </div>
              <div className={styles.contactform__submit}>
                <button type="submit">
                  <span>{formTexts.btnText}</span>
                  <img src="icons/arrowright.png" alt="v" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUsBlock;
