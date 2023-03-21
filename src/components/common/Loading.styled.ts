import styled, { keyframes } from "styled-components";

export const LoadingPageWrapper = styled.div`
  display: flex;
  width: inherit;
  height: 100%;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
`;

const spin = keyframes`
from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #e0e0e0;
  border-bottom: 5px solid #f54329;
  animation: ${spin} 1s linear infinite;
  position: relative;
`;
