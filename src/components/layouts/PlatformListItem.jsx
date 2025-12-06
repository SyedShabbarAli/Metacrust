import Xicon from "../../assets/xicon.png";

export default function PlatformListItem({ item, img }) {
  return (
    <li className="flex gap-x-2  ">
      {" "}
      <img
        src={img ? img : Xicon}
        className="size-[1.05rem] mt-1 object-contain"
      />{" "}
      <span className="text-xs md:text-sm lg:text-lg">{item}</span>
    </li>
  );
}
