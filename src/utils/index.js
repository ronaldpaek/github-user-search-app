const formatUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `http://${url}`; // defaulting to http if no protocol is provided
};

export { formatUrl };
