export const UPDMAINLAYOUT = "UPDMAINLAYOUT";

export const updMainLayout = (data, lang) => {
  return {
    type: UPDMAINLAYOUT,
    payload: data,
  };
};
