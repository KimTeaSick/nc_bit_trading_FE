import { FC } from "react";
import { Spinner } from "./Loading.styled";

const Loading: FC = () => {
  return (
    <div className="bg-opacity-100 flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
