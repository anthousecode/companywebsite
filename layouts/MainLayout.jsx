import Head from "next/head";
import MainNavbar from "../components/main-navbar/MainNavbar";
import MainFooter from "../components/main-footer/MainFooter";
import { Provider } from "react-redux";
import store from "../store";
import styles from "./styles.module.scss";

const MainLayout = ({ children, title = "Web-site" }) => {
  return (
    <Provider store={store}>
      <div className={`${styles.wrapper} container-fluid`}>
        <Head>
          <title>{title} | AntHouse</title>
        </Head>
        <MainNavbar />
        <main>{children}</main>
        <MainFooter />
      </div>
    </Provider>
  );
};
export default MainLayout;
