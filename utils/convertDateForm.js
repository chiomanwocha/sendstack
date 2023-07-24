const convertDateForm = (dateToBeConverted) => {
  const date = new Date(dateToBeConverted);
  return date.toLocaleString();
};

export default convertDateForm;