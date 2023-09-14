import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import HighChartsExporting from "highcharts/modules/exporting"
import HighChartsData from "highcharts/modules/data"
import HighChartsIndicators from "highcharts/indicators/indicators"
import HighChartsPivotPoints from "highcharts/indicators/pivot-points"
import HighChartsMacD from "highcharts/indicators/macd"
import HighChartsMaP from "highcharts/modules/map"
import HighChartsAccessibility from "highcharts/modules/accessibility"
import HighChartsExportData from "highcharts/modules/export-data"
import HighChartsMore from "highcharts/highcharts-more"
import Property from "./Property"
import { useState, useEffect } from "react"

if (typeof Highcharts === "object") {
  HighChartsExporting(Highcharts)
  HighChartsIndicators(Highcharts)
  HighChartsPivotPoints(Highcharts)
  HighChartsMacD(Highcharts)
  HighChartsMaP(Highcharts)
  HighChartsData(Highcharts)
  HighChartsAccessibility(Highcharts)
  HighChartsExportData(Highcharts)
  HighChartsMore(Highcharts)
}

const InstantaneousParameters: React.FC<{ data: any[] }> = (props) => {
  let h1 = { ...props.data[0].name[0] }

  const [operational, setOperational] = useState<string>("0")
  const [caution, setCaution] = useState<string>("0")
  const [warning, setWarning] = useState<string>("0")
  const [disconnected, setDisconnected] = useState<string>("0")

  useEffect(() => {
    if (props.data[0].name[0]) {
      const fakeArray = [...h1["summary"]]
      const operationalAsString = "" + fakeArray[0].operational
      setOperational(operationalAsString)
      const cautionAsString = "" + fakeArray[0].caution
      setCaution(cautionAsString)
      const warningAsString = "" + fakeArray[0].warning
      setWarning(warningAsString)
      const disconnectedVarr = 100 - fakeArray[0].operational
      const disconnectedAsString = "" + disconnectedVarr
      setDisconnected(disconnectedAsString)

      console.log("hhhhhhhhhhhhhhhhhh")
      console.log("hhhhhhhhhhhhhhhhhh")
      console.log("hhhhhhhhhhhhhhhhhh")
      console.log("hhhhhhhhhhhhhhhhhh")
      console.log("hhhhhhhhhhhhhhhhhh")

      console.log(h1["summary"])
      console.log(fakeArray[0].warning)
      console.log("hhhhhhhhhhhhhhhhhh")

      console.log("hhhhhhhhhhhhhhhhhh")
      console.log("hhhhhhhhhhhhhhhhhh")
      console.log("hhhhhhhhhhhhhhhhhh")
    }
  }, [props.data])

  ////////////////////OPTIONS
  const maintenanceOptions = () => ({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    credits: {
      enabled: false,
    },
    title: {
      text:
        '<div class="font-semibold relative right-10">Maintenance Index</div>',
      align: "left",
      margin: -10,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Operational",
            y: Number(operational),
            color: "#31E802",
          },
          {
            name: "Caution",
            y: Number(caution),
            color: "#ffc107",
          },
          {
            name: "Warning",
            y: Number(warning),
            color: "#FF0022",
          },
          {
            name: "Disconnected",
            y: 100 - Number(operational),
            color: "#9e9e9e",
          },
        ],
      },
    ],
  })

  ////////////////////

  return (
    <div className="bg-white rounded-lg pt-3 pb-3 px-4 overflow-hidden grid grid-cols-2 h-[65%]">
      <div className="col-span-2 block">
        <div className="default">
          <HighchartsReact
            containerProps={{ style: { height: "350px" } }}
            highcharts={Highcharts}
            options={maintenanceOptions()}
          />
        </div>
      </div>
      <div className="col-span-2">
        <div className="px-3 pt-3">
          <Property
            name="Operational"
            percentage={operational}
            colorDark="#31E802"
            colorLightClass="bg-infoCardLightGreen"
            paddingBottom={true}
          />
          <Property
            name="Caution"
            percentage={caution}
            colorDark="#ffc107"
            colorLightClass="bg-yellow-100"
            paddingBottom={true}
          />
          <Property
            name="Warning"
            percentage={warning}
            colorDark="#FF0022"
            colorLightClass="bg-infoCardLightRed"
            paddingBottom={true}
          />
          <Property
            name="Disconnected"
            percentage={disconnected}
            colorDark="#9e9e9e"
            colorLightClass="bg-gray-200"
            paddingBottom={false}
          />
        </div>
      </div>
    </div>
  )
}

export default InstantaneousParameters
