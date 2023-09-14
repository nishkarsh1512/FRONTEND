import { Tooltip } from "@mui/material";

export const NavButton = ({
  title,
  customFunc,
  icon,
  color,
}: {
  title: string;
  customFunc: any;
  icon: any;
  color: string;
}) => (
  <Tooltip title={title} arrow placement="bottom">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="text-xl rounded-full p-3 mx-1 bg-lightBlue bg-opacity-10 hover:scale-95 transition-all"
    >
      {icon}
    </button>
  </Tooltip>
);
