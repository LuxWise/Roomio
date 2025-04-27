import Icon from "../atoms/Icon";
import { Home, Clipboard, Calendar, Layers2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex space-x-8">
        <li>
          <Icon Icon={Home} text="Dashboard" onClick={() => {}} />
        </li>
        <li>
          <Icon Icon={Clipboard} text="Request" onClick={() => {}} />
        </li>
        <li>
          <Icon Icon={Calendar} text="Calendar" onClick={() => {}} />
        </li>
        <li>
          <Icon Icon={Layers2} text="Review" onClick={() => {}} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
