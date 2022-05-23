import React from "react";
import dynamic from "next/dynamic";

const Apexchart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Chart({ seed, strategic, pre_sale, liquidity, dao }) {
  const Label = ({ color, label, value }) => (
    <div className="flex items-center mb-3 mb-mb-0 mr-6">
      <div className={`p-2 rounded-full mr-2 ${color} `}></div>
      <span className="font-[400] font-monument text-[15px] md:text-[19px] text-white leading-[18px] md:leading-[22px] text-left md:text-center">
        {label} - {`${value}%`}
      </span>
    </div>
  );
  const customSettings = {
    chartOptions: {
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: "0",
            size: "10%",
            dropShadow: {
              enabled: false,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },

          track: {
            background: "#2F282E",
            strokeWidth: "100%",
            borderRadius: "10px",
            margin: "18px", // margin is in pixels,
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: 20,
              show: true,
              color: "#333",
              fontSize: "14px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#DDD",
              fontSize: "30px",
              show: true,
              offsetY: -15,
            },
          },
        },
      },
      labels: ["Seed Round", "Strategic Round", "Pre-Sale", "Liquidity", "DAO"],
      fill: {
        type: "solid",
        colors: ["#A701AA", "#0163AA", "#E5B91C", "#E74141", "#4BAA01"],
      },
      stroke: {
        lineCap: "round",
      },
    },
  };
  return (
    <div className="-mt-5">
      <div className="h-[400px] md:h-[550px]">
        <Apexchart
          options={customSettings.chartOptions}
          series={[seed, strategic, pre_sale, liquidity, dao]}
          type="radialBar"
          height="100%"
        />
      </div>
      <div className="md:w-[90%] w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center">
        <Label color="bg-[#A701AA]" label="Seed Round" value={seed} />
        <Label color="bg-[#0163AA]" label="Strategic Round" value={strategic} />
        <Label color="bg-[#eec019]" label="Pre-Sale" value={pre_sale} />
      </div>
      <div className="md:w-[80%] w-full items-start md:items-center justify-start  md:justify-center md:mt-4 mx-auto flex flex-col md:flex-row">
        <Label color="bg-[#E74141]" label="Liquidity" value={liquidity} />
        <Label color="bg-[#4BAA01]" label="DAO" value={dao} />
      </div>
    </div>
  );
}

export default Chart;
