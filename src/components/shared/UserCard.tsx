import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Models } from "appwrite";

type UserPropType = {
  user: Models.Document;
};

export default function UserCard({ user }: UserPropType) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-800 w-40 h-40 py-4 bg-dark-2">
      <Link
        to={`/profile/${user.$id}`}
        className="flex flex-col items-center justify-center"
      >
        <div className="w-10 h-10 ">
          <img src={user.imageUrl} className="h-13 w-13 rounded-full" />
        </div>

        <p className="small-medium mt-2 ">{user.name}</p>
      </Link>

      <Button className="shad-button_primary h-7 ">Follow</Button>
    </div>
  );
}
