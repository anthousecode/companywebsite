const onStateHandlers = (formData, setFormData) => {
  return {
    inputHandl(value, prop) {
      setFormData({ ...formData, [prop]: value });
    },
    featuresHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const features = { ...updatedData.features, [prop]: value };
        return { ...updatedData, features };
      });
    },
    featListHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.features.first[prop].text = value;
        return updatedData;
      });
    },
    projectsHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.ourprojects[prop] = value;
        return updatedData;
      });
    },
    prUrlsHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.ourprojects.carouselImages[prop].src = value;
        return updatedData;
      });
    },
    bottomBlckHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const btmData = { ...updatedData.bottomData, [prop]: value };
        return { ...updatedData, bottomData: btmData };
      });
    },
  };
};
export default onStateHandlers;
