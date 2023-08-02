import nft1 from "@/assets/img/nfts/NftBanner1.png";

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1.src})` }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[80%]">
          수익은 극대화하고 손실은 최소화하는 4계절 자동매매 시스템
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[50%]">
          4계절 투자 시스템은 투자비법인 &quot;4계절 등산이론&quot;에 따라
          투자전략을 설정하고, 해당 전략에 따라 자동으로 암호화폐 매매를
          <br /> 수행하는 시스템입니다. 가장 최적의 시기를 찾아서 투자해 주고
          최상의 수익을 돌려 드립니다.
        </p>
      </div>
    </div>
  );
};

export default Banner1;
