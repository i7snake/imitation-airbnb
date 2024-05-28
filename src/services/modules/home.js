import myRequest from "..";

export const getGoodpriceData = () => {
  return myRequest.get({
    url: "/home/goodprice",
  });
};

export const getHighscoreData = () => {
  return myRequest.get({
    url: "/home/highscore",
  });
};

export const getDiscountData = () => {
  return myRequest.get({
    url: "/home/discount",
  });
};

export const getHotrecommenddestData = () => {
  return myRequest.get({
    url: "/home/hotrecommenddest",
  });
};

export const getLongforData = () => {
  return myRequest.get({
    url: "/home/longfor",
  });
};

export const getPlusData = () => {
  return myRequest.get({
    url: "/home/plus",
  });
};
