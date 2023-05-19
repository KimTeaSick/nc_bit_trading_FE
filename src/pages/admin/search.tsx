import { FC } from "react";
import SearchPage from "@/components/search/index";
import Admin from "@/layouts/admin";
import dynamic from "next/dynamic";

const Search: FC = () => {
  return (
    <Admin>
      <SearchPage />
    </Admin>
  );
};

export default Search;
