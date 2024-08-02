import next from "next";

export const fetchDataProducts = async (url: string) => {
  const response = await fetch(url, {
    cache: "no-cache",
  });
  const data = await response.json();

  return data;
};
