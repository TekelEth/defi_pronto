import React from "react";
import { assets } from "../../../../utils/assets";
import NoContent from "./NoContent";

const AssetDetails = ({ name, amount, symbol, first }) => (
  <div className="flex flex-col items-start">
    <span className="text-[#E74141] capitalize font-monument mb-1 text-[12px] leading-[14.4px]">
      {name}
    </span>
    {first ? (
      <span className="text-white text-[20px] leading-[24px] font-monument">
        {symbol}{amount}
      </span>
    ) : (
      <span className="text-white text-[20px] leading-[24px] font-monument">
        {amount}{symbol}
      </span>
    )}
  </div>
);

const EachAsset = ({
  img,
  asset_name,
  staked_amount,
  earnings,
  apy_rate,
  token_price,
  token_symbol,
}) => {
  return (
    <div className="w-full bg-[#2F282E] flex py-6 px-12 hover:shadow-shadow-card rounded-[20px] items-center mb-4 justify-between">
      <div className="flex  w-[80px] h-[80px]">
        <img src={img} alt="assets" className="object-cover rounded-full" />
      </div>
      <span className="font-monument text-white  w-[179px] text-left  font-[400] leading-[24px]  text-[20px]">
        {asset_name}{" "}
      </span>
      <AssetDetails
        name="Amount Staked"
        amount={staked_amount}
        symbol={token_symbol}
      />
      <AssetDetails name="Earned Tokens" amount={earnings} symbol="DFP" />
      <AssetDetails name="Apy Rate" amount={apy_rate} symbol="%" />
      <AssetDetails name="Token Price" amount={token_price} symbol="$" first />
    </div>
  );
};

function Assets() {
  return (
    <div className="w-full flex flex-col">
        {
            assets && assets.length > 0 ?
            assets.map((asset, index) => (
                <EachAsset
                  key={index}
                  earnings={asset.earning}
                  staked_amount={asset.staked_amount}
                  img={asset.img}
                  asset_name={asset.asset_name}
                  token_price={asset.token_price}
                  token_symbol={asset.token_symbol}
                  apy_rate={asset.apy_rate}
                />
              )) : (<NoContent message="No Assets Found" />)
            
        }
    </div>
  );
}

export default Assets;
