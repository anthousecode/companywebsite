import styles from "./styles.module.scss";

const DevsRow = ({ data }) => {
  return (
    <section className={styles.ourteam__devsrowblock}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.ourteam__devsrowblock_person}>
            <div className={styles.imgwrapper}>
              <img
                className={styles.ourteam__devsrowblock_person_avatar}
                src={item.photo ? item.photo : "images/aboutus/avatarplace.png"}
                alt="avatarplace"
              />
              <p className={styles.persondata}>{item.persondata}</p>
            </div>
            <p className={styles.ourteam__devsrowblock_person_name}>
              {item.name}
            </p>
            <p className={styles.ourteam__devsrowblock_person_ocupation}>
              {item.ocupation}
            </p>
          </div>
        );
      })}
    </section>
  );
};
export default DevsRow;
