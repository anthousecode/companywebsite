const onStateHandlers = (formData, setFormData) => {
  return {
    inputHandl(value, prop) {
      setFormData({ ...formData, [prop]: value });
    },
    inputBlogHandl(value, prop, index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.companyblog.blogs[index][prop] = value;
        return updatedData;
      });
    },
    addBlog() {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const newBlog = {
          btnGobackText: "Назад",
          btnText: "Читать больше",
          id: new Date().toISOString(),
          img: "",
          text: "",
          title: "",
          videoUrl: "",
        };
        updatedData.companyblog.blogs.push(newBlog);
        return updatedData;
      });
    },
    onDeleteBlog(id) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.companyblog.blogs = updatedData.companyblog.blogs.filter(
          (blog) => blog.id !== id
        );
        return updatedData;
      });
    },
  };
};
export default onStateHandlers;
