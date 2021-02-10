const onStateHandlers = (formData, setFormData) => {
  return {
    inputHandl(value, prop) {
      setFormData({ ...formData, [prop]: value });
    },
    inputVacHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.contactusData[prop] = value;
        return updatedData;
      });
    },
  };
};
export default onStateHandlers;
