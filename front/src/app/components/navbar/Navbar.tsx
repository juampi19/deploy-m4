"use client";

import styled from "styled-components";
import { Container } from "../container/Container";
import { Categories } from "../categories/Categories";
import { Logo } from "./Logo";
import { SearchInput } from "../inputs/SearchInput";
import { UserMenu } from "./UserMenu";
import { useCallback, useState } from 'react';

import { NavbarLink } from "./NavbarLink";
import { CartModal } from "../modal/CartModal";
import { useRouter } from "next/navigation";

const NavbarStyled = styled.nav`
  position: sticky;
  width: 100%;
  color: #fff;
  z-index: 10;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
`;

const BorderNav = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #e1e1e1;
`;


export const Navbar = () => {

  const [isOpenReg, setIsOpenReg] = useState(false);
  const router = useRouter()

  const handleClose = useCallback(() => {
    setIsOpenReg(!isOpenReg);
    
  }, [isOpenReg]);

  const goCheck = () => {
    router.push('/cart');
    setIsOpenReg(false);
  }

  return (
    <>
      <NavbarStyled>
        <BorderNav>

          <Container>
            <div className="flex flex-row items-center justify-between gap-3 text-slate-900 md:gap-0">
              {/*Content*/}
              <Logo />
              <NavbarLink />
              <div className="flex lg:hidden">

                  <SearchInput />
                </div>
              <div className="flex lg:justify-between items-center gap-2">
                <div className="hidden lg:flex">

                  <SearchInput />
                </div>
                <UserMenu 
                  onOpen={handleClose}
                />
              </div>
            </div>
          </Container>

        </BorderNav>

        <Categories />
      </NavbarStyled>
      <CartModal 
        isOpen={isOpenReg}
        onClose={handleClose}
        goCheck={goCheck}
      />
    </>
  );
};
