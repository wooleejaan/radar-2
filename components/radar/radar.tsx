"use client";

import React, { useEffect } from "react";
import { drawRadarChart } from "./radar.utils";
// import * as d3 from "d3";

interface DataPoint {
  axis: string;
  value: number;
  order: number;
}

interface MyRadarChartProps {
  data: DataPoint[];
  defaultData: DataPoint[];
}

const MyRadarChart: React.FC<MyRadarChartProps> = ({ data, defaultData }) => {
  useEffect(() => {
    drawRadarChart(
      "#chart",
      "chart-line",
      "chart-axis",
      "chart-legend",
      "radar-chart-series-0",
      false,
      data,
      "#B467F3"
    );
  }, [data]);

  useEffect(() => {
    drawRadarChart(
      "#default-chart",
      "default-chart-line",
      "default-chart-axis",
      "default-chart-legend",
      "default-radar-chart-series-0",
      true,
      defaultData,
      "#B8B8B8"
    );
  }, [defaultData]);

  return (
    <div style={{ width: "100%", display: "block", position: "relative" }}>
      <div id="chart" style={{ float: "left", position: "absolute" }}></div>
      <div id="default-chart" style={{ float: "left" }}></div>
    </div>
  );
};

export default MyRadarChart;
