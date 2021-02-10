import homestorage from "./home/homestorage";
import aboutusstorage from "./aboutus/aboutusstorage";
import projectsstorage from "./projectsandproducts/projectsstorage";
import blogstorage from "./blog/blogstorage";
import contactusstorage from "./contactus/contactusstorage";
import careerstorage from "./career/careerstorage";
import userstorage from "./userpage/userstorage";

export const ONLOAD_DATA = "ONLOAD_DATA";
export const ONCHANGE_SHOWNLEADER = "ONCHANGE_SHOWNLEADER";
export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";

export const onSignIn = (email, password) => {
  return {
    type: SIGNIN,
    payload: { email, password },
  };
};
export const onSignOut = () => {
  return {
    type: SIGNOUT,
  };
};

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
    case "/userpage":
      data = userstorage;
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
