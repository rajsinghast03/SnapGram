import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchedPostFetching: boolean;
  searchedPosts: Models.Document[];
};

export default function SearchResults({
  isSearchedPostFetching,
  searchedPosts,
}: SearchResultsProps) {
  if (isSearchedPostFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">
      No search results found!
    </p>
  );
}
