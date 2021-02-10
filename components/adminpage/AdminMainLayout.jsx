import { useState } from "react";
import { connect } from "react-redux";
import { updMainLayout } from "../../pages/actionsAdmin";
import AdminInputText from "../common/AdminInputText";
import AdminTextarea from "../common/AdminTextarea";
import AdminSaveBtn from "../common/AdminSaveBtn";

const AdminMainLayout = ({ mainLayoutTexts, updMainLayout }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [phone1, setPhone1] = useState(mainLayoutTexts.ru.phone1);
  const [phone2, setPhone2] = useState(mainLayoutTexts.ru.phone2);
  const [email, setEmail] = useState(mainLayoutTexts.ru.email);
  const [mainText, setMainText] = useState(mainLayoutTexts.ru.mainText);

  const onSaveData = (e) => {
    e.preventDefault();
    const updatedData = JSON.parse(JSON.stringify(mainLayoutTexts.ru));
    updMainLayout({ ...updatedData, phone1, phone2, email, mainText });
    setIsUpdated(true);
    setTimeout(() => setIsUpdated(false), 2000);
  };
  return (
    <form onSubmit={onSaveData}>
      <section className="mb-3">
        <h2>Связаться с нами</h2>
        <AdminInputText
          title="Телефон 1"
          prop={phone1}
          handl={setPhone1}
          value={phone1}
        />
        <AdminInputText
          title="Телефон 2"
          prop={phone2}
          handl={setPhone2}
          value={phone2}
        />
        <AdminInputText
          title="Эл. адрес"
          prop={email}
          handl={setEmail}
          value={email}
        />
      </section>

      <section>
        <h2>О нас</h2>
        <AdminTextarea
          title={null}
          prop={mainText}
          handl={setMainText}
          value={mainText}
        />
      </section>
      <AdminSaveBtn isUpdated={isUpdated} />
    </form>
  );
};
const mapState = (state) => {
  return {
    mainLayoutTexts: state.certainPageData.layoutTexts,
  };
};
const mapDispatch = { updMainLayout };
export default connect(mapState, mapDispatch)(AdminMainLayout);
