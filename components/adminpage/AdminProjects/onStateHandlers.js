const onStateHandlers = (formData, setFormData) => {
  return {
    inputHandl(value, prop) {
      setFormData({ ...formData, [prop]: value });
    },
    inputProjectTopLevel(value, prop, index) {
      const data = JSON.parse(JSON.stringify(formData));
      data.allProjects[index][prop] = value;
      setFormData(data);
    },
    inputProject(value, prop, index, deepindex) {
      const data = JSON.parse(JSON.stringify(formData));
      data.allProjects[index].projects[deepindex][prop] = value;
      setFormData(data);
    },
    inputProjectLinks(value, prop, index, deepindex, deeperindex) {
      const data = JSON.parse(JSON.stringify(formData));
      data.allProjects[index].projects[deepindex].activelinks.links[
        deeperindex
      ] = value;
      setFormData(data);
    },
    inputProjectTecks(value, prop, index, deepindex, deeperindex) {
      const data = JSON.parse(JSON.stringify(formData));
      data.allProjects[index].projects[deepindex].technologies.techs[
        deeperindex
      ] = value;
      setFormData(data);
    },
    onAddProjectsType() {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const newProject = {
          btnGobackText: "Назад",
          btnText: "Читать больше",
          id: new Date().toISOString(),
          img: "",
          subtitle: "",
          title: "",
          projects: [],
        };
        updatedData.allProjects.push(newProject);
        return updatedData;
      });
    },
    onDeleteProjects(id) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.allProjects = updatedData.allProjects.filter(
          (projects) => projects.id !== id
        );
        return updatedData;
        s;
      });
    },
    onAddProject(index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        const newProject = {
          btnGobackText: "Назад",
          btnText: "Читать больше",
          id: new Date().toISOString(),
          img: "",
          subtitle: updatedData.allProjects[0].projects[0].subtitle || "",
          title: "",
          text: "",
          activelinks: {
            title: "Активная ссылка",
            links: [],
          },
          technologies: {
            title: "Технологии",
            techs: [],
          },
        };
        updatedData.allProjects[index].projects.push(newProject);
        return updatedData;
      });
    },
    onDeleteProject(id, index) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.allProjects[index].projects = updatedData.allProjects[
          index
        ].projects.filter((project) => project.id !== id);
        return updatedData;
      });
    },
    addLink(index, deepindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.allProjects[index].projects[
          deepindex
        ].activelinks.links.push("");
        return updatedData;
      });
    },
    deleteLink(index, deepindex, deeperindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.allProjects[index].projects[
          deepindex
        ].activelinks.links.splice(deeperindex, 1);
        return updatedData;
      });
    },
    addTech(index, deepindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.allProjects[index].projects[
          deepindex
        ].technologies.techs.push("");
        return updatedData;
      });
    },
    deleteTech(index, deepindex, deeperindex) {
      setFormData((data) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData.allProjects[index].projects[
          deepindex
        ].technologies.techs.splice(deeperindex, 1);
        return updatedData;
      });
    },
  };
};
export default onStateHandlers;
