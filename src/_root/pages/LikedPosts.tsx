import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

export default function LikedPosts() {
  const { data: currentUser, isLoading } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  return (
    <>
      {currentUser.liked.length === 0 && <p>No liked post!</p>}
      <GridPostList posts={currentUser.liked} showStats={false} />
    </>
  );
}
