import { MemberType } from "@/@types/Member";
import { MemberCard } from "./component/MemberCard";

type Props = {
  memberList: MemberType[];
};
const TITLE_CLASS = "ml-1 text-2xl font-bold text-navy-700 dark:text-white";
export const MemberComponent = ({ memberList }: Props) => {
  console.log(memberList);

  return (
    <div>
      <div className={TITLE_CLASS}>회원관리 페이지</div>
      <div className="flex gap-2 p-2 flex-wrap justify-center items-center bg-white">
        {memberList.map((member, index) => (
          <MemberCard {...member} key={index} />
        ))}
      </div>
    </div>
  );
};
