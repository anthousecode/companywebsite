import { ONLOAD_DATA, ONCHANGE_SHOWNLEADER } from "./actions";
import { layoutTextData } from "../layouts/mainlayoutstorage";

const initialState = {
  lang: "en",
  certainLayoutLangTextData: layoutTextData.en,
  layoutTexts: layoutTextData,
  certainLangPageData: null,
  certainPageData: null,
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
      return {
        ...state,
        certainLayoutLangTextData: updatedLayoutLang,
        certainLangPageData: certainLangData,
        certainPageData: action.payload.data,
        lang: action.payload.lang,
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
      return {
        ...state,
        certainLangPageData: updatedcertainLayoutLangTextData,
        certainPageData: updatedCertainPageData,
      };
    }
    default:
      return state;
  }
};
export default reducer;
