import { RingProgress, Text } from "@mantine/core"
import MovingIcon from "@mui/icons-material/Moving"

type Props = {
  title: string
  value: number
  percent: number
  forecast?: boolean
  color: string
}

const AlarmCard = ({
  title,
  value,
  percent,
  forecast = false,
  color,
}: Props) => {
  return (
    <div className={`rounded-2xl shadow border landing-bg`}>
      <div
        className="bg-white py-4 pl-4 relative top-10 transition-all rounded-2xl shadow mx-4 flex justify-between"
        style={{ borderBottom: "6px solid #E8EAFB" }}
      >
        <div className="block w-4/5">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">{title}</p>
            <div className="w-9 h-9 relative left-8">
              <RingProgress
                size={42.5}
                thickness={4}
                sections={[{ value: percent, color }]}
                label={
                  <Text color={color} weight={700} align="center" size={9.5}>
                    {percent}
                  </Text>
                }
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className={`font-semibold text-6xl`} style={{ color }}>
              {forecast ? <MovingIcon className="text-[41px]" /> : value}
            </p>
            <div className="relative top-2">
              <span
                className={`relative left-6
                bg-opacity-25 px-2 py-1 rounded-md text-center bg-[${color}]`}
                style={{ backgroundColor: `rgb()`, color }}
              >
                {forecast ? "+ 10 features" : `${percent}%`}
              </span>
            </div>
          </div>
        </div>
        {/* Side card design  */}
        <span
          className={`w-4 h-20 my-auto rounded-l-full shadow-cardCut`}
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default AlarmCard
