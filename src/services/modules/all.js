import myRequest from "..";

export const getAllListData = (offset = 0, size = 20) => {
  return myRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
};
