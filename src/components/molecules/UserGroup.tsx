import Image from "next/image";
import Typography from "../atoms/Typography";

interface UserProps {
  profilePicture: string;
  name: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const User = ({
  profilePicture,
  name,
  width = 30,
  height = 30,
  className,
  onClick,
}: UserProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 hover:bg-sky-100 p-2 rounded-md transition cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`rounded-full overflow-hidden ${className}`}
        style={{ width, height, minWidth: width, minHeight: height }}
      >
        <Image
          className="object-cover w-full h-full"
          alt="profile picture"
          src={profilePicture}
          width={width}
          height={height}
        />
      </div>
      <div className="w-full">
        <Typography variant="p" className="font-semibold hover:">
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default User;
