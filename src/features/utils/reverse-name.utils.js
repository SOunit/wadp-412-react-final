export const reverseName = (name) => {
  let result = "";

  name.split("").forEach((char) => {
    result = char + result;
  });

  return result;
};
