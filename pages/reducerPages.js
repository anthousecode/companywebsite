import {
  ONLOAD_DATA,
  ONCHANGE_SHOWNLEADER,
  SIGNIN,
  SIGNOUT,
} from "./actionsPages";
import { UPDMAINLAYOUT } from "./actionsAdmin";
import { layoutTextData } from "../layouts/mainlayoutstorage";

const initialState = {
  lang: "en",
  certainLayoutLangTextData: layoutTextData.en,
  layoutTexts: layoutTextData,
  certainLangPageData: null,
  certainPageData: null,
  isSigned: false,
  isUserSigned: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ONLOAD_DATA: {
      const certainLangData = Object.values(action.payload.data).find(
        (el) => el.lang === action.payload.lang
      );
      const updatedLayoutLang = Object.values(state.layoutTexts).find(
        (el) => el.lang === action.payload.lang
      );
      const updatedState = JSON.parse(JSON.stringify(state));
      return {
        ...updatedState,
        certainLayoutLangTextData: updatedLayoutLang,
        certainLangPageData: certainLangData,
        certainPageData: action.payload.data,
        lang: action.payload.lang,
      };
    }
    case SIGNIN: {
      const updatedState = JSON.parse(JSON.stringify(state));
      const { email, password } = action.payload;
      if (email === "test1@gmail.com" && password === "111111") {
        return {
          ...updatedState,
          isSigned: true,
        };
      } else
        return {
          ...updatedState,
          isUserSigned: true,
        };
    }
    case SIGNOUT: {
      const updatedState = JSON.parse(JSON.stringify(state));
      return {
        ...updatedState,
        isSigned: false,
        isUserSigned: false,
      };
    }
    case ONCHANGE_SHOWNLEADER: {
      const updatedCertainPageData = JSON.parse(
        JSON.stringify(state.certainPageData)
      );
      updatedCertainPageData.en.leadership.leaders.forEach((item) => {
        if (item.name === action.payload) {
          item.isShown = true;
        } else item.isShown = false;
      });
      updatedCertainPageData.ru.leadership.leaders.forEach((item) => {
        if (item.name === action.payload) {
          item.isShown = true;
        } else item.isShown = false;
      });
      const updatedcertainLayoutLangTextData =
        updatedCertainPageData[state.certainLangPageData.lang];
      const updatedState = JSON.parse(JSON.stringify(state));
      return {
        ...updatedState,
        certainLangPageData: updatedcertainLayoutLangTextData,
        certainPageData: updatedCertainPageData,
      };
    }
    case UPDMAINLAYOUT: {
      const updatedState = JSON.parse(JSON.stringify(state));
      const mainLayoutTexts = updatedState.layoutTexts;
      const { phone1, phone2, email, mainText } = action.payload;
      mainLayoutTexts.ru = {
        ...mainLayoutTexts.ru,
        phone1,
        phone2,
        email,
        mainText,
      };
      return {
        ...updatedState,
        certainLayoutLangTextData: mainLayoutTexts.ru,
      };
    }
    default:
      return state;
  }
};
export default reducer;
