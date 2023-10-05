import { FC } from "react";
import { Spinner } from "./Loading.styled";

const LOADING_WRAPPER = "w-full h-[80vh] flex justify-center items-center";

const Loading: FC = () => {
  return (
    <div className={LOADING_WRAPPER}>
      <Spinner />
    </div>
  );
};

export default Loading;
