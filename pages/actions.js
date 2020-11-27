import homestorage from "./home/homestorage";
import aboutusstorage from "./aboutus/aboutusstorage";
import projectsstorage from "./projectsandproducts/projectsstorage";
import blogstorage from "./blog/blogstorage";
import contactusstorage from "./contactus/contactusstorage";
import careerstorage from "./career/careerstorage";

export const ONLOAD_DATA = "ONLOAD_DATA";
export const ONCHANGE_SHOWNLEADER = "ONCHANGE_SHOWNLEADER";

export const onLoadData = (path, lang) => {
  let data = null;
  switch (path) {
    case "/":
      data = homestorage;
      break;
    case "/aboutus":
      data = aboutusstorage;
      break;
    case "/projectsandproducts":
      data = projectsstorage;
      break;
    case "/blog":
      data = blogstorage;
      break;
    case "/contactus":
      data = contactusstorage;
      break;
    case "/career":
      data = careerstorage;
      break;
    default:
      data = homestorage;
  }
  return {
    type: ONLOAD_DATA,
    payload: {
      data,
      lang,
    },
  };
};

export const onChangeShownLead = (name) => {
  return {
    type: ONCHANGE_SHOWNLEADER,
    payload: name,
  };
};
