import MainLayout from "../../layouts/MainLayout";
import TopAboutUsPanorama from "../../components/aboutusview/TopPanorama";
import NewsAndProcess from "../../components/aboutusview/NewsAndProcess";

const AboutUs = () => {
  return (
    <MainLayout title="About Us Page">
      <div className="row">
        <div className="col">
          <TopAboutUsPanorama />
          <NewsAndProcess />
        </div>
      </div>
    </MainLayout>
  );
};
export default AboutUs;
