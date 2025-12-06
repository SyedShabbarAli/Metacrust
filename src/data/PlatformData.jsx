import lockImg from "../assets/lockIcon.png";
import energyImg from "../assets/energyIco.png";
import moibleImg from "../assets/mobileIcon.png";
import refreshImg from "../assets/refreshIcon.png";
import successImg from "../assets/successLogo.png";

import timeImg from "../assets/timeLog.png";
import globeImg from "../assets/globeLog.png";
import memoryImg from "../assets/brainLog.png";
import energyIm from "../assets/energyLog.png";
import stethoscopeIcon from "../assets/stethoscopeIcon.png";
import alarmIcon from "../assets/alarmIcon.png";
import truckIcon from "../assets/truckIcon.png";
import brainIcon from "../assets/brainIco.png";
import energyIcon from "../assets/energyIC.png";
import medicalWearable from "../assets/purpose.jpg";
import monitoring from "../assets/monitor.jpg";
import detection from "../assets/detection.jpg";
import energyPowered from "../assets/energyPowered.jpg";
import safteySense from "../assets/safteySense.jpg";

import iotDevImg from "../assets/iotDev.jpg";
import remoteMonImg from "../assets/remoteMon.jpg";
import climateMonImg from "../assets/climateMon.jpg";

import HealthMonImg from "../assets/HealthMon.jpg";
import workMonImg from "../assets/workMon.jpg";
import rehabMonImg from "../assets/rehabMon.jpg";
import batteryEmb from "../assets/batteryEmb.jpg";
import indusTechno from "../assets/indusTechno.jpg";
import oceanTech from "../assets/oceanTech.jpg";
import gasSense from "../assets/gasSense.png";
import envMonSys from "../assets/envMonSys.jpg";
import smartCity from "../assets/smartCity.jpg";

import cognitiveImg from "../assets/cognitive.jpg";

import secEl from "../assets/secELem.png";
import batTech from "../assets/batteryTech.png";
import cloudTech from "../assets/cloudTech.png";
import OTA from "../assets/OTA.png";
import anomaly from "../assets/anomaly.png";

export const HOLD_DATA = [
  <>
    Security <span className="text-red-500">integrations delay </span>
    time-to-market by months
  </>,
  <>
    Compliance with HIPAA, GDPR, and MDR requires deep{" "}
    <span className="text-red-500"> cryptographic expertise</span>
  </>,
  <>
    Real-time monitoring <span className="text-red-500"> drains battery </span>
    on wearable and embedded devices
  </>,
  <>
    Data & Incident alerts are{" "}
    <span className="text-red-500">delayed or lost</span> in low-coverage
    environments
  </>,
  <>
    Retrofits often require complete firmware or{" "}
    <span className="text-red-500">hardware redesign</span>
  </>,
  <>
    Existing solutions are not built for constrained,{" "}
    <span className="text-red-500">low-power systems</span>
  </>,
];

export const PLATFORM_BENEFITS = [
  {
    img: lockImg,
    desc: "End-to-end secure telemetry",
    descImg: secEl,
  },
  {
    img: energyImg,
    descImg: batTech,
    desc: "Minimal battery impact for low-power devices",
  },
  {
    img: moibleImg,
    descImg: cloudTech,
    desc: "Mobile-to-cloud integration with full data traceability",
  },
  {
    img: successImg,
    descImg: anomaly,
    desc: "Built-in mechanisms for real-time anomaly detection and protection",
  },
  {
    img: globeImg,
    descImg: remoteMonImg,
    desc: "Reliable Data transmission in low-bandwidth remote areas",
  },
  {
    img: refreshImg,
    descImg: OTA,
    desc: "Secure Over-the-Air (OTA) update capabilities",
  },
];

export const CORE_CAPS = [
  {
    img: timeImg,
    label: "Integration Time Reduced ",
  },
  {
    img: energyIm,
    label: "Battery Overhead Reduced",
  },
  {
    img: memoryImg,
    label: "Memory Overhead Reduced",
  },
  {
    img: globeImg,
    label: "Deployment Time reduced ",
  },
];

export const WHY_CHOOSE = [
  <>
    <span className="text-red-500"> &lt;15% Battery Overhead </span> — Optimized
    for energy-constrained devices
  </>,
  <>
    <span className="text-red-500"> End-to-End </span>Secure Communication —
    From sensor to cloud with integrity & confidentiality
  </>,
  <>
    <span className="text-red-500"> Compliance-Ready </span> — Supports HIPAA,
    GDPR, FDA, and MDR-aligned architectures
  </>,
  <>
    <span className="text-red-500"> 10-Second Integration </span> — SDK easily
    deploys into existing firmware
  </>,
  <>
    <span className="text-red-500"> No Hardware Redesign Required </span> —
    Works with existing firmware on popular Microcontrollers
  </>,
  <>
    Seamless <span className="text-red-500">Monitoring Platform </span>{" "}
    Integration— Enables secure, real-time data transmission to web and
    mobile-based monitoring systems
  </>,
];

export const DEVICES_TYPES = [
  {
    img: stethoscopeIcon,
    label: "Medical wearables (ECG patches, fertility trackers, oximeters)",
    desImg: HealthMonImg,
  },
  {
    img: stethoscopeIcon,
    label: "Remote Patient Monitoring",
    desImg: monitoring,
  },
  {
    img: brainIcon,
    desImg: cognitiveImg,
    label: "Cognitive or biofeedback monitors (EEG, EDA sensors)",
  },
  {
    img: stethoscopeIcon,
    label: "Rehabilitation & Fitness Devices",
    desImg: rehabMonImg,
  },
  {
    img: alarmIcon,
    desImg: workMonImg,
    label: "Workplace safety & wellness monitors (gas detection, fall detectors)",
  },
  {
    img: truckIcon,
    desImg: indusTechno,
    label: "Mining Operations & Equipment Monitoring",
  },
  {
    img: truckIcon,
    desImg: indusTechno,
    label: "Oil & Gas Pipeline & Facility Monitoring",
  },
  {
    img: truckIcon,
    desImg: oceanTech,
    label: "Marine & Underwater Sensor Networks",
  },
  {
    img: alarmIcon,
    desImg: gasSense,
    label: "Environmental Gases & Hazards Detection",
  },
  {
    img: alarmIcon,
    desImg: safteySense,
    label: "Defense Surveillance & Security Systems",
  },
  {
    img: globeImg,
    desImg: climateMonImg,
    label: "Climate & Weather Monitoring Stations",
  },
  {
    img: truckIcon,
    desImg: iotDevImg,
    label: "Industrial IoT (temperature, pressure, safety sensors)",
  },
  {
    img: globeImg,
    desImg: envMonSys,
    label: "Agriculture Technology & Smart Farming",
  },
  {
    img: truckIcon,
    desImg: smartCity,
    label: "Smart Cities & Urban Infrastructure",
  },
  {
    img: energyIcon,
    desImg: batteryEmb,
    label: "Battery-powered embedded devices with wireless telemetry (BLE, Wi-Fi, LTE)",
  },
];
