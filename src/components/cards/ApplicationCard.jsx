import ServicesCard from "./ServicesCard";
import CenteredCard from "./CenteredCard";

export default function ApplicationCard({ label, description, img, descImg }) {
  return (
    <CenteredCard label={label} img={img} descImg={descImg}>
      {description}
      <br />
      <br />
    </CenteredCard>
  );
}
