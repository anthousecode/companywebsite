const onStateHandlers = (formData, setFormData) => {
  return {
    inputHandl(value, prop) {
      setFormData({ ...formData, [prop]: value });
    },
    descrHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const descrData = { ...updatedData.description, [prop]: value };
        return { ...updatedData, description: descrData };
      });
    },
    ourTeamHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const ourteam = { ...updatedData.ourteam, [prop]: value };
        return { ...updatedData, ourteam: ourteam };
      });
    },
    personDataHandl(value, prop, index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.ourteam.developers[index][prop] = value;
        return updatedData;
      });
    },
    onAddWorker() {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const newWorker = {
          name: "",
          ocupation: "",
        };
        updatedData.ourteam.developers.push(newWorker);
        return updatedData;
      });
    },
    onDeleteWorker(index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.ourteam.developers = updatedData.ourteam.developers.filter(
          (item, i) => i !== index
        );
        return updatedData;
      });
    },
    rulersHandl(value, prop) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const leadData = { ...updatedData.leadership, [prop]: value };
        return { ...updatedData, leadership: leadData };
      });
    },
    rulersDataHandl(value, prop, index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.leadership.leaders[index][prop] = value;
        return updatedData;
      });
    },
    onAddRuller() {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const newRuler = {
          name: "",
          ocupation: "",
          description: "",
          email: "",
          phone: "",
          isShown: false,
        };
        updatedData.leadership.leaders.push(newRuler);
        updatedData.leadership.leaders[0].isShown = true;
        return updatedData;
      });
    },
    onDeleteRuller(index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.leadership.leaders = updatedData.leadership.leaders.filter(
          (item, i) => i !== index
        );
        return updatedData;
      });
    },
  };
};
export default onStateHandlers;
