import { FC } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  title?: string;
  disable?: boolean;
  event: () => any;
  loading?: boolean;
}

const spin = keyframes`
from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  border-radius: 50%;
  border: 3px solid #e0e0e0;
  border-bottom: 5px solid #f54329;
  animation: ${spin} 1s linear infinite;
  position: relative;
`;

const SearchButton: FC<Props> = ({ event, title, disable, loading }) => {
  return (
    <button
      disabled={disable ? disable : false}
      className={`rounded-lg flex h-14 text-base
      ${disable ? "bg-gray-400" : "bg-blueSecondary"} 
      w-full p-1 text-center font-bold text-white cursor-pointer items-center justify-center`}
      onClick={event}
    >
      <div>{title ? title : "결과 보기"}</div>
      {loading ? <Spinner /> : null}
    </button>
  );
};

export { SearchButton };
