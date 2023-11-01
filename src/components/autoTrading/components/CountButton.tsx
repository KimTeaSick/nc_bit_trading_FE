export const CountButton = ({
  unit,
  event,
}: {
  unit: string;
  event: (unit: number, percent: number) => number;
}) => {
  const count = [
    { key: "10%", value: 10 },
    { key: "25%", value: 4 },
    { key: "50%", value: 2 },
    { key: "100%", value: 1 },
  ];

  return (
    <div className="flex gep-2 justify-between">
      {count.map((value, index) => (
        <div
          className="rounded-sm w-[23%] p-2 flex justify-center border-2 cursor-pointer"
          onClick={() => event(~~unit, value.value)}
          key={index}
        >
          {value.key}
        </div>
      ))}
    </div>
  );
};
