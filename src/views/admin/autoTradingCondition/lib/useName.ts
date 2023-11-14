import {
  useState,
  ChangeEvent,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

export const useName = (): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<string>>
] => {
  const [name, setName] = useState("");
  const nameSetter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);
  return [name, nameSetter, setName];
};
