import { FC } from "react";
import SearchPage from "@/components/search/next_index";
import Admin from "@/layouts/admin";

const Search: FC = () => {
  return (
    <Admin extract=" w-[200vw] md:!w-full">
      <SearchPage />
    </Admin>
  );
};

export default Search;
