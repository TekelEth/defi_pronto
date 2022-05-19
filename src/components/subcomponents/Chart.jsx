import React from "react";
import dynamic from "next/dynamic";

const Apexchart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Chart() {
  const customSettings = {
    series: [39, 6, 25, 10, 20],
    options: {
      plotOptions: {
        radialBar: {
          dataLabels: {
            enabled: true,
            name: {
              fontSize: "20px",
            },
            value: {
              fontSize: "20px",
            },
          },
        },
      },
      fill: {
        colors: ["#4BAA01", "#E74141", "#E5B91C", "#0163AA", "#A701AA"],
      },
      labels: ["seed round", "stategic round", "Presale", "liguidity", "DAO"],
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        width: "20px",
        fontSize: '30px',
        color: "#fff",
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
    },
  };
  return (
    <div className="py-24 ">
      <Apexchart
        options={customSettings.options}
        series={customSettings.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
}

export default Chart;
