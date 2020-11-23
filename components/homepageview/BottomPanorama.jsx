import styles from './styles.module.scss'

const BottomPanorama = () => {
  return (
    <div className="row">
      <div className="col">
        <div className={styles.bottompanorama}>
            <img src="images/home/bottompanorama.png" alt="bottompanorama"/>
            {/* <section className={styles.bottompanorama__learnmoreblock}>
              <div className={styles.bottompanorama__learnmoreblock__datablock}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, harum?</p>
              </div>
            </section> */}
        </div>
      </div>
    </div>
  );
};
export default BottomPanorama;
