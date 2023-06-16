import { FC } from "react";
import { Spinner } from "./Loading.styled";

const Loading: FC = () => {
  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 bg-opacity-100 flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
