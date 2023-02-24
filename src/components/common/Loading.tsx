import { FC } from "react";
import { LoadingPageWrapper, Spinner } from "./Loading.styled";

const Loading: FC = () => {
  return (
    <LoadingPageWrapper>
      <Spinner />
    </LoadingPageWrapper>
  );
};

export default Loading;
