import Heading from "../layouts/Heading";
import ServicesCard from "../cards/ServicesCard";
import benefitsImg from "../../assets/benefits.png";
import descriptionImg from "../../assets/description.png";
export default function BenefitSection({ label, description, benefit }) {
  return (
    <div className=" mt-5 md:mt-10">
      <h1 className="text-lg text-center lg:text-start lg:text-3xl font-bold ">
        {label}
      </h1>
      <div className="flex flex-col items-center ">
        <ServicesCard label="Description" img={descriptionImg} isBenefit={true}>
          {description}
        </ServicesCard>

        <ServicesCard label="Benefit" img={benefitsImg} isBenefit={true}>
          {benefit}
        </ServicesCard>
      </div>
    </div>
  );
}
