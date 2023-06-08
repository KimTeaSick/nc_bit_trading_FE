import { FC } from "react";
import SearchPage from "@/components/search/next_index";
import Admin from "@/layouts/admin";

const Search: FC = () => {
  return (
    <Admin>
      <SearchPage />
    </Admin>
  );
};

export default Search;
