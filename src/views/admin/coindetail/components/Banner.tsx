import nft1 from "assets/img/nfts/NftBanner1.png";

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1})` }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[80%]">
          더욱 빠르고 편리한 비트코인 자동매매 시스템
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[50%]">
          비트코인 자동매매 시스템은 투자 전략을 설정하고, 해당 전략에 따라 자동으로 비트코인 매매를 수행하는 시스템입니다 <br/> 모바일 비트코인 거래 챔피언으로 제때에 투자하세요 !
        </p>

        
      </div>
    </div>
  );
};

export default Banner1;
