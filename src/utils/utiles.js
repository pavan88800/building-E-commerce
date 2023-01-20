export const getStore = (key) => {
  let User = localStorage.getItem(key);
  if (User !== null) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [] || {};
  }
};

export const setStore = (key, user) => {
  return localStorage.setItem(key, JSON.stringify(user));
};

export const FIELDS = [
  {
    key: "startDate",
    label: "Emial",
    value: "email",
  },
  {
    key: "contributionFrequency",
    label: "Password",
    value: "password",
  },
];
