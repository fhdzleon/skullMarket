import React from "react";
import fetchCharacter from "@/helpers/fetch";
import { CharacterProps } from "@/interfaces/interfaces";

const Character: React.FC<CharacterProps> = async ({ url }) => {
  const character = await fetchCharacter(url);
  return (
    <div className="font-bold text-sky-700 text-3xl">
      {JSON.stringify(character.name)}
    </div>
  );
};

export default Character;
