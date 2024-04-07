import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Models } from "appwrite";

type UserPropType = {
  user: Models.Document;
};

export default function UserCard({ user }: UserPropType) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-gray-800 w-[190px] h-[190px] py-4 bg-dark-2 rounded-[20px]">
      <Link
        to={`/profile/${user.$id}`}
        className="flex flex-col items-center justify-center"
      >
        <img src={user.imageUrl} className="h-[54px] w-[54px] rounded-full" />

        <p className="small-medium mt-2 ">{user.name}</p>
      </Link>

      <Button className="shad-button_primary h-8 ">Follow</Button>
    </div>
  );
}
