import shieldImg from "../../assets/shield.gif";
export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[21rem] md:h-[28rem]">
      <img src={shieldImg} className="object-contain w-32 md:w-36  " />
      <h2 className="text-3xl md:text-5xl  md:my-6 font-semibold  ">
        <span className="text-red-500 animate-pulse">404 </span>
        Page Not Found
      </h2>
    </div>
  );
}
