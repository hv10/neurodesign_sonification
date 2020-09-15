function filter(ems, name) {
  const em = ems.find((v) => v.name === name);
  if (em) {
    return em;
  } else {
    return {};
  }
}
export default filter;
