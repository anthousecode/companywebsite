import styles from "./styles.module.scss";

const DevsRow = ({ data }) => {
  console.log(data);
  return (
    <section className={styles.ourteam__devsrowblock}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.ourteam__devsrowblock_person}>
            <img
              className={styles.ourteam__devsrowblock_person_avatar}
              src="images/aboutus/avatarplace.png"
              alt="avatarplace"
            />
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
