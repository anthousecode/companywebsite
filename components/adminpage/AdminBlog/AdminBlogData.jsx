import AdminInputText from "../../common/AdminInputText";
import AdminTextarea from "../../common/AdminTextarea";
import styles from "../styles.module.scss";

const AdminBlogData = ({ stateHandlers, formData }) => {
  return (
    <section className="mb-3">
      <h2>Блоги компании</h2>
      <AdminInputText
        title="Заголовок"
        prop="title"
        handl={stateHandlers.inputHandl}
        value={formData.companyblog.title}
      />
      <AdminInputText
        title="Текст под заголовком"
        prop="underTitleText"
        handl={stateHandlers.inputHandl}
        value={formData.companyblog.underTitleText}
      />
      <h3 className="mt-4">Список блогов:</h3>
      {formData.companyblog.blogs.map((blog, index) => {
        return (
          <div key={blog.id} className="my-5">
            <div className="d-flex mb-n4">
              <h5 className="mr-3 w-50">Блог</h5>
              <button
                type="button"
                className={styles.deleteBtn}
                onClick={() => stateHandlers.onDeleteBlog(blog.id)}
              >
                Удалить
              </button>
            </div>
            <AdminInputText
              title="Заголовок блога"
              prop="title"
              handl={stateHandlers.inputBlogHandl}
              value={blog.title}
              index={index}
            />
            <AdminInputText
              title="Адрес картинки"
              prop="title"
              handl={stateHandlers.inputBlogHandl}
              value={blog.img}
              index={index}
            />
            <AdminInputText
              title="Адрес видео"
              prop="videoUrl"
              handl={stateHandlers.inputBlogHandl}
              value={blog.videoUrl}
              index={index}
            />
            <AdminTextarea
              title="Текст блога"
              prop="text"
              handl={stateHandlers.inputBlogHandl}
              value={blog.text}
              index={index}
            />
          </div>
        );
      })}
      <button
        className={styles.addBtn}
        type="button"
        onClick={stateHandlers.addBlog}
      >
        Добавить блог
      </button>
      <hr />
    </section>
  );
};
export default AdminBlogData;
