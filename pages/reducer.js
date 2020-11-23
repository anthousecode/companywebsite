import { ONCHANGE_LANG } from "./actions";
import { layoutTextData } from "../layouts/mainlayoutstorage";
import homestorage from "./homestorage";

const initialState = {
  certainLayoutLangTextData: layoutTextData.en,
  layoutTexts: layoutTextData,
  certainLangPageData: homestorage.en,
  certainPageData: homestorage,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ONCHANGE_LANG: {
      const updatedLayoutLang = Object.values(state.layoutTexts).find(
        (el) => el.lang === action.payload
      );
      return {
        ...state,
        certainLayoutLangTextData: updatedLayoutLang,
        certainLangPageData: homestorage[action.payload]
      };
    }
    default:
      return state;
  }
};
export default reducer;
