import { ResponsiveBar } from '@nivo/bar'
import styled from "styled-components";
import { useCallback } from "react";
import { PurchaseFrequencyData } from "@/types";

const ChartContainer = styled.div`
    width: 100%;
    height: 400px;
`;

type BarChartData = PurchaseFrequencyData & { color: string };

interface BarChartProps {
  data: PurchaseFrequencyData[];
}

const colorPalette = [
  '#f47560', '#e8c1a0', '#f1e15b', '#e8a838', '#61cdbb', '#97e3d5', '#ff9d9d', '#c2c2f0'
];

export const BarChart = ({ data }: BarChartProps) => {

  const dataWithColor = useCallback((): BarChartData[] => {
    return data.map((value, index) => {
      const randomColor = colorPalette[index % colorPalette.length];
      return {
        ...value, color: randomColor,
      }
    })
  }, [data]);

  return (
    <ChartContainer>
      <ResponsiveBar
        data={dataWithColor()}
        keys={['count']}
        indexBy="range"
        margin={{ top: 20, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        layout="vertical"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={({ data }) => data.color}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: '가격',
          legendPosition: 'start',
          tickRotation: 15,
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '구매수',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={20}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        tooltip={({ indexValue }) => (
          <div style={{ padding: '4px', background: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '4px' }}>
            <strong>{indexValue}</strong>
          </div>
        )}
      />
    </ChartContainer>
  )
}
