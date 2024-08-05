import { CHARTS_COLORS } from "../utils/constant";

const ColorValue = ({ name, colorIndex }) => {
  return (
    <div className="flex items-center mx-2">
      <h4 className=" pr-1 text-xs">{name}</h4>
      <div className={"h-[10px] w-[10px] border border-black "} style={{ background: CHARTS_COLORS[colorIndex] }} />
    </div>
  );
};

export default ColorValue;
