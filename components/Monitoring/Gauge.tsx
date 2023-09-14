import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import { gaugeMinOptions } from "../../utility/analytics"
import HighChartsExporting from "highcharts/modules/exporting"
import HighChartsData from "highcharts/modules/data"
import HighChartsIndicators from "highcharts/indicators/indicators"
import HighChartsPivotPoints from "highcharts/indicators/pivot-points"
import HighChartsMacD from "highcharts/indicators/macd"
import HighChartsMap from "highcharts/modules/map"
import HighChartsAccessibility from "highcharts/modules/accessibility"
import HighChartsMore from "highcharts/highcharts-more"
import HighChartsExportData from "highcharts/modules/export-data"
import { NULL } from "sass"

if (typeof Highcharts === "object") {
  HighChartsExporting(Highcharts)
  HighChartsIndicators(Highcharts)
  HighChartsPivotPoints(Highcharts)
  HighChartsMacD(Highcharts)
  HighChartsMap(Highcharts)
  HighChartsData(Highcharts)
  HighChartsAccessibility(Highcharts)
  HighChartsMore(Highcharts)
  HighChartsExportData(Highcharts)
}

type Props = {
  name: string
  gaugeData: number
  bands: number[]
  label: string
  unit: string
}

const Gauge = ({ name, gaugeData, bands, label, unit }: Props) => {
  
  return (
    <div
      className="bg-white rounded-lg py-3 px-2 mb-3 "
      style={{ height: "327px" }}
    >
      <div className="default">
        <HighchartsReact
          containerProps={{ style: { height: "300px" } }}
          highcharts={Highcharts}
          options={gaugeMinOptions(gaugeData, bands, label, unit)}
        />
        <div className="text-center relative bottom-8 font-semibold">
          {name}
        </div>
      </div>
    </div>
  )
}

export default Gauge
