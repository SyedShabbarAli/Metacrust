import Navigation from "./Navigation";

export default function NavigationBar() {
  return (
    <nav className="hidden md:flex justify-evenly items-center w-full ">
      <Navigation label="Home" destination="/" useIsActive={true} />
      <Navigation label="About Us" destination="about" useIsActive={true} />
      <Navigation
        label="Applications"
        destination="applications"
        useIsActive={true}
      />
      <Navigation label="Platform" destination="platform" useIsActive={true} />
      <Navigation label="Connect" destination="connect" useIsActive={true} />
      <Navigation label="FAQs" destination="faqs" useIsActive={true} />
    </nav>
  );
}
