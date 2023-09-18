import { FC } from "react";
import { useRouter } from "next/router";

const Dash_rate_detail: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>rate detail {id}</p>
    </div>
  );
};

export default Dash_rate_detail;
