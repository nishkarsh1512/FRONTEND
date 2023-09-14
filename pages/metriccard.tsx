import React from "react"
import { Icon, Paper } from "@mui/material"
import {
  TrendingUp,
  TrendingDown,
  TrendingFlat,
  AttachMoney,
  ShoppingCart,
  MonetizationOn,
} from "@mui/icons-material"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

interface MetricCardProps {
  title: string
  value: number
  unit: string
  color: string
  trend?: "up" | "down" | "flat"
  icon?: "sales" | "revenue" | "profit"
  et: number
  knn: number
  best: number
  rf: number
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  color,
  trend,
  icon,
  et,
  knn,
  best,
  rf,
}) => {
  const cardStyle: React.CSSProperties = {
    width: "300px",
    height: "300px",
    borderRadius: "20px",
    padding: "15px",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    backgroundColor: color,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ccc", // Adding border
  }

  const trendStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    marginLeft: "5px",
    color:
      trend === "up" ? "#00bfa5" : trend === "down" ? "#f44336" : "#ffc107",
  }

  const getMetricIcon = () => {
    switch (icon) {
      case "sales":
        return <ShoppingCart style={{ fontSize: "3rem", color: "white" }} />
      case "revenue":
        return <AttachMoney style={{ fontSize: "3rem", color: "white" }} />
      case "profit":
        return <MonetizationOn style={{ fontSize: "3rem", color: "white" }} />
      default:
        return null
    }
  }

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const card = e.currentTarget
    card.style.transform = "rotate(2deg)"
  }

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const card = e.currentTarget
    card.style.transform = "rotate(0deg)"
  }

  //////////////////////
  ////////////////////////
  const options1: Highcharts.Options = {
    chart: {
      type: "column",
      height: 220,
      width: 300,
    },
    title: {
      text: "Metrics",
    },
    xAxis: {
      categories: ["et", "knn", "best", "rf"],
      labels: {
        // Configure x-axis labels
        rotation: 0, // Set rotation to 0 degrees
        style: {
          fontSize: "12px", // Adjust font size as needed
        },
      },
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        type: "bar", // Specify the series type as 'bar'
        name: "Data",
        data: [et, knn, best, rf],
      },
    ],
  }
  ////////////////////////
  ///////////////////////

  return (
    <Paper
      elevation={3}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {icon && getMetricIcon()}
        <div>
          <h2 style={{ fontSize: "1.2rem", margin: "0", color: "white" }}>
            {title}
          </h2>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options1} />

        <div style={{ display: "flex", alignItems: "center" }}>
          {trend === "up" && <TrendingUp style={trendStyle} />}
          {trend === "down" && <TrendingDown style={trendStyle} />}
          {trend !== "up" && trend !== "down" && (
            <TrendingFlat style={trendStyle} />
          )}
        </div>
      </div>
    </Paper>
  )
}

export default MetricCard
