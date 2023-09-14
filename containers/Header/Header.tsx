import "./Header.module.scss"
import { useAppStateContext } from "../../context/contextProvider"

const Header = () => {
  //@ts-ignore
  const { setLoginModalActive } = useAppStateContext()

  return (
    <div className="relative mt-20 lg:px-4" id="header">
      <div className="absolute top-0 left-0 w-full z-10 lg:px-4 xl:h-40-rem lg:h-30-rem h-25-rem">
        <div
          className="w-full h-full xl:rounded"
          style={{
            backgroundColor: "rgb(0, 0, 0, .4)",
          }}
        />
      </div>
      <div className="relative">
        <div className="absolute bg-white rounded-tr-full rounded-br-full w-10 h-60 z-10 top-0 bottom-0 -left-2 m-auto md800:block hidden" />
        <div className="absolute bg-white rounded-tl-full rounded-bl-full w-10 h-60 z-10 top-0 bottom-0 -right-2 m-auto md800:block hidden" />
        <img
          src="./bgSample1.jpg"
          alt="background"
          className="object-cover rounded shadow w-full md  xl:h-40-rem lg:h-30-rem h-25-rem"
        />
        <div className="absolute sm500:top-1/ 3 top-1/4 w-full text-center z-10 flex flex-col gap-7 items-center">
          <h1 className="text-white font-semibold md:text-5xl text-3xl">
            Insights to Vibration
          </h1>
          <h2 className="text-white font-semibold md:text-3xl text-1xl">
            Unveiling the Future of Predictive Monitoring
          </h2>
          <span className="text-white md:text-xl font-medium md:w-160">
            <span className="text-lightBlue2 cursor-pointer font-semibold">
              Elevate equipment efficiency with EyeVib: <br />
            </span>
            Pioneering vibration insights for proactive maintenance and
            operational excellence.
          </span>
          <button
            className="py-3 px-4 landing-bg rounded text-white font-semibold shadow bg-themeBlue1 hover:scale-95 transition-all duration-300 hover:shadow-logCard"
            onClick={() => {
              setLoginModalActive(true)
            }}
          >
            Enter Dashboard
          </button>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-4 items-center bg-white py-10 xl:relative md:bottom-32 z-10 rounded shadow xl:max-w-6xl">
        <h1 className="md:text-4xl text-3xl font-semibold min-w-fit whitespace-nowrap">
          Why EyeVib
        </h1>
        <p className="text-center md:text-xl font-medium text-xs leading-8 tracking-wider lg:w-5/6 md:px-4 px-2">
          EyeVib revolutionizes maintenance by seamlessly merging AI, IoT, and
          advanced sensors, enabling real-time monitoring and diagnostics. Our
          integrated approach empowers businesses to shift from reactive to
          proactive maintenance strategies, preventing costly downtime and
          enhancing operational efficiency.
        </p>
      </div>
      <div className="relative xl:bottom-52 xl2550:bottom-40">
        <img
          src="/bgSample2.jpg"
          alt="dots background"
          className="w-full object-cover xl:rounded shadow lg:max-h-35-rem xl1400:max-h-35-rem sm750:h-40-rem sm550:h-25-rem sm400:h-30-rem h-35-rem"
        />
        <div className="absolute lg1100:top-60 sm:top-32 top-16 w-full z-10 flex items-center text-white md:px-20 px-10">
          <div className="lg:text-2xl md:text-xl text-center font-medium leading-8 tracking-wider lg1100:max-w-7xl mx-auto">
            <p className="mb-5">
              EyeVib’s predictive maintenance solutions work towards achieving
              productive results from day one with a combination of AI + IoT +
              LTE driven seamless monitoring, advanced sensors, and prescriptive
              diagnostics.
            </p>
            <p>
              We implement state of the art scalable technology to monitor the
              equipment health to eliminate unplanned downtime that costs around
              100 Bn. $ per year on the Global Economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
