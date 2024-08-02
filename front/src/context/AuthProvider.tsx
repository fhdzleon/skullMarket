"use client";

import { ReactNode, useState } from "react";
import { AuthContext } from "@/helpers/AuthContext";
import { Product, User } from "@/interfaces/interfaces";

/* const AuthContext = createContext<AuthContextProps | undefined>(undefined); */

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [carrito, setCarrito] = useState<Product | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
