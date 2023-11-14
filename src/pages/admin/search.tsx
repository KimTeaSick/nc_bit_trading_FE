import { FC } from "react";

import Admin from "@/layouts/admin";
import SearchPage from "@/components/search/next_index";

const Search: FC = () => {
  return (
    <Admin extract=" w-[200vw] md:!w-full">
      <SearchPage />
    </Admin>
  );
};

export default Search;
