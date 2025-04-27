import TitlesGroup from "../molecules/TitlesGroup";
import User from "../molecules/UserGroup";
import UserImage from "@/public/jpeg/user.jpg";
import { Home, Clipboard, Calendar, Layers2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavbarProps {
  className?: string;
  openMenu: (isOpenMenu: boolean) => void;
  isOpenMenu: boolean;
}

const Navbar = ({ className, openMenu, isOpenMenu, ...props }: NavbarProps) => {
  const router = useRouter();

  return (
    <section
      className={`flex justify-between items-center  ${className}`}
      {...props}
    >
      <User
        profilePicture={UserImage.src}
        name="David Torres"
        onClick={() => {
          openMenu(!isOpenMenu);
        }}
      />
      <nav className={`flex items-center justify-between `}>
        <ul className="flex space-x-8">
          <li>
            <TitlesGroup
              icon={Home}
              text="Dashboard"
              className="hover:text-blue-500"
              onClick={() => router.push("/dashboard")}
            />
          </li>
          <li>
            <TitlesGroup
              icon={Clipboard}
              text="Requests"
              className="hover:text-blue-500"
              onClick={() => router.push("/table")}
            />
          </li>
          <li>
            <TitlesGroup
              icon={Calendar}
              text="Calendar"
              className="hover:text-blue-500"
            />
          </li>
          <li>
            <TitlesGroup
              icon={Layers2}
              text="Events"
              className="hover:text-blue-500"
            />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
