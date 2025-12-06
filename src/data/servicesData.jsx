/* eslint-disable react-refresh/only-export-components */
import medicalImg from "../assets/medical.png";
import envImg from "../assets/environment.png";
import oceanImg from "../assets/ocean.png";
import iotImg from "../assets/iot.png";
import agricultureImg from "../assets/agriculture.png";
import smartImg from "../assets/smart.png";

import encryptImg from "../assets/encrypt.png";
import dataImg from "../assets/data.png";
import systemImg from "../assets/system.png";
import cryptocurrencyImg from "../assets/cryptocurrency.png";
import memoryImg from "../assets/memory.png";
import energyImg from "../assets/energy-feature.png";
import encryptionImg from "../assets/encryption.png";
import installationImg from "../assets/installation.png";

import MedTechDevices from "../assets/MedTechDevices.png";
import EnvironmentalMonitoringSystems from "../assets/EnvironmentalMonitoringSystems.png";
import OceanTechnology from "../assets/OceanTechnology.png";
import IndustrialIoTSystems from "../assets/IndustrialIoTSystems.png";
import AgricultureTechnology from "../assets/AgricultureTechnology.png";
import SmartCities from "../assets/SmartCities.png";

import endEncImg from "../assets/endEnc.png";
import energyImg2 from "../assets/energy copy.png";
import targetImg from "../assets/target.png";
import successIcon from "../assets/successLogo.png";

import medTechno from "../assets/medTechno.jpg";
import envMonSys from "../assets/envMonSys.jpg";
import gasSense from "../assets/gasSense.png";
import AgriMon from "../assets/AgriMon.jpg";
import smartCity from "../assets/smartCity.jpg";
import indusTechno from "../assets/indusTechno.jpg";
import HealthMonImg from "../assets/HealthMon.jpg";
import workMonImg from "../assets/workMon.jpg";
import rehabMonImg from "../assets/rehabMon.jpg";
import climatMonImg from "../assets/climateMon.jpg";

export const PURPOSE = (
  <p className=" text-center">
    At MetaCrust, we deliver advanced security solutions tailored for MedTech
    and real-time industrial monitoring. Our software platform ensures
    <span className="font-semibold mx-1">
      secure data transmission, real-time monitoring, energy efficiency, and
      regulatory compliance
    </span>
    while integrating seamlessly into low-power devices, without any hardware
    redesigns.
  </p>
);
export const BENEFITS_SECTION_DATA = [
  {
    label: "Security & Compliance",
    description: (
      <p className="flex flex-col gap-3 text-[0.65rem] md:text-xs">
        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          End-to-end secure
        </span>

        <span className="flex text-start">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          threat detection
        </span>

        <span className="flex text-start">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          OTA updates
        </span>

        <span className="flex text-start">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          regulatory compliant by design
        </span>
      </p>
    ),
    img: endEncImg,
  },
  {
    label: "Efficiency & Integration",
    description: (
      <p className="flex flex-col gap-3 text-[0.65rem] md:text-xs">
        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          Battery overhead reduced from 85% to under 15%
        </span>
        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          Integration time cut from months to under 10 seconds
        </span>

        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          Plug-and-play SDK — no hardware redesigns, no software rebuilds
        </span>
      </p>
    ),
    img: energyImg2,
  },

  {
    label: "Monitoring & Reliability",
    description: (
      <p className="flex flex-col gap-3 text-[0.65rem] md:text-xs">
        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          Real-time sync visibility
        </span>
        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" /> device
          status
        </span>
        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          anomaly detection & response
        </span>
        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" />
          Communications logs
        </span>
        <span className="flex text-start  ">
          <img src={successIcon} className="size-4  mt-0.5 mr-3" /> Data
          Monitoring
        </span>
      </p>
    ),
    img: targetImg,
  },
];

export const FEATURES_DATA = [
  {
    label: "Robust Encryption",
    description: `Implementation of strong and resilient cryptographic and AI
            algorithms to safeguard sensitive health data transmitted and stored
            by medical devices, ensuring a high level of protection against
            unauthorized access and privacy breaches, and prompt incident
            response.`,
    img: encryptImg,
  },
  {
    label: "Diverse Data-Size Viability",
    description: `The ability of firmware to effectively handle and process varying
            sizes of data packets/volumes generated by different devices while
            maintaining efficient performance.`,
    img: dataImg,
  },
  {
    label: "Universal Compatibility",
    description: `The capacity of firmware and security system to seamlessly integrate
            with a wide range of hardware components within healthcare devices,
            ensuring interoperability and efficient communication across various
            wireless medical devices.`,
    img: systemImg,
  },
  {
    label: "Tailored Features",
    description: `As per the functionalities and capabilities of your embedded system,
            the security solution is specifically designed to meet the unique
            security requirements ensuring a personalized and optimized
            end-to-end security system.`,
    img: cryptocurrencyImg,
  },
  {
    label: "Real-Time Device Monitoring",
    description: `Stay informed with live device sync status, data delivery confirmation, integrity checks, and actionable alerts—via intuitive Web & Mobile dashboards.`,
    img: memoryImg,
  },
  {
    label: "Energy Efficient",
    description: `The optimization of firmware as per tested power consumption within
            your embedded system by implementing strategies to minimize energy
            usage, extend battery life, and promote sustainable device operation
            in perfect balance with security properties.`,
    img: energyImg,
  },
  {
    label: "Uninterrupted Data Access",
    description: `It involves ensuring a reliable and consistent flow of data,
            minimizing downtime, and supporting real-time access for healthcare
            applications without disruptions.`,
    img: encryptionImg,
  },
  {
    label: "Remote Installation",
    description: `Provided the wireless capability of your medical IoT device, the
            solution will be remotely deployed and upgraded to fix the patches
            in the longer run`,
    img: installationImg,
  },
];

export const APPLICATION_DATA = [
  {
    label: "MedTech Devices",
    descImg: medTechno,
    description:
      "Enhancing the security and efficiency of medical wearables and IoT devices used in healthcare.",
    img: medicalImg,
  },
  {
    label: "Remote Patient Monitoring",
    descImg: HealthMonImg,
    description:
      "Secure, real-time monitoring of patient vitals and health data from remote locations with minimal battery drain.",
    img: medicalImg,
  },
  {
    label: "Workplace Safety Monitoring",
    descImg: workMonImg,
    description:
      "Protecting workers with real-time safety monitoring, hazard detection, and emergency alert systems.",
    img: iotImg,
  },
  {
    label: "Environmental Monitoring Systems",
    descImg: gasSense,
    description:
      "Securing data transmission for devices monitoring environmental conditions in real time.",
    img: envImg,
  },
  {
    label: "Rehabilitation & Fitness Devices",
    descImg: rehabMonImg,
    description:
      "Energy-efficient secure communication for rehabilitation equipment and fitness tracking wearables.",
    img: medicalImg,
  },
  {
    label: "Mining Operations & Equipment",
    descImg: indusTechno,
    description:
      "Secure monitoring of mining equipment, worker safety, and environmental conditions in remote mining sites.",
    img: iotImg,
  },
  {
    label: "Oil & Gas Infrastructure",
    descImg: indusTechno,
    description:
      "Real-time secure monitoring of pipelines, facilities, and equipment in remote oil and gas operations.",
    img: iotImg,
  },
  {
    label: "Marine & Ocean Technology",
    descImg: AgriMon,
    description:
      "Supporting underwater and ocean-based monitoring systems with robust, secure data transmission in challenging environments.",
    img: oceanImg,
  },
  {
    label: "Environmental Gases & Hazards Detection",
    descImg: gasSense,
    description:
      "Real-time detection and monitoring of hazardous gases and environmental threats with secure data transmission.",
    img: envImg,
  },
  {
    label: "Defense & Surveillance Systems",
    descImg: workMonImg,
    description:
      "Secure, encrypted communication for defense surveillance equipment and security monitoring systems.",
    img: iotImg,
  },
  {
    label: "Climate & Weather Monitoring",
    descImg: climatMonImg,
    description:
      "Reliable data transmission from weather stations and climate monitoring sensors in remote locations.",
    img: envImg,
  },
  {
    label: "Industrial IoT Systems",
    descImg: indusTechno,
    description:
      "Providing secure data communication for industrial IoT devices used in critical infrastructure.",
    img: iotImg,
  },
  {
    label: "Agriculture Technology",
    descImg: envMonSys,
    description:
      "Enabling secure and energy-efficient data transmission for smart farming devices and precision agriculture.",
    img: agricultureImg,
  },
  {
    label: "Smart Cities",
    descImg: smartCity,
    description:
      "Securing IoT devices used in urban environments for efficient city management and infrastructure monitoring.",
    img: smartImg,
  },
];
