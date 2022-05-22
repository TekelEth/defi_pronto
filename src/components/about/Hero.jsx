import CustomLink from 'components/customLink'
import Button from 'components/general/Button'
import React from 'react'

function Hero() {
  return (
    <div className="w-full flex-col  flex md:flex-row items-center text-transparent text-opacity">
    <div className="md:w-[50%] w-full flex flex-col col-span-2 justify-start py-8">
      <h1 className="font-monument font-normal text-[31px] lg:text-5xl text-white leading-[37px] lg:leading-[73px]">
        Decentralized tokens built on the{" "}
        <span className="text-theme-main">cardano network</span>
      </h1>
      <p className="lg:w-[542px] w-full  mt-3 text-left  text-theme-100 text-base font-DMSans leading-[24px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
        imperdiet nibh at et neque. Sed adipiscing risus aenean neque
        imperdiet amet fermentum.
      </p>
      <div className="mt-6 flex items-center space-x-10">
        <CustomLink href={"/"}>
          
            <Button
              title="Buy DFP"
              variant={"outlined"}
              color="primary"
              icon="ri-money-dollar-circle-line"
              order
            />
         
        </CustomLink>
        <CustomLink href={"/"}>
          <Button
            variant="outlined"
            color="plain"
            title={"White papper"}
            icon={"ri-file-text-line"}
            order
          />
        </CustomLink>
      </div>
    </div>
    <div className="w-[40%] flex items-center justify-start">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/backgrounds/Looper-3.png"
        className="w-full bg-cover bg-center"
      />
    </div>
  </div>
  )
}

export default Hero