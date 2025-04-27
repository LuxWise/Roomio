import React, { useState } from "react";
import ModalMenu from "@/components/template/ModalMenu";
import Navbar from "@/components/organisms/Navbar";

interface UserDetailsProps {
  className?: string;
  children?: React.ReactNode;
}
const UserDetails = ({ className, children }: UserDetailsProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      {isOpenMenu && <ModalMenu onClick={() => setIsOpenMenu(false)} />}
      <section className="background_home background_dashboard grid_frame">
        <Navbar
          className="col-start-2 col-end-12 row-start-2 row-end-2"
          openMenu={setIsOpenMenu}
          isOpenMenu={isOpenMenu}
        />
        {children}
      </section>
    </>
  );
};

export default UserDetails;
