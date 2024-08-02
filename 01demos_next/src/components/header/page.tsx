"use client";

import React from "react";
import Link from "next/link";
import "./styleApply.css";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();

  const openModal = () => {
    router.push("/cart");
  };
  return (
    <>
      <div className="flex justify-between text-black bg-yellow-300">
        <div className="p-2">
          <Link href="/">
            <button className="navButton">Home</button>
          </Link>

          <Link href="/">
            <button className="navButton">Clase 1</button>
          </Link>

          <Link href="/">
            <button className="navButton">Clase 2</button>
          </Link>

          <Link href="/clase3">
            <button className="navButton">Clase 3</button>
          </Link>

          <Link href="/">
            <button className="navButton">Clase 4</button>
          </Link>
        </div>
        <div className="flex items-center mx-5">
          <button onClick={openModal} className="p-3 rounded-full bg-sky-300">
            Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
