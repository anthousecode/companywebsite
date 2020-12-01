const getDataForCarRender = (incomingData) => {
  const prevArr = incomingData.reduce((acc, item, index, array) => {
    if (index % 2 !== 0) {
      acc.push(array.slice(index - 1, index + 1));
    }
    return acc;
  }, []);
  
  if (incomingData.length % 2 !== 0) {
    prevArr.push(incomingData.slice(incomingData.length - 1));
  }
  
  const projectsItemsForRender = prevArr.reduce((acc, item, index, array) => {
    if (index % 2 !== 0) {
      acc.push(array.slice(index - 1, index + 1));
    }
    return acc;
  }, []);

  if (prevArr.length % 2 !== 0) {
    projectsItemsForRender.push(prevArr.slice(prevArr.length - 1));
  }
  return projectsItemsForRender;
};
export default getDataForCarRender;
