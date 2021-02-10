import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const AdminNav = () => {
  const { certainAdmin } = useRouter().query;
  return (
    <div className={`${styles.adminnav} col-3 p-0`}>
      <ul className={styles.adminnav__list}>
        <li className={certainAdmin === "headerfooter" ? styles.active : ""}>
          <Link href="/adminpage/headerfooter">Футер</Link>
        </li>
        <li className={certainAdmin === "home" ? styles.active : ""}>
          <Link href="/adminpage/home">Домашняя страница</Link>
        </li>
        <li className={certainAdmin === "aboutus" ? styles.active : ""}>
          <Link href="/adminpage/aboutus">О нас</Link>
        </li>
        <li
          className={certainAdmin === "projectsproducts" ? styles.active : ""}
        >
          <Link href="/adminpage/projectsproducts">Проекты и продукты</Link>
        </li>
        <li className={certainAdmin === "blog" ? styles.active : ""}>
          <Link href="/adminpage/blog">Блог</Link>
        </li>
        <li className={certainAdmin === "career" ? styles.active : ""}>
          <Link href="/adminpage/career">Карьера</Link>
        </li>
        <li className={certainAdmin === "contactus" ? styles.active : ""}>
          <Link href="/adminpage/contactus">Связаться с нами</Link>
        </li>
      </ul>
    </div>
  );
};
export default AdminNav;
