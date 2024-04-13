import {
  useGetCurrentUser,
  useGetUsers,
} from "@/lib/react-query/queriesAndMutations";
import UserCard from "./UserCard";
import Loader from "./Loader";
import { Models } from "appwrite";

export default function RightSideBar() {
  const {
    data: users,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(7);
  const { data: currentUser } = useGetCurrentUser();
  if (isErrorCreators) throw Error("Error while fetching some creators");

  const filteredUsers = users?.documents.filter(
    (user) => user.$id !== currentUser?.$id
  );

  return (
    <>
      <nav className="rightsidebar">
        <h3 className="md:h3-bold ">Top Creators</h3>
        {isUserLoading && !users ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 ">
            {filteredUsers?.map((user: Models.Document) => (
              <UserCard key={user.$id} user={user} />
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
