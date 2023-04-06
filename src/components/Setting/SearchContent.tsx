import { FC, ReactNode } from "react";

interface SearchContentProps {
  children: ReactNode;
}

const SearchContent: FC<SearchContentProps> = ({ children }) => {
  return <div className="search_content">{children}</div>;
};

export default SearchContent;
