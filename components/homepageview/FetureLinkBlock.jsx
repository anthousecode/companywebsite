import styles from "./styles.module.scss";

const FeatureLinkBlock = ({ item }) => {
  return (
    <div className="col-sm-6 col-md-3 px-0 d-flex flex-column align-items-center">
      <div className={styles.featuresblock__linkimageblock}>
        <img src={item.imgUrl} alt={item.title} />
      </div>
      <h4 className="my-3">{item.title}</h4>
      <p className="text-center p-0">{item.text}</p>
    </div>
  );
};
export default FeatureLinkBlock;
