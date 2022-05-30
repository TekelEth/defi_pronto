import React from "react";
import { transactions } from "../../../../utils/transactions";
import NoContent from "./NoContent";

const Detail = ({ keys, value, shift }) => (
  <div
    className={`flex flex-col text-left ${
      shift && "mr-[18%]"
    } items-start justify-self-start self-start`}
  >
    <span className="text-[#E74141] capitalize font-monument mb-1 text-[12px] leading-[14.4px]">
      {keys}
    </span>

    <span className="text-white  text-[14px] md:text-[20px] leading-[16px] md:leading-[24px] font-monument">
      {value}
    </span>
  </div>
);

const Transaction = ({ amount, address, type, status }) => {
  return (
    <div className=" border-b-[1px] md:hidden flex flex-col  border-[#353434] py-6 px-2">
      <div className="flex  mb-6 justify-between">
        <Detail keys="Amount" value={amount} />
        <Detail keys="Address" value={address} />
      </div>
      <div className="flex  text-left justify-between">
        <Detail keys="Type" value={type} />
        <Detail keys="Status" shift value={status} />
      </div>
    </div>
  );
};

function Transactions() {
  return (
    <div>
      <div className="px-6 bg-[#2F282E]  hidden md:block rounded-[20px] py-2">
        <table className="w-full text-center   overflow-x-scroll">
          <thead className="text-[#E74141] font-monument font-[400] border-b-[1px] border-[#353434]  text-[12px] leading-[14.4px]">
            <td>Type</td>
            <td>Amount</td>
            <td>Currency</td>
            <td>Fee</td>
            <td>Address</td>
            <td>Transaction ID</td>
            <td>Status</td>
          </thead>
          <tbody>
            {transactions &&
              transactions.length > 0 &&
              transactions.map((x, i) => (
                <tr key={i}>
                  <td>{x.type}</td>
                  <td>{x.amount}</td>
                  <td>{x.currency}</td>
                  <td>{x.fee}</td>
                  <td>{x.address}</td>
                  <td>{x.tx_id}</td>
                  <td>{x.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {transactions && transactions.length <= 0 && (
          <NoContent message="Transaction" />
        )}
      </div>
      <div className="px-6 bg-[#2F282E] md:hidden  block rounded-[20px] py-2">
        {transactions &&
          transactions.length > 0 &&
          transactions.map((x, i) => (
            <Transaction
              key={i}
              amount={x.amount}
              address={x.address}
              type={x.type}
              status={x.status}
            />
          ))}
      </div>
    </div>
  );
}

export default Transactions;
