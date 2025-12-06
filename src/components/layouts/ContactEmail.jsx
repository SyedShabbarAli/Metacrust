export default function ContactEmail({ img, description, email, isMale }) {
  return (
    <p className="my-2 w-fit cursor-default group flex flex-col lg:flex-row  gap-x-2 mb-3">
      <div className="flex gap-1 ">
        <img src={img} className="size-5 mb-2" />
        <span className="font-semibold text-sm  md:text-lg ">
          {description} :
        </span>
      </div>
      <span
        className={`${
          isMale ? "group-hover:text-red-500" : "group-hover:text-cyan-500 "
        } transition-colors duration-300 text-sm md:text-lg  mx-auto`}
      >
        {email}
      </span>
    </p>
  );
}
