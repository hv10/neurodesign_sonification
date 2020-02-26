function filter(ems, name) {
  const em = ems.filter((v, i, arr) => v.name === name);
  if (em.length > 0) {
    return em[0];
  } else {
    return {};
  }
}
export default filter;
