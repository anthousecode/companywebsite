import AdminLayout from "../../layouts/AdminLayout";
import { useRouter } from "next/router";
import AdminMainLayout from "../../components/adminpage/AdminMainLayout";
import AdminHome from "../../components/adminpage/AdminHome/AdminHome";
import AdminAboutUs from "../../components/adminpage/AdminAboutUs/AdminAboutUs";
import AdminProjectsProducts from "../../components/adminpage/AdminProjects/AdminProjectsProducts";
import AdminBlog from "../../components/adminpage/AdminBlog/AdminBlog";
import AdminCareer from "../../components/adminpage/AdminCareer/AdminCareer";
import AdminContactUs from "../../components/adminpage/AdminContactUs/AdminContactUs";

const CertainAdmin = () => {
  const router = useRouter();
  const { certainAdmin } = router.query;
  let certainAdminPage;
  if (certainAdmin === "headerfooter") {
    certainAdminPage = <AdminMainLayout />;
  } else if (certainAdmin === "home") {
    certainAdminPage = <AdminHome />;
  } else if (certainAdmin === "aboutus") {
    certainAdminPage = <AdminAboutUs />;
  } else if (certainAdmin === "projectsproducts") {
    certainAdminPage = <AdminProjectsProducts />;
  } else if (certainAdmin === "blog") {
    certainAdminPage = <AdminBlog />;
  } else if (certainAdmin === "career") {
    certainAdminPage = <AdminCareer />;
  } else if (certainAdmin === "contactus") {
    certainAdminPage = <AdminContactUs />;
  }
  return <AdminLayout title="Admin Page">{certainAdminPage}</AdminLayout>;
};
export default CertainAdmin;
