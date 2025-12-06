import { NavLink } from "react-router-dom";

export const FAQS_DATA = [
  {
    question: "What is MetaCrust Business Model?",
    answer: `MetaCrust offers flexible pricing options to suit various deployment needs. Our model includes term-based licensing per device or volume, annual subscriptions for updates and support, and a hybrid pay-as-you-scale option for growing deployments. This ensures our solution remains affordable, scalable, and aligned with evolving compliance and security standards.`,
  },
  {
    question: "How does MetaCrust sell its solutions?",
    answer:
      "At MetaCrust, we prioritize collaboration over transactions. Rather than treating you as just an end customer, we work closely with your team to understand your unique needs and goals. Together, we can discuss and determine the best approach for integrating our solutions, ensuring a partnership that benefits both sides",
  },
  {
    question: `What type of devices are compatible with MetaCrust's solutions?`,
    answer:
      "Our solutions are highly versatile and compatible with a wide range of devices, including low-power medical wearables, multi-sensor platforms, and embedded systems. They seamlessly integrate with existing hardware, microcontrollers, and sensor configurations without requiring modifications.",
  },
  {
    question: `Are MetaCrust's solutions compatible with other industrial applications?`,
    answer:
      "Yes, our technology extends beyond MedTech to support various industrial applications. This includes ocean technology, environmental monitoring devices, and other real-time data monitoring and transmission systems used in industries like agriculture, energy, and manufacturing.",
  },
  {
    question: `How long does it take to onboard new customer?`,
    answer:
      "Our typical onboarding process takes 2-3 weeks, depending on the complexity of your devices and specific customization requirements. During this time, we work closely with your team to ensure seamless integration and optimal performance of our solution.",
  },
  {
    question:
      "Do you offer customized solutions tailored to specific device needs?",
    answer:
      "Absolutely! At MetaCrust, we specialize in providing customized security and data transmission solutions that adapt to the limitations and unique requirements of your devices. From specific microcontroller configurations to data packet sizes, we tailor our technology to meet your needs.",
  },
  {
    question: `How do MetaCrust's solutions enhance device performance?`,
    answer:
      "We optimize energy efficiency by using lightweight cryptographic protocols, reducing the power consumption of devices while ensuring secure data transmission. This maximizes battery life and minimizes resource usage without compromising security.",
  },
  {
    question: `Do we need to make hardware changes to use MetaCrust's solution?`,
    answer:
      "No, our solutions are designed to integrate directly with your existing hardware. Whether your device uses a single sensor or multiple, we adapt to your specifications, eliminating the need for manufacturing changes.",
  },
  {
    question: `Are MetaCrust's solutions compliant with global regulatory standards ?`,
    answer:
      "Yes, our frameworks are developed in alignment with industry regulations and evolving standards. We stay up to date with compliance requirements to ensure your devices meet both local and global regulations.",
  },
  {
    question:
      "What data sizes and transmission frequencies does MetaCrust support?",
    answer:
      "Our solutions are flexible and scalable, accommodating diverse data packet sizes and transmission frequencies. Whether it’s high-speed data for critical monitoring or periodic updates, we provide secure, reliable performance.",
  },
  {
    question: "What support does MetaCrust offer for implementation?",
    answer:
      "We provide end-to-end support for integrating our solutions into your devices. Our team works closely with yours to ensure a smooth transition, offering guidance on deployment, testing, and compliance validation.",
  },
  {
    question: "Can MetaCrust assist with real-time incident response?",
    answer:
      "Yes, our advanced incident response mechanisms detect and mitigate threats in real time. We help you maintain device security and functionality, ensuring uninterrupted service for your customers.",
  },
  {
    question: "How does MetaCrust ensure data security?",
    answer:
      "We employ state-of-the-art encryption protocols for secure data transmission and storage, ensuring confidentiality, integrity, and authenticity at every stage of communication.",
  },
  {
    question: `How can i get started with MetaCrust's solutions?`,
    answer: (
      <>
        <NavLink to="/connect">
          {" "}
          <span className=" text-red-500 font-semibold  hover:animate-pulse">
            Contact us
          </span>{" "}
        </NavLink>{" "}
        via our website or email to schedule a consultation. We’ll work with you
        to understand your device’s needs and provide a tailored solution that
        aligns with your business goals.
      </>
    ),
  },
];
