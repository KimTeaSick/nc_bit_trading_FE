import { FC } from "react";
import { Spinner } from "./Loading.styled";

const Loading: FC = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
