import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";

export default function AllUsers() {
  const { toast } = useToast();

  const { data: users, isLoading, isError: isErrorusers } = useGetUsers();

  if (isErrorusers) {
    toast({ title: "Something went wrong." });

    return;
  }
  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full flex gap-1">
          <img src="/assets/icons/people.svg" height={30} width={30} />
          All Users
        </h2>
        {isLoading && !users ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {users?.documents.map((creator) => (
              <li key={creator?.$id} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
