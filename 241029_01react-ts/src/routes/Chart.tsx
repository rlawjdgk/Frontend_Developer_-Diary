import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

const Container = styled.div`
  margin-top: 10px;
`;

interface CoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface Example {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    // refetchInterval: 5000,
  });

  console.log(data);

  return (
    <Container>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          width={600}
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: true,
              },
              background: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
              },
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
            colors: ["#b490ca"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </Container>
  );
};

export default Chart;
