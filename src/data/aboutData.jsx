import innovationImg from "../assets/innovation.png";
import integrityImg from "../assets/integrity.png";
import sustainabilityImg from "../assets/sustainability.png";
import complianceImg from "../assets/compliance.png";
import collaborationImg from "../assets/collaboration.png";
import gearsImg from "../assets/gears.png";
import devicesImg from "../assets/devices.png";
import adapImg from "../assets/adaptibility.png";
import effImg from "../assets/timeEff.png";

import ramImg from "../assets/ram.png";
import timeImg from "../assets/timeLo.png";
import energyImg from "../assets/energyLo.png";
import deployImg from "../assets/deployLo.png";

import gearsIcon from "../assets/gearsIcon.png";
import successIcon from "../assets/successIcon.png";
import paperIcon from "../assets/paperIcon.png";

export const ABOUT_DATA = `At MetaCrust Services, we build secure, energy-efficient communication solutions for real-time health and safety monitoring. Based in the scenic landscapes of Newfoundland, Canada, our mission is to redefine the future of cybersecurity in MedTech and real-time industrial monitoring by delivering advanced, lightweight solutions purpose-built for wearable devices.`;

export const VALUES_DATA_1 = [
  {
    label: "Innovation",
    description: `Pushing boundaries with secure and energy-aware technologies for tomorrow’s monitoring solutions.`,
    img: innovationImg,
  },
  {
    label: "Integrity",
    description: `Upholding the highest standards of data protection, privacy, and ethical engineering across all nodes and partners.`,
    img: integrityImg,
  },
  {
    label: "Sustainability",
    description: `Engineering ultra-low power solutions that extend device lifespan while reducing environmental impact.`,
    img: sustainabilityImg,
  },
];

export const SECOND_VALUE_CARD = {
  label: "Collaboration",
  description: `Co-creating meaningful solutions by closely partnering with manufacturers, clinicians, and tech innovators.`,
  img: collaborationImg,
};
export const FINAL_VALUE_CARD = {
  label: "Compliance-Driven Excellence",
  description:
    "Embedding global regulatory standards like HIPAA, PIPEDA, and IEC 62443—right into our platform architecture.",
  img: complianceImg,
};

export const WHY_US_DESC = (
  <div className="p-5">
    At MetaCrust, we prioritize understanding the unique needs of our customers:
    <br />
    <br />
    <ul>
      <li className=" font-semibold">1- Device manufacturers</li>
      <li className=" font-semibold">2- Device companies</li>
      <li className=" font-semibold">3- Software service providers</li>
    </ul>
    <br />
    ensuring our solutions are tailored to help them succeed in a competitive
    and rapidly evolving industry.
  </div>
);

export const CORE_FUN = [
  {
    title: "Integration Time",
    img: timeImg,
    desc: "reduced from Days to 10 sec",
  },
  {
    title: "Battery Overhead",
    img: energyImg,
    desc: "reduced from 85% to <15%",
  },
  {
    title: "Memory Overhead",
    img: ramImg,
    desc: "reduced from 65% to 35% ",
  },
  {
    title: "Deployment Time",
    img: deployImg,
    desc: "reduced from Months to 2 weeks",
  },
];

export const WHY_US_DATA = [
  {
    label: "For Device Manufacturer",
    description: (
      <>
        <div className="flex  mt-4">
          <img src={gearsIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold "> Hardware-Compatible Security </span>
        </div>
        Integrates directly into your devices—no redesigns or component changes
        needed.
        <br />
        <div className="flex  mt-4">
          <img src={gearsIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold  ">Energy-Efficient</span>
        </div>
        Adds &lt; 15% battery impact, ideal for small, battery-powered
        wearables.
        <br />
        <div className="flex  mt-4">
          <img src={gearsIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">Compliance-Ready </span>
        </div>
        Helps your devices meet HIPAA, PIPEDA, and IEC 62443 without extra
        overhead. <br />
        <div className="flex  mt-4">
          <img src={gearsIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">Faster Time-to-Market</span>
        </div>
        Plug-and-play setup in &lt;10 seconds for rapid pilot and deployment.
      </>
    ),
    img: gearsImg,
  },
  {
    label: "For Device Companies",
    description: (
      <>
        <div className="flex  mt-4">
          <img src={paperIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">End-to-End Visibility</span>
        </div>{" "}
        Unified monitoring across devices, mobile apps, and cloud services.
        <br />
        <div className="flex  mt-4">
          <img src={paperIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">Data Integrity & Sync</span>{" "}
        </div>
        Real-time alerts on packet loss, desync, or tampering.
        <br />
        <div className="flex  mt-4">
          <img src={paperIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">OTA Management</span>
        </div>{" "}
        Manage firmware and security upgrades remotely and reliably.
        <br />
        <div className="flex  mt-4">
          <img src={paperIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">Trusted Architecture </span>
        </div>
        Built-in encryption and authentication mechanisms across all nodes.
      </>
    ),
    img: devicesImg,
  },
  {
    label: "For Software Service Providers",
    description: (
      <>
        <div className="flex  mt-4">
          <img src={successIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">Seamless Integration</span>{" "}
        </div>{" "}
        Add security and monitoring layers to your existing services with
        minimal code.
        <br />
        <div className="flex  mt-4">
          <img src={successIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">Incident Response Layer</span>{" "}
        </div>{" "}
        Real-time anomaly detection with rapid threat alerts.
        <br />
        <div className="flex  mt-4">
          <img src={successIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">Cross-Platform Support</span>{" "}
        </div>{" "}
        Compatible with diverse microcontrollers and communication stacks.
        <br />
        <div className="flex  mt-4">
          <img src={successIcon} className="size-4 mt-0.5 md:mt-1 mr-1.5" />
          <span className="font-semibold">Competitive Advantage</span>{" "}
        </div>{" "}
        Strengthens your offering with secure-by-design data infrastructure.
      </>
    ),
    img: sustainabilityImg,
  },
];

export const JOURNEY_DATA = (
  <>
    Founded in 2022 by a team of dedicated researchers passionate about
    cybersecurity and healthcare, MetaCrust was born out of a shared vision to
    make medical technology safer, smarter, and more efficient. With backgrounds
    in cryptography, regulatory compliance, and MedTech innovation, we set out
    to solve one of the industry’s most pressing challenges: securing sensitive
    health data in resource-constrained environments.
    <br />
    <br />
    Our expertise lies in transforming complex cryptographic protocols into
    lightweight, energy-efficient solutions that cater specifically to the
    unique demands of embedded systems like low-power medical wearable devices.
    From the beginning, our mission has been clear: to enable healthcare
    providers and device manufacturers to deliver secure, high-performance
    solutions without compromising on energy efficiency or functionality.
    <br />
    <br />
    While we initially focused on <span className="font-bold">MedTech</span>,
    providing secure and efficient solutions for
    <span className="font-bold">medical wearable devices</span> , we soon
    discovered that our technology could address challenges in other
    <span className="font-bold">industrial real-time monitoring sectors</span>.
    Today, our solutions are also used in applications such as
    <span className="font-bold">ocean technology</span> , where they secure data
    transmission for
    <span className="font-bold">
      underwater sensors monitoring marine ecosystems
    </span>
    , and
    <span className="font-bold "> environmental monitoring devices </span>,
    which track air quality and climate data in real-time. Additionally, we
    support <span>industrial IoT systems </span>in sectors like energy and
    manufacturing, ensuring the secure transmission of critical operational
    data.
    <br />
    <br />
    What truly defines our journey is collaboration. We’ve partnered with
    industry leaders, regulatory bodies, and academic institutions to co-create
    solutions that not only meet today’s standards but anticipate tomorrow’s
    challenges. In a rapidly evolving MedTech landscape and beyond, we remain
    committed to ensuring our solutions are robust, adaptable, and always
    aligned with the needs of our partners and customers.
  </>
);

export const APPLICATION_SECTION_DATA_1 = [
  {
    label: `Seamless Monitoring & Sync`,
    description: `Enables timely health interventions, reduces missed signals, and ensures every data point is captured and aligned.`,
  },
  {
    label: "Plug-and-Play Compatibility",
    description: `Ideal for manufacturers needing fast deployment on existing devices—zero production disruption.`,
  },
  {
    label: "Advanced Security Protocols",
    description: `Offers End-to-End encryption, authentication, and resilience against sync failures and cyberattacks.`,
  },
  {
    label: "Ultra-Low Power Overhead",
    description: `Designed for long-term performance in battery-operated and wearable devices.`,
  },
  {
    label: "Scalable Data Handling",
    description: `Adaptive to single-sensor and multi-modal systems like ECG, EEG, or fall detection.`,
  },
  {
    label: "Compliance-Driven Architecture",
    description: `Helps reduce certification delays and speeds up go-to-market readiness.`,
  },
  {
    img: adapImg,
  },

  {
    label: "Cloud-Edge Flexibility",
    description: `Secure relay and control across Bluetooth, Wi-Fi, and mobile links.`,
  },
  {
    img: effImg,
  },
];
