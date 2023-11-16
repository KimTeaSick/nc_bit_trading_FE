import Admin from "@/layouts/admin";
import { MemberComponent } from "@/views/admin/member";
import { useMemberList } from "../api/member";
import Loading from "@/components/common/Loading";

const Member = () => {
  const memberList = useMemberList();
  console.log(memberList);

  return (
    <Admin>
      {memberList.status === "success" ? (
        <MemberComponent memberList={memberList.data} />
      ) : (
        <Loading />
      )}
    </Admin>
  );
};

export default Member;
