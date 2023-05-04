import { Input } from "../common/input";

const V_volume = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>거래 대금</div>
      <div className="flex gap-1 items-center">
        <p>거래 대금이</p>
        <Input width={100} type="number" />
        <p>이상</p>
        <Input width={100} type="number" />
        <p>이하</p>
      </div>
    </div>
  );
};

export default V_volume;
