export const ONLOAD_DATA = "ONLOAD_DATA";
export const ONCHANGE_LANG = "ONCHANGE_LANG";

export const onChangeLang = (langtype) => {
  return {
    type: ONCHANGE_LANG,
    payload: langtype,
  };
};
