const fetchCharacter = async (url: string) => {
  const response = await fetch(url);
  const character = await response.json();
  return character;
};

export default fetchCharacter;
