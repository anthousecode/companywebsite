const onStateHandlers = (formData, setFormData) => {
  return {
    inputHandl(value, prop) {
      setFormData({ ...formData, [prop]: value });
    },
    inputVacHandl(value, prop, index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index][prop] = value;
        return updatedData;
      });
    },
    inputVacHandlPluses(value, prop, index, deepindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index].nicetohave[deepindex] = value;
        return updatedData;
      });
    },
    inputVacHandlRequirements(value, prop, index, deepindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index].requirements[deepindex] = value;
        return updatedData;
      });
    },
    inputVacHandlResp(value, prop, index, deepindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index].responsibilities[deepindex] = value;
        return updatedData;
      });
    },
    addVacancy() {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const newVacancy = {
          bonusText:
            "Вы получите от нас бонус, если поможете нам найти специалиста на эту вакансию",
          description: "",
          descriptionTitle: "Описание",
          hotVacancy: false,
          id: new Date().toISOString(),
          isThereBonus: false,
          name: "",
          nicetohave: [],
          nicetohaveTitle: "Будет плюсом",
          requirements: [],
          requirementsTitle: "Требования",
          responsibilities: [],
          responsibilitiesTitle: "Обязанности",
          subtitle: "",
        };
        updatedData.career.vacancies.push(newVacancy);
        return updatedData;
      });
    },
    onDeleteVac(id) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies = updatedData.career.vacancies.filter(
          (vac) => vac.id !== id
        );
        return updatedData;
      });
    },
    addPlus(index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index].nicetohave.push("");
        return updatedData;
      });
    },
    deletePlus(index, deepindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[
          index
        ].nicetohave = updatedData.career.vacancies[index].nicetohave.filter(
          (plus, i) => i !== deepindex
        );
        return updatedData;
      });
    },
    addReq(index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index].requirements.push("");
        return updatedData;
      });
    },
    deleteReq(index, deepindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[
          index
        ].requirements = updatedData.career.vacancies[
          index
        ].requirements.filter((req, i) => i !== deepindex);
        return updatedData;
      });
    },
    addRes(index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index].responsibilities.push("");
        return updatedData;
      });
    },
    deleteRes(index, deepindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[
          index
        ].responsibilities = updatedData.career.vacancies[
          index
        ].responsibilities.filter((req, i) => i !== deepindex);
        return updatedData;
      });
    },
    forHotVacancy(index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index].hotVacancy = !updatedData.career
          .vacancies[index].hotVacancy;
        return updatedData;
      });
    },
    forBonus(index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.career.vacancies[index].isThereBonus = !updatedData.career
          .vacancies[index].isThereBonus;
        return updatedData;
      });
    },
  };
};
export default onStateHandlers;
