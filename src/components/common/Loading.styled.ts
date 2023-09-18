import styled, { keyframes } from "styled-components";

const spin = keyframes`
from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #422afb;
  border-bottom: 5px solid #422afb;
  animation: ${spin} 1s linear infinite;
  position: relative;
`;
