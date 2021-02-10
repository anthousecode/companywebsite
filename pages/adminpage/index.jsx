import { useEffect } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../layouts/AdminLayout";
import store from "../../store";

const AdminPage = () => {
  const router = useRouter();
  const { certainAdmin } = router.query;
  useEffect(() => {
    if (!certainAdmin) {
      router.push("/adminpage/headerfooter");
    }
  }, []);
  return <AdminLayout title="Admin Page"></AdminLayout>;
};
export default AdminPage;
