import { useQuery } from "@tanstack/react-query";
import { get, post } from ".";

export const useMemberList = () => {
  const queryKey = "member/getMemberList";
  const queryFn = async () =>
    await get(queryKey).then((res) => {
      return res;
    });
  const request = useQuery([queryKey], queryFn);
  return request;
};

export const controlTrading = async (body: { id: number; status: 0 | 1 }) => {
  body.status === 1 ? (body.status = 0) : (body.status = 1);
  const res = await post("member/controlTrading", body);
  return res;
};
