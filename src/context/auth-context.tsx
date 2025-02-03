"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import Cookies from "js-cookie";
import { loginUser } from "@/services/user/get-user";
import { createUser } from "@/services/user/create-user";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, email: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    const storedUser = Cookies.get("user");
    if (token && storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Erro ao parsear o usuário do cookie:", error);
      }
    }
  }, []);

  const login = async (
    name: string,
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const data = await loginUser(name, email, password);
      const token = data.token || Math.random().toString(36).substring(2);
      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.error("Erro no login:", error);
      throw new Error("Usuário não encontrado");
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const data = await createUser({ name: username, email, password });
      const token = data.token || Math.random().toString(36).substring(2);
      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.error("Erro no cadastro:", error);
      throw new Error("Não foi possível criar seu usuário");
    }
  };

  const logout = (): void => {
    Cookies.remove("token");
    Cookies.remove("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro do AuthProvider");
  }
  return context;
};
