type Props = { x1?: number; x2?: number; y1?: number; y2?: number };

export const Line = ({ x1, x2, y1, y2 }: Props) => {
  return (
    <line x1={x1} x2={x2} y1={y1} y2={y2} stroke="#000" stroke-width={2} />
  );
};
