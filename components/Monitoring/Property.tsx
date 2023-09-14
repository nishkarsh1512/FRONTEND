type Props = {
  name: string;
  percentage: string;
  colorDark: string;
  colorLightClass: string;
  paddingBottom: boolean;
};

const Property = ({
  name,
  colorDark,
  colorLightClass,
  paddingBottom,
  percentage,
}: Props) => (
  <div style={{ paddingBottom: paddingBottom ? "12%" : "7%" }}>
    <div className="flex justify-between items-center pb-2 w-full">
      <span className="font-semibold">{name}</span>
      <span className="text-gray-400 font-semibold">{percentage}%</span>
    </div>
    <div
      className={`progress rounded-sm h-5 ${colorLightClass} overflow-visible`}
    >
      <div
        // className="progress-bar"
        // role="progressbar"
        style={{
          width: `${percentage}%`,
          height: "100%",
          backgroundColor: colorDark,
        }}
        // aria-valuenow="25"
        // aria-valuemin="0"
        // aria-valuemax="100"
      />
    </div>
  </div>
);

export default Property;
