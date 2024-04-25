'use client'

import { AuthContext } from "@/app/context/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

export const AuthRoute: React.FC<ClientOnlyProps> = ({
  children
}) => {

  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const { state } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // Verificar si el estado de autenticación se ha cargado
    if (!isAuthLoaded) {
      return;
    }

    if (state.isAuthenticated === false) {
      router.push("/home");
      return;
    }
  }, [router, state.isAuthenticated, isAuthLoaded]);

  useEffect(() => {
    // Verificar si el estado de autenticación se ha cargado
    if (state.isAuthenticated !== null) {
      setIsAuthLoaded(true);
    }
  }, [state.isAuthenticated]);

  return (
    <>
      {children}
    </>
  )
}
