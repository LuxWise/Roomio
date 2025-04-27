import User from "../atoms/User";
import Navbar from "../molecules/Navbar";

interface HeaderProps {
  style?: React.CSSProperties;
}

const Header = ({ style }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between" style={style}>
      <User
        profilePicture="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Carlos Aguirre"
      />
      <Navbar />
    </div>
  );
};

export default Header;
