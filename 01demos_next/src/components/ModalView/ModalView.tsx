"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ModalView: React.FC = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 top-20 bottom-8"
      onClick={closeModal}
    >
      <div
        className="w-1/4 h-full p-4 bg-white "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-black">Modal</h2>
        <p className="text-black">Esta es una vista de modal</p>
        <button className="bg-black" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalView;
