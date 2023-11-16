import ButtonWrapper from "@/components/headless/ButtonHeadless";

const title = (active: 0 | 1) => (active ? "자동 매매 정지" : "자동 매매 실행");

export const AutoButton = ({
  active,
  event,
}: {
  active: 1 | 0;
  event: () => void;
}) => {
  return (
    <ButtonWrapper title={title(active)} event={event}>
      <ButtonWrapper.Body>
        <div
          className={` p-1 text-white rounded-md font-bold cursor-pointer w-full ${
            active ? "bg-blueSecondary" : "bg-red-500"
          }`}
        >
          <ButtonWrapper.Label />
        </div>
      </ButtonWrapper.Body>
    </ButtonWrapper>
  );
};
