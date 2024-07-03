import React from 'react';

const Hero = () => {
  return (
    <div className=" bg-transparent container  flex flex-col gap-5 justify-center items-center lg:mt-10 max-w-[777px] ">
      <h1 className=" text-white font-normal text-[45px] lg:text-[68px] text-center tracking-tight leading-10 lg:leading-[78px]">
        Easy send and Request Crypto
      </h1>
      <p className=" max-w-[80%] text-white text-base lg:text-xl text-center">
        Bring blockchain to the people. Solana supports experiences for power
        users, new consumers, and everyone in between.
      </p>
    </div>
  );
};

export default Hero;
