const removeQuotes = (str) => {
  return str.replace(/^"(.*)"$/, "$1");
}

export default removeQuotes;