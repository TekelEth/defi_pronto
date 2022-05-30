import CustomLink from "components/CustomLink";
import Button from "components/general/Button";
import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div className="w-full my-12 flex flex-col md:flex-row justify-between">
      <div className="flex items-center mb-12  md:justify-start justify-between">
        <Header heading="my portfolio" />
        <div className="md:hidden flex items-center">
          <CustomLink href={"/"}>
            <Button
              title="Stake"
              variant={"contained"}
              color="primary"
              icon="ri-arrow-right-up-line"
            />
          </CustomLink>
        </div>
      </div>
      <div className="flex md:flex-row space-x-6 items-center">
        <CustomLink href={"/"}>
          <Button
            title="KYC Verification"
            variant={"outlined"}
            color="primary"
            icon="ri-user-3-line"
            order
          />
        </CustomLink>
        <CustomLink href={"/"}>
          <Button
            title="Buy DFP"
            variant={"outlined"}
            color="primary"
            icon="ri-money-dollar-circle-line"
            order
          />
        </CustomLink>
        <div className="hidden md:block items-center">
          <CustomLink href={"/"}>
            <Button
              title="Stake"
              variant={"contained"}
              color="primary"
              icon="ri-arrow-right-up-line"
            />
          </CustomLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
