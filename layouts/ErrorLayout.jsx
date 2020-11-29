import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store";
import styles from "./styles.module.scss";

const MainLayout = ({ children, title = "Web-site" }) => {
  return (
    <Provider store={store}>
      <div className={`${styles.error} container-fluid`}>
        <Head>
          <title>{title} | AntHouse</title>
        </Head>
        <main>{children}</main>
      </div>
    </Provider>
  );
};
export default MainLayout;
