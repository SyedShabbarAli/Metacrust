import { NavLink } from "react-router-dom";

export default function Navigation({
  label,
  destination,
  isWindowItem,
  useIsActive,
  img,
}) {
  return (
    <>
      <p>
        <NavLink
          className={({ isActive }) => {
            return useIsActive && isActive
              ? "animate-pulse text-cyan-600 flex"
              : "flex hover:text-cyan-500 hover:scale-105 transition-transform ";
          }}
          to={destination}
          end
        >
          {img && (
            <img
              src={img}
              alt={`${img}`}
              className="size-[1rem] mt-[0.15rem] mr-2"
            />
          )}

          <span className="font-titillium font-semibold transition-colors text-sm md:text-base">
            {label}
          </span>
        </NavLink>
      </p>
      {isWindowItem && (
        <hr className="border-t-2 rounded-full border-slate-200 -mt-4 w-44 shadow-2xl" />
      )}
    </>
  );
}
