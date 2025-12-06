import XiconImage from "../../assets/xIcon.png";

// Platform list item component
export default function PlatformListItem({ item, img }) {
  return (
    <li className="flex gap-x-2">
      <img
        src={img ? img : XiconImage}
        className="size-[1.05rem] mt-1 object-contain"
        alt="icon"
      />
      <span className="text-xs md:text-sm lg:text-lg">{item}</span>
    </li>
  );
}
