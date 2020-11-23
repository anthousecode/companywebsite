import styles from './styles.module.scss'

const TopPanorama = () => {
  return (
    <div className="row toppanorama">
      <div className="col">
        <img className={styles.toppanorama__img} src="images/home/toppanorama.png" alt="toppanorama" />
      </div>
    </div>
  );
};
export default TopPanorama;
