"use client";

import { useCallback, useContext, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookie from 'js-cookie'

import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { CartContext } from "@/app/context/cart/cartContext";
import { AuthContext } from "@/app/context/auth/AuthContext";
import Link from "next/link";
import { ClientOnly } from "../clientonly/ClientOnly";

const UserMenuFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const UserMenuContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  border-radius: 200px;
  border: 1px solid;
  border-color: #d4d4d4;
  background-color: #f5f5f5;
  padding: 16px;
  @media (min-width: 768px) {
    padding: 4px 8px;
  }
  cursor: pointer;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  }
`;

interface UserMenuProps {
  onOpen: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { state } = useContext(CartContext);
  const { state: authState, dispatch } = useContext(AuthContext);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const redirecDashboard = () => {
    router.push("/dashboard/perfil");
  };

  const redirectLogin = () => {
    if(pathname !== '/home') {
      Cookie.set('redirectUrl', pathname);
    }else {
      Cookie.remove('redirectUrl')
    }
    router.push("/auth/login");
  };

  const redirectregister = () => {
    router.push('/auth/register')
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    router.push('/home')
  }

  return (
    <ClientOnly>
    <div className="relative">
      <UserMenuFlex>
        <UserMenuContent onClick={toggleOpen}>
          <div className="hidden md:block">
            <FaUserCircle size={30} />
          </div>
          <AiOutlineMenu />
        </UserMenuContent>
        
        <div
          className="hidden relative md:flex justify-center items-center text-sm font-semibold py-3 px-4 gap-2 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={onOpen}
        >
          <FaCartShopping size={20} className="z-20"/>
          <span className="absolute bottom-7 right-1 rounded-full bg-red-500 block px-2 z-10 text-white">{state.cart.length}</span>
        </div>
      </UserMenuFlex>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[170%] bg-white overflow-hidden right-0 top-12 text-normal font-semibold">
          <div className="flex flex-col cursor-pointer divide-y divide-gray-200">
            {authState.isAuthenticated ? (
              <>
                <MenuItem onClick={redirecDashboard} label="My Dashboard" />
                <Link href={'/dashboard/orders'}>
                  <MenuItem onClick={() => {}} label="My orders" />
                </Link>
                <hr />
                <MenuItem onClick={logout} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={redirectLogin} />
                <MenuItem label="SignIn" onClick={redirectregister} />
              </>
            )}

            <div className="flex flex-col xl:hidden divide-y divide-gray-200">
              <Link href={'/home'}>
                <MenuItem label="home" onClick={() =>{}} />
              </Link>
              <Link href={'/about'}>
                <MenuItem label="About" onClick={() =>{}} />
              </Link>
              <Link href={'/products'}>
                <MenuItem label="Products" onClick={() =>{}} />
              </Link>
            </div>
            <Link className="flex justify-start items-center text-lg md:hidden p-3 gap-1" href={'/cart'}>
              <p>Cart</p>
              <FaCartShopping size={16} />
              <span className="bg-red-400 rounded-full w-7 h-7 text-center text-white font-semibold">
                {state.cart.length}
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
    </ClientOnly>
  );
};
