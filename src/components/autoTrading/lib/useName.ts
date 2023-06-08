import { useState, ChangeEvent, useCallback } from "react";

export const useName = (): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void
] => {
  const [name, setName] = useState("");
  const nameSetter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);
  return [name, nameSetter];
};
