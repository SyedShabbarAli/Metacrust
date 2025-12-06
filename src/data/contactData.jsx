import hammerIcon from "../assets/hammerIcon.png";
import energyIcon from "../assets/energyIco.png";
import lockIcon from "../assets/lockIcon.png";

export const CONTACT_DATA = (
  <p className="w-[17rem] md:w-[40rem] mt-10 ml-2   text-sm md:text-base lg:text-xl ">
    Whether you're launching a wearable or scaling a remote monitoring
    solution—MetaCrust helps you go from prototype to deployment in days.
    <br />
    <br />
    <span className="font-semibold font-mono flex">
      <img
        src={lockIcon}
        alt=""
        className="object-contain mt-1 md:mt-1.5 size-3 md:size-5 mr-3 "
      />
      Instant integration.
    </span>
    <br />
    <span className="font-semibold font-mono flex">
      <img
        src={energyIcon}
        alt=""
        className="object-contain mt-1 md:mt-1.5  mr-3  size-4 md:size-6"
      />
      Minimal battery overhead.
    </span>
    <br />
    <span className="font-semibold font-mono flex">
      <img
        src={hammerIcon}
        alt=""
        className="object-contain mt-1 md:mt-1.5 size-3 mr-3 md:size-5 "
      />
      No redesigns. No rebuilds.
    </span>
    <br />
    <br />
    Let’s Bring Secure, Scalable Connectivity to Life. Ready to explore a{" "}
    <span className="text-red-500 font-semibold">pilot</span>, schedule a{" "}
    <span className="text-red-500 font-semibold"> demo</span>, or ask a{" "}
    <span className="text-red-500 font-semibold">technical question</span> ?
    <br />
    <br />
    Fill out the form, and our team will get back to you shortly.
  </p>
);
