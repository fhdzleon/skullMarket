import Image from "next/image";
import frontImage from "../assets/front.png";
import Character from "@/components/character/Character";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-white p-4 max-w-sm justify-center">
        <h1 className="text-center text-3xl font-bold mb-2">
          Soy Henry BootCamp
        </h1>
        <p className="text-center">Modulo 4 - FrontEnd</p>
        <Image src={frontImage} alt="Imagen prueba" width={500} height={1} />
      </div>
      <Character url={"https://rickandmortyapi.com/api/character/1"} />

      <Character url={"https://jsonplaceholder.typicode.com/users/1"} />

      <h2 className="text-2xl">Temario:</h2>
    </div>
  );
}
