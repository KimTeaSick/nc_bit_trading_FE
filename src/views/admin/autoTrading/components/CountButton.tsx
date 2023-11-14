export const CountButton = ({
  unit,
  event,
  setValue,
}: {
  unit: string;
  event: (unit: number, percent: number) => string;
  setValue: (unit: string) => void;
}) => {
  const count = [
    { key: "10%", value: 0.1 },
    { key: "25%", value: 0.25 },
    { key: "50%", value: 0.5 },
    { key: "100%", value: 1.0 },
  ];
  console.log("unit::", unit);

  return (
    <div className="flex gep-2 justify-between">
      {count.map((value, index) => (
        <div
          className="rounded-sm w-[23%] p-2 flex justify-center border-2 cursor-pointer"
          onClick={() => setValue(event(Number(unit), value.value))}
          key={index}
        >
          {value.key}
        </div>
      ))}
    </div>
  );
};
