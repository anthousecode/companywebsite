import Head from "next/head";
import MainNavbar from "../components/main-navbar/MainNavbar";
import MainFooter from "../components/main-footer/MainFooter";
import AdminNav from "../components/adminpage/AdminNav";
import { Provider } from "react-redux";
import store from "../store";
import styles from "./styles.module.scss";

const AdminLayout = ({ children, title = "Web-site" }) => {
  return (
    <Provider store={store}>
      <div className={`${styles.wrapper} container-fluid`}>
        <Head>
          <title>{title} | AntHouse</title>
        </Head>
        <MainNavbar />
        <div className="row">
          <AdminNav />
          <div className="col-9 py-2">
            <main>{children}</main>
          </div>
        </div>
        <MainFooter />
      </div>
    </Provider>
  );
};
export default AdminLayout;
