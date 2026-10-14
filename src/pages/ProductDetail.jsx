import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ProductDetail.css";

const productsData = {
  "hydrometerology": {
    name: "Next Generation Technology for Hydrometerology monitoring",
    tag: "Traffic Management",
    accent: "#4A9ECC",
    overview: `The Hydro-Meteorology Monitoring System for Smart Ports is an integrated, intelligent environmental sensing and decision-support solution designed to provide accurate, reliable, and near real-time tidal and meteorological intelligence essential for modern port operations. The system supports enhanced navigational safety, operational efficiency, climate resilience, and data-driven port management, while seamlessly integrating with existing digital and maritime infrastructure.

At the core of the system are radar-based automatic tide gauges that employ contactless measurement technology, eliminating mechanical wear, fouling, and long-term drift associated with conventional tide measurement systems. These sensors deliver high-precision, real-time water level measurements, supported by GNSS/GPS-controlled vertical referencing to ensure long-term accuracy, reliability, and consistency with chart datums. Each tide gauge is equipped with an on-board data recording facility, ensuring uninterrupted data capture during communication outages and enabling long-term data archival.

The system also integrates a comprehensive suite of hydro-meteorological sensors, capturing live environmental parameters such as wind speed and direction, ambient temperature, and solar radiation. All meteorological data are streamed through an in-house marine Internet of Things (IoT) sensing framework and gateway, enabling synchronized, high-frequency environmental observations critical for pilotage, berth operations, dredging activities, and adverse weather preparedness.

A hybrid energy architecture combining renewable power sources with intelligent battery storage and low-power consumption management ensures uninterrupted, unattended operation in harsh marine environments. The system features futuristic, modular sensor mounting structures designed to accommodate a wide range of current and future hydro-meteorological sensors, offering scalability and long service life with minimal maintenance.

For offshore and approach channel deployments, the solution incorporates a hybrid data buoy platform with an innovative two-point mooring system, providing enhanced positional stability, reduced motion-induced errors, and improved survivability during extreme weather events. An on-board micro-computer enables real-time data preprocessing, validation, and quality control at the sensor edge, reducing bandwidth usage and improving data reliability.

Data transmission is ensured through a robust multi-band, multi-mode telemetry system, supporting LTE, WCDMA, GSM, and long-range wireless communication, with automatic network switching for maximum availability. The system is built on an open-architecture design, ensuring interoperability with external sensors, existing port IT/OT systems, Vessel Traffic Services (VTS), Port Management Information Systems, and Digital Twin platforms.

A web-based Smart Dashboard provides centralized visualization of live and historical data, configurable alerts, and role-based access. An integrated Artificial Intelligence–based tide prediction module delivers near real-time tidal forecasting to support berth planning, under-keel clearance management, and vessel scheduling. Operationally relevant information is disseminated directly to pilots and operators through a dedicated mobile application, ensuring timely, decision-ready intelligence at the point of use.

Together, the Hydro-Meteorology Monitoring System enables Smart Ports to move towards predictive, resilient, and intelligence-driven operations, strengthening safety, efficiency, and sustainability across the port ecosystem.`,
    specs: [
      { label: "Coverage", value: "Up to 60 nautical mile radar range" },
      {
        label: "Radar Integration",
        value: "Multi-radar fusion with X-band and S-band support",
      },
      {
        label: "AIS Processing",
        value: "Real-time Class A/B AIS target processing",
      },
      {
        label: "Communication",
        value: "VHF radio integration with DSC and GMDSS",
      },
      {
        label: "Ports Deployed",
        value: "Chennai, Paradip, Kamarajar and more",
      },
      {
        label: "Platform",
        value: "100% indigenous software stack, cloud-ready",
      },
    ],
    features: [
      "Radar-based contactless tide gauges with on-board data recording.",
      "Hybrid energy design optimized for low power consumption.",
      "Modular sensor mounts for varied Hydro-Met sensor integration.",
      "Two-point mooring hybrid data buoy system.",
      "IoT-enabled sensing with onboard preprocessing capabilities.",
      "Advanced telemetry: LTE/WCDMA/GSM & Long-Range wireless.",
      "Seamless interoperability with external sensors/systems.",
      "Smart dashboard with open architecture web design.",
      "Near real-time data with AI-powered tide prediction.",
      "GNSS/GPS-controlled tide gauges for precise, long-term data.",
    ],
    photos: [
      {
        src: "/assets/images/product/hydrometerology/Picture1.png",
        caption: "iVTS control room at Chennai Port Authority",
      },
      {
        src: "/assets/images/product/hydrometerology/picture1.jpg",
        caption: "Multi-radar display showing vessel traffic",
      },
      {
        src: "/assets/images/product/hydrometerology/Picture2.jpg",
        caption: "AIS target processing interface",
      },
    ],
    video: null,
  },
  "survey-vessel": {
    name: "USV-01-ASB – Autonomous Survey Vessel",
    tag: "Port Operating System",
    accent: "#5BB8B2",
    overview: `The USV-01-SWB is an indigenously developed Unmanned Surface Vessel (USV) designed to support autonomous and remote-controlled hydrographic and oceanographic surveys in ports, harbours, inland waterways, and shallow coastal regions. Developed by National Technology Centre for Ports, Waterways and Coasts (NTCPWC), IIT Madras, the system represents a next-generation survey platform aligned with the operational needs of modern smart ports and waterways.

Conventional hydrographic survey operations using manned vessels are often constrained by safety risks, interference with vessel traffic, high mobilisation costs, and limited survey frequency, particularly in shallow or congested waters. The USV-01-SWB addresses these challenges by providing a lightweight, compact, and rapidly deployable survey solution capable of operating safely in confined and high-traffic environments with minimal human intervention.

The vessel is equipped with an autonomous navigation system that enables mission-based survey execution along predefined tracks, supported by intelligent obstacle detection and avoidance. High-precision GNSS/GPS-based positioning ensures accurate geo-referencing of survey data, while real-time telemetry allows continuous monitoring of vessel status and survey progress from a shore-based control station. This capability enables timely decision-making and immediate data validation during survey operations.

The USV-01-SWB supports a modular sensor and payload architecture, allowing integration of a wide range of hydrographic and situational awareness instruments. Standard payloads include a single-beam echo sounder for bathymetric measurements, a 360-degree camera for visual situational awareness, and a broadband communication system for reliable long-range data transmission. Optional payloads such as LiDAR and additional survey sensors can be integrated based on project-specific requirements, ensuring flexibility across diverse operational scenarios.

Operationally, the platform offers significant advantages over traditional survey vessels. Its minimal launch and recovery requirements reduce mobilisation time and manpower dependency, enabling rapid response surveys and frequent data acquisition. The ability to conduct surveys without disrupting regular vessel traffic makes the system particularly suited for busy ports and inland waterways. By enabling high-resolution and repeatable surveys, the USV-01-SWB supports early detection of shoaling, post-dredging verification, navigable window identification, and under-keel clearance assessment.

Overall, the USV-01-SWB provides port authorities and waterway administrators with a cost-effective, safe, and technologically advanced hydrographic survey solution, strengthening navigational safety, operational efficiency, and data-driven decision-making within India’s smart maritime infrastructure ecosystem.`,
    specs: [
      {
        label: "Architecture",
        value: "Cloud-native microservices, containerised deployment",
      },
      {
        label: "Modules",
        value: "Berth Management, VTS, Cargo Ops, Analytics",
      },
      {
        label: "AI Engine",
        value: "ML-based demand forecasting and scheduling optimisation",
      },
      {
        label: "Integration",
        value: "PCS, customs, pilot booking, tug management",
      },
      {
        label: "Uptime SLA",
        value: "99.9% availability with hot standby failover",
      },
      {
        label: "Mobile",
        value: "Full mobile app for port officers and pilots",
      },
    ],
    features: [
      "Dimensions: 4.5m x 2.5m x 0.4m",
      "Weight: 1000 kg (without batteries)",
      "Payload: 500 kg",
      "Speed (Max | Eco): 5 m/s | 2 m/s",
      "Endurance (Max | Eco): 2 hours – 12 hours",
      "Communication Range: 10 km",
    ],
    photos: [
      {
        src: "/assets/images/product/USV-01-ASB/usv.jpg",
        caption: "Sagarmanthan main operations dashboard",
      },
    ],
    video: null,
  },
  "dredging-system": {
    name: "Online Dredging Monitoring System",
    tag: "Simulation",
    accent: "#9B7FE8",
    overview: `The Online Dredging Monitoring System is a comprehensive, web-based operational and contract management platform designed to enhance dredging productivity, transparency, and performance monitoring for ports and waterways. The system provides port authorities, project management consultants (PMC), and regulatory agencies with near real-time visibility into dredging operations, enabling data-driven decision-making, effective contract oversight, and optimized maintenance and capital dredging outcomes.

The system supports structured data capture and validation at the operational level, allowing authorized PMC officers to upload key dredging records, including Draught and Loading Monitor (DLM) data and Daily Dredging Reports (DDR). These inputs form the foundation of a centralized digital repository that ensures consistency, traceability, and auditability of dredging activities across projects and contractors.

In addition to operational logs, the system integrates pre-dredging and post-dredging hydrographic survey data, which are uploaded after post-processing. This enables objective assessment of dredging effectiveness, volumetric progress verification, and correlation between planned and achieved dredging outputs. The integration of survey data with operational logs strengthens contractual compliance and improves accuracy in progress certification and billing processes.

The platform provides intuitive visualization tools for tracking dredging progress at daily and monthly intervals, enabling stakeholders to monitor achievement against targets and timelines. Dredger performance and downtime analytics offer insight into operational efficiency, identifying delays arising from equipment issues, weather impacts, maintenance activities, or logistical constraints. Vessel movement and location track data, supplemented with time-stamped snapshots, clearly distinguish between loading, unloading, and idle periods, providing a transparent view of dredger utilization.

To further enhance real-time operational insight, the system is designed to integrate non-radioactive sensors planned for installation onboard dredgers. These sensors enable continuous measurement of slurry density, flow rate, and other critical dredging parameters, allowing near real-time monitoring of dredging productivity and material movement without reliance on manual reporting. Sensor-derived data significantly improves accuracy, reduces subjectivity, and enables early detection of performance deviations.

The system also supports the generation of current, operator-wise reports on processed quantities of slurry and dry solids, with data captured and analysed separately for each dredging contractor or operator. This capability ensures fair performance assessment, transparent comparison across operators, and improved accountability in multi-contractor dredging environments.

Overall, the Online Dredging Monitoring System transforms dredging management from a retrospective, report-driven process into a continuous, data-enabled operational intelligence framework, supporting improved productivity, cost control, and regulatory confidence in port and waterway dredging projects.`,
    specs: [
      {
        label: "Rendering Engine",
        value: "Real-time 3D with Unity/Unreal Engine integration",
      },
      {
        label: "Data Sources",
        value: "AIS, IoT sensors, SCADA, weather, CCTV feeds",
      },
      { label: "Update Rate", value: "Real-time with sub-second data refresh" },
      {
        label: "Simulation",
        value: "What-if scenario modelling for operations planning",
      },
      {
        label: "VR Support",
        value: "Full VR headset compatibility for immersive review",
      },
      { label: "Ports Live", value: "Deployed at 3 major Indian ports" },
    ],
    features: [
      "The system takes advantage of Internet mapping and web-services technology to enable the visualization of dredging monitoring data online.",
      "The capabilities of the system include:",
      "Data upload of PMC officer on Draught and loading monitor (DLM) and Daily Dredging Report (DDR).",
      "The pre and post dredging survey details upon post-processing will be uploaded to the system.",
      "Visualization of daily, monthly progress.",
      "Dredger performance and downtime monitoring.",
      "Location track data with snapshot on loading, unloading and idle time.",
      "The system also provides the performance of the project with reference to contract milestones and deviations if any.",
      "The system is scalable to accommodate IoT-enabled sensors on board dredgers to provide performance and online video feed to avoid manual data upload and additional production optimization.",
    ],
    photos: [
      {
        src: "/assets/images/product/online-dredging/2.png",
        caption: "3D digital twin of port operations",
      },
      {
        src: "/assets/images/product/online-dredging/Picture1.jpg",
        caption: "Live vessel tracking in the twin",
      },
      {
        src: "/assets/images/product/online-dredging/Picture2.jpg",
        caption: "Scenario simulation interface",
      },
    ],
    video: null,
  },
  "sagarmanthan": {
    name: "Sagarmanthan – MoPSW Unified Portal",
    tag: "Navigation Safety",
    accent: "#E8A730",
    overview: `NTCPWC e-Governance & MIS Solutions
As part of NTCPWC’s national mandate to modernize port and maritime infrastructure, we have developed flagship e-Governance and MIS solutions for the Ministry of Ports, Shipping and Waterways (MoPSW).

Sagarmanthan Portal – Unified e-Governance Platform
The Sagarmanthan Portal is a centralized e-Governance platform for MoPSW. It enables real-time project monitoring, performance tracking, and coordination across 30+ agencies such as Major Ports, IWAI, DCI, DGS, CSL, IMU, and Maritime Boards.

Key Capabilities:
• Modular design with secure, role-based access
• Real-time, dynamic dashboards and analytical reports
• API-driven integration with external systems and automated reporting
• Monitoring of long-term visions like Maritime India Vision 2030 & Amrit Kaal Vision 2047
Sagarmanthan embodies the principles of Digital India, PM Gati Shakti, and Good Governance 2.0 through transformative digital governance.

MIS Tools for Scheme Monitoring (DGQI Framework)
NTCPWC has created MIS tools to support MoPSW’s scheme monitoring and performance evaluation, grounded in the Data Governance Quality Index (DGQI) framework by NITI Aayog.

Schemes Covered:
• Sagarmala Programme
• Andaman & Lakshadweep Harbour Works (ALHW)
• IWAI’s Inland Water Transport (IWT) Schemes
• Research & Development Projects`,
    specs: [
      {
        label: "Calculation Method",
        value: "Dynamic UKC with squat, tide, heel and surge",
      },
      {
        label: "Data Integration",
        value: "Real-time tide gauges, multibeam bathymetry",
      },
      {
        label: "Update Rate",
        value: "UKC updated every 30 seconds per vessel",
      },
      {
        label: "Display",
        value: "Bridge display unit and VTS operator screen",
      },
      {
        label: "Alert System",
        value: "Automated UKC warning at configurable thresholds",
      },
      { label: "Deployed At", value: "Paradip Port, Kamarajar Port" },
    ],
    features: [
      "Scheme-specific dashboards with KPIs, milestones, and fund utilization",
      "Automated workflows for proposals, financial tracking, and reporting",
      "Geo-tagged documentation, mobile-based validation, and real-time alerts",
      "DGQI compliance for data quality, security, analytics, and transparency",
      "Automated alert system for critical UKC thresholds",
      "Voyage optimisation for maximum cargo loading",
    ],
    photos: [
      {
        src: "/assets/images/product/sagarmanthan/sagar_1.png",
        caption: "KCMS bridge display unit",
      },
      {
        src: "/assets/images/product/sagarmanthan/sagar_3.png",
        caption: "VTS operator screen with UKC overlay",
      },
    ],
    video: null,
  },
  "smart-docking": {
    name: "Implementation Of Indigenous Smart Docking AID Berthing",
    tag: "Traffic Management",
    accent: "#4A9ECC",
    overview: `The Indigenous Smart Docking Aid – Laser Guided System is an advanced berthing assistance solution designed to enhance safety, precision, and operational efficiency during vessel berthing and docking operations at ports, terminals, and jetties. Developed as part of India’s Smart Port initiatives, the system provides real-time, objective, and continuous monitoring of vessel approach parameters, supporting pilots, masters, and jetty operators in achieving safe and controlled berthing under varying operational and environmental conditions.

The Smart Docking Aid employs a network of high-precision laser sensors strategically installed along the jetty or berth structure. These sensors continuously measure the distance between the approaching vessel and the jetty, enabling accurate calculation of vessel approach speed, lateral movement, and angle of approach. By capturing these critical parameters in real time, the system provides a precise assessment of vessel behaviour during the most safety-critical phase of port operations.

The laser-based berthing aid system operates continuously throughout the vessel’s approach and final docking phase, offering instantaneous feedback on approach speed and alignment. This allows pilots and berthing masters to make timely adjustments, reducing the risk of excessive impact forces, structural damage to berth and fenders, and potential harm to vessels. The system is particularly valuable during adverse weather conditions, restricted visibility, and operations involving large or high-value vessels.

All measured parameters, including vessel approach speed, distance to berth, angle of approach, and time-stamped berthing events, are automatically logged by the system. These data are transmitted in real time to dedicated display units installed on the jetty, providing clear visual guidance to jetty operators. In addition, the system supports data dissemination to handheld Personal Digital Assistants (PDAs) used by operators and supervisors, ensuring mobility and operational flexibility during berthing operations.

The Smart Docking Aid also serves as a valuable post-operation analysis and compliance tool. Logged berthing data can be archived and reviewed to support incident investigations, pilot performance assessment, training programs, and continuous improvement of berthing procedures. The availability of objective, time-stamped berthing records enhances transparency and accountability in port operations.

Designed with indigenous hardware and software architecture, the Laser Guided Smart Docking Aid is scalable, robust, and compatible with modern port digital systems. It can be seamlessly integrated with Vessel Traffic Services (VTS), Port Management Information Systems, and Smart Port dashboards, supporting a unified operational picture.

Overall, the Indigenous Smart Docking Aid – Laser Guided System significantly strengthens berthing safety, operational control, and asset protection, enabling ports to handle increasing vessel sizes and traffic volumes with confidence, while aligning with national objectives for self-reliant, technology-driven port infrastructure.`,
    specs: [
      {
        label: "Visualisation",
        value: "Real-time 3D port environment rendering",
      },
      {
        label: "Radar Integration",
        value: "Multi-sensor fusion with 3D target projection",
      },
      {
        label: "Vessel Models",
        value: "Accurate 3D models for all vessel types",
      },
      {
        label: "View Modes",
        value: "3D perspective, top-down, approach corridor",
      },
      {
        label: "Alerts",
        value: "CPA/TCPA collision alerts with 3D visualisation",
      },
      {
        label: "Hardware",
        value: "Multi-display support, touch-enabled console",
      },
    ],
    features: [
      "The Smart Docking Aid system uses laser technology to ensure safe and efficient vessel berthing.",
      "Laser berthing aid system ensures safe vessel docking.",
      "Two laser sensors installed on the jetty continuously measure the distance between the jetty and the vessel.",
      "Calculates vessel approach speed and angle in real time.",
      "Logs vessel approach data and berthing process.",
      "Transmits data to display devices on the jetty or to the operator’s handheld PDA.",
    ],
    photos: [
      {
        src: "/assets/images/product/smart-docking/Picture2.png",
        caption: "Port approach in 3D view",
      },
      {
        src: "/assets/images/product/smart-docking/Picture1.gif",
        caption: "3D VTMS operator display",
      },
    ],
    video: null,
  },
  "keel-clearance": {
    name: "REAL TIME – Underwater Keel Clearance",
    tag: "Operations",
    accent: "#E87070",
    overview: `The Real-Time Under Keel Clearance (RT-UKC) System is an advanced decision-support tool that provides a scientific, data-driven approach to the management of under-keel clearance for ship movements in ports, harbours, and restricted waterways. The system enables safe and optimized navigation of vessels by continuously evaluating the dynamic clearance between a ship’s keel and the seabed under prevailing environmental and operational conditions.

Traditional under-keel clearance management relies on conservative static margins, often leading to operational inefficiencies, excessive dredging requirements, and sub-optimal vessel loading. The RT-UKC system overcomes these limitations by dynamically forecasting the maximum and minimum permissible under-keel clearance, recognizing that safe clearance is not a fixed value but varies with tide, waves, currents, squat, vessel speed, trim, and other components of ship motion.

By integrating real-time environmental data with vessel-specific characteristics and hydrodynamic motion models, the RT-UKC system continuously calculates the maximum safe sailing draft for each vessel transit. This allows ports and pilots to make informed decisions on vessel loading, sailing schedules, and transit windows while maintaining prescribed safety margins for maneuverability and bottom clearance.

The system provides real-time visibility of under-keel clearance throughout the vessel’s transit, delivering clear and actionable information to marine pilots and port operators. This real-time insight significantly enhances pilot confidence, enabling vessels to safely load additional cargo and maximize tonnage on every voyage without compromising navigational safety.

Operationally, the RT-UKC system delivers substantial benefits by reducing the dependency on capital and maintenance dredging. By safely exploiting available water depth through dynamic clearance management, ports can defer or minimize dredging works, leading to significant cost savings and reduced environmental impact. The system also enables earlier sailing opportunities and longer loading windows, improving berth productivity and vessel turnaround times.

Designed for seamless integration with existing port systems, the RT-UKC tool can interface with tide gauges, wave and current sensors, hydrographic survey databases, vessel traffic systems, and port decision-support platforms. Its open and scalable architecture ensures adaptability across different port configurations and vessel types.

Overall, the Real-Time Under Keel Clearance System transforms under-keel clearance management from a static, rule-based practice into a dynamic, predictive, and confidence-driven operational capability, supporting safer navigation, higher port throughput, and more efficient utilization of maritime infrastructure.`,
    specs: [
      {
        label: "Display Setup",
        value: "Multi-screen video wall with modular layout",
      },
      {
        label: "Data Feeds",
        value: "VTS, CCTV, cargo, weather, tides, utilities",
      },
      { label: "Alerts", value: "Unified alert management across all systems" },
      {
        label: "User Roles",
        value: "Role-based access for operators and managers",
      },
      { label: "Reporting", value: "Automated daily and incident reports" },
      { label: "Integration", value: "Open API integration with port systems" },
    ],
    features: [
      "RT-UKC is a scientific decision-support tool for managing Under Keel Clearance (UKC) during ship movements, ensuring safer and more efficient maritime operations.",
      "Provides a scientific approach to under keel clearance management.",
      "Dynamically forecasts max/min permissible UKC based on environmental conditions and vessel motion.",
      "Calculates the maximum safe sailing draft for each voyage.",
      "Offers real-time visibility to pilots for informed decision-making and optimized cargo loading.",
      "Reduces capital and maintenance dredging requirements.",
      "Enables earlier sailings and extended loading windows with dynamic UKC management.",
    ],
    photos: [
      {
        src: "/assets/images/product/keel-clearance/Picture2.png",
        caption: "Command Center video wall",
      },
      {
        src: "/assets/images/product/keel-clearance/Picture1.png",
        caption: "Unified operations dashboard",
      },
    ],
    video: null,
  },
  "jit-vessel": {
    name: "Just in Time (JIT) Arrival/Departure of Vessels",
    tag: "Tracking & Monitoring",
    accent: "#5BB8B2",
    overview: `The Just-in-Time (JIT) Arrival and Departure System, developed by National Technology Centre for Ports, Waterways and Coasts (NTCPWC), is an advanced digital decision-support solution designed to optimize vessel arrival, berthing, cargo operations, and departure planning in ports and terminals. The system enables ports to transition from reactive scheduling to predictive, coordinated, and efficiency-driven vessel operations, reducing congestion, fuel consumption, waiting time, and emissions.

Modern ports face significant operational challenges due to uncertain arrival times, berth conflicts, weather disruptions, and limited coordination between stakeholders. The JIT system addresses these challenges by integrating multiple real-time and planned data sources into a unified planning and forecasting framework, ensuring that vessels arrive and depart exactly when port resources are available and ready.

At the core of the JIT system is the integration of critical operational data, including berth availability, vessel particulars, AIS-based vessel movement data, and real-time meteorological information. This integrated data environment enables accurate planning for berth arrival and departure, Pilot Boarding Place (PBP) arrival, and synchronized coordination with terminal and marine operations.

The system interfaces with the Terminal Operating System (TOS) to capture the Estimated Time of Completion (ETC) of cargo and terminal operations. This information is combined with vessel readiness, berth availability, and environmental conditions to generate reliable Requested Time of Departure (RTD) at Berth, ensuring that vessels are neither delayed unnecessarily nor forced to wait at anchorage after completing operations.

Similarly, the system supports planning of the Requested Time of Arrival (RTA) at the berth and the Requested Time of Arrival at the Pilot Boarding Place (PBP). By aligning pilotage schedules, tug availability, berth readiness, and terminal preparedness, the JIT system ensures smooth and conflict-free vessel movements within port waters.

A key capability of the JIT system is its reliable Estimated Time of Arrival (ETA) prediction engine for incoming vessels. Using AIS data, vessel characteristics, route information, and prevailing weather conditions, the system continuously refines ETA forecasts. This enables port authorities, terminals, pilots, and vessel operators to plan resources proactively, minimizing idle time and last-minute operational changes.

Operationally, the JIT Arrival/Departure System delivers significant benefits, including reduced vessel waiting time at anchorage, improved berth utilization, optimized pilot and tug deployment, enhanced terminal productivity, and lower fuel consumption and emissions. By enabling vessels to adjust speed and arrival timing based on confirmed berth readiness, the system directly contributes to greener and more sustainable port operations.

Designed with an open, interoperable architecture, the NTCPWC JIT system can seamlessly integrate with Vessel Traffic Services (VTS), Port Management Information Systems (PMIS), Digital Twin platforms, and external stakeholder systems. The solution supports Smart Port initiatives by enabling collaborative decision-making, transparency, and predictability across the port call process.

Overall, the NTCPWC Just-in-Time Arrival and Departure System transforms vessel scheduling into a coordinated, data-driven, and environmentally responsible operational model, enhancing port efficiency, competitiveness, and sustainability.`,
    specs: [
      {
        label: "Coverage",
        value: "Full Indian coastline, EEZ and inland waterways",
      },
      { label: "Data Sources", value: "Terrestrial AIS, Satellite AIS, radar" },
      {
        label: "Vessel Database",
        value: "100,000+ vessel profiles with voyage history",
      },
      { label: "Update Rate", value: "Real-time with 2-second AIS refresh" },
      { label: "API", value: "REST API for third-party integration" },
      { label: "Access", value: "Web and mobile application" },
    ],
    features: [
      "Seamless integration of real-time data from various sources enables optimized planning and operations for vessel arrival and departure.",
      "Integration of berth availability, ship details, AIS, and weather data for:",
      "Berth arrival and departure",
      "Pilot boarding place (PBP) arrival",
      "Cargo operations and port departure planning",
      "Estimated Time of Completion - TOS (Terminal Operating System)",
      "Requested Time of Arrival/Departure at Berth (RTD Berth)",
      "Requested Time of Arrival at Pilot Boarding Place",
    ],
    photos: [
      {
        src: "/assets/images/product/jit/Picture1.png",
        caption: "Vessel Tracker live map view",
      },
    ],
    video: null,
  },
  "indigeneous-vts": {
    name: "Indigenous development of Vessel Traffic Services (iVTS)",
    tag: "Port Operations",
    accent: "#9B7FE8",
    overview: `The Indigenous Vessel Traffic Service (VTS) System has been developed end-to-end in India by National Technology Centre for Ports, Waterways and Coasts (NTCPWC), Indian Institute of Technology Madras, in fulfilment of the Hon’ble Prime Minister’s Atmanirbhar Bharat vision. The system was launched by the Hon’ble Union Minister, Ministry of Ports, Shipping and Waterways (MoPSW) at VoCPA on 30 September 2022 and is currently operational in eight major ports. The solution has also been implemented at Vizhinjam International Seaport, inaugurated by the Hon’ble Prime Minister on 02 May 2025, demonstrating its readiness for next-generation, high-capacity port environments.
    

The NTCPWC VTS is a fully indigenous, open-architecture vessel traffic management system designed to enhance navigational safety, traffic efficiency, environmental protection, and maritime domain awareness. The system integrates AIS, radar, CCTV, VHF, and meteorological sensors into a single unified operator environment, delivering real-time situational awareness and decision support to VTS operators and port authorities.

A key advancement of the system is the introduction of 3D Vessel Traffic Services (3D-VTS), which provides enhanced spatial, situational, and environmental awareness by visualizing vessel movements, traffic density, and environmental conditions in three dimensions. This significantly improves operator comprehension during complex traffic scenarios, adverse weather conditions, and emergency response situations.

The VTS platform is designed for seamless integration with Port Community Systems (PCS), Port Management Information Systems (PMIS), and Port Operating Systems (POS), enabling coordinated marine, terminal, and logistics operations. The system also functions as an integrated VTS framework supporting National Maritime Domain Awareness (NMDA) and broader maritime surveillance requirements, strengthening coastal and port-level security.

The solution operates as a Command, Control, and Coordination (C3) platform, enabling centralized traffic analytics, optimization of vessel movements, and coordinated response across multiple stakeholders. A Digital Pilot Card module enables real-time tracking and recording of vessel movements, approach speeds, and pilotage parameters, supporting safer pilot operations, post-voyage analysis, and performance review.

The VTS architecture is highly scalable and future-ready, with the ability to expand into berth allocation, tug allocation, and advanced decision-support functionalities, allowing ports to progressively evolve towards fully integrated Smart Port operations without system replacement.

From a governance and security perspective, MoPSW and the Government of India retain full ownership and strategic control of the source code, databases, and all critical system components. This ensures complete data sovereignty, eliminates the risk of leakage of strategically sensitive vessel movement data, and removes long-term dependence on foreign or private vendors. The availability of complete system know-how within government institutions enables the creation of a skilled national manpower pool, equipped with both theoretical knowledge and hands-on operational expertise.

Economically, the indigenous VTS delivers annual cost savings of approximately INR 1.2 crore, significantly reduces foreign exchange outflow, and ensures minimal deployment and maintenance costs. Its modular design enables rapid innovation, incorporation of global best practices, and continuous enhancement—without vendor lock-in.

Supporting long-term self-reliance, NTCPWC has also established a Next-Generation Vessel Traffic Laboratory, focused on indigenous development of VTS sensors, hardware, and core technologies. This laboratory enables continuous innovation, testing, and indigenization of critical maritime surveillance components, ensuring that India retains strategic control over its port and coastal traffic management infrastructure.

The NTCPWC Indigenous VTS represents a strategic national capability, combining safety, efficiency, security, cost savings, and technological sovereignty, while directly supporting India’s Smart Port roadmap and long-term maritime interests.`,
    specs: [
      { label: "Sensors", value: "Laser rangefinders, DGPS, wind sensors" },
      { label: "Accuracy", value: "Distance ±5cm, speed ±0.01 m/s" },
      { label: "Display", value: "Berth-mounted LED display and bridge unit" },
      {
        label: "Alert System",
        value: "Audio-visual alerts for critical approach parameters",
      },
      { label: "Data Logging", value: "Full approach manoeuvre recording" },
      {
        label: "Wind Integration",
        value: "Real-time wind speed and direction overlay",
      },
    ],
    features: [
      "First-of-its-kind” India’s indigenously developed smart and intelligent vessel traffic management system. A major leap towards Digital India and the vision of Aatma Nirbhar Bharat using cutting-edge digital technologies.",
      "Open architecture system facilitating additional features",
      "Interoperability with existing port and terminal operating systems",
      "Cost-effective and low-maintenance solutions",
      "Sensing and imaging based on AI/ML technologies",
      "Preserves national security through controlled data secrecy",
    ],
    photos: [
      {
        src: "/assets/images/product/vessel-traffic/Picture1.png",
        caption: "Smart Docking berth display unit",
      },
    ],
    video: null,
  },
  "3d-vtms": {
    name: "3D - VTMS",
    tag: "Port Operating System",
    accent: "#E8A730",
    overview: `Smart Port OS is a next-generation modular operating system for intelligent port management — designed for ports looking to modernise their digital infrastructure without replacing existing systems.

The platform provides a unified API layer that connects legacy systems, enabling gradual digital transformation while delivering immediate gains in operational visibility and efficiency.`,
    specs: [
      {
        label: "Architecture",
        value: "Modular microservices with open API gateway",
      },
      {
        label: "Compatibility",
        value: "Integrates with any existing port system via API",
      },
      { label: "Deployment", value: "On-premise, hybrid or full cloud" },
      { label: "Modules", value: "Traffic, cargo, maintenance, HR, finance" },
      { label: "Mobile", value: "Progressive web app for field operations" },
      { label: "Security", value: "ISO 27001 aligned, end-to-end encryption" },
    ],
    features: [
      "Our cutting-edge 3D Vessel Traffic Management System, created in-house by the National Technology Center for Ports, Waterways, and Coasts, is a major improvement in marine safety and navigation.",
      "This state-of-the-art system uses sophisticated 3D technology to provide real-time monitoring, accurate vessel tracking, and thorough traffic management for ports and waterways—all with the goal of improving the efficiency and security of vessel operations.",
    ],
    photos: [
      {
        src: "/assets/images/product/3D-VTMS/Picture1.png",
        caption: "Smart Port OS main dashboard",
      },
      {
        src: "/assets/images/product/3D-VTMS/Picture2.png",
        caption: "Smart Port OS main dashboard",
      },
    ],
    video: null,
  },
  "command-center": {
    name: "Integrated Command and Control Center",
    tag: "Optimisation",
    accent: "#4A9ECC",
    overview: `The Just-In-Time Vessel Arrival system optimises the arrival of vessels at port — coordinating berth readiness with vessel speed to eliminate waiting time at anchorage. JIT reduces fuel consumption, emissions and port congestion simultaneously.

The system communicates optimal arrival windows to vessels well in advance, allowing masters to reduce speed at sea and arrive exactly when a berth is available.`,
    specs: [
      {
        label: "Optimisation Engine",
        value: "ML-based berth prediction and speed advisory",
      },
      {
        label: "Communication",
        value: "Automated ETA advisory via email, API and GMDSS",
      },
      {
        label: "Integration",
        value: "Port community system, pilot booking, VTS",
      },
      { label: "Fuel Saving", value: "Up to 12% fuel saving per voyage" },
      { label: "CO₂ Reduction", value: "Estimated 8-15% per vessel call" },
      {
        label: "Monitoring",
        value: "Real-time compliance and performance dashboard",
      },
    ],
    features: [
      "The Integrated Command and Control Center is envisioned to serve as a centralized hub for real-time monitoring and intelligent decision-making across inland waterways.",
      "Centralized monitoring of traffic at each location, acting as a third eye for near real-time observation.",
      "Enables research & development of next-generation e-navigation tools using AI, ML, and advanced analytics.",
      "Centralized waterways and critical section monitoring through multi-signal operator stations—similar to River Scheldt operations.",
    ],
    photos: [
      {
        src: "/assets/images/product/control-center/Picture1.png",
        caption: "JIT system operations dashboard",
      },
    ],
    video: null,
  },
  "digital-twin": {
    name: "Digital Twin for Ports developed by NTCPWC",
    tag: "Environmental Monitoring",
    accent: "#5BB8B2",
    overview: `Ports today operate as highly interconnected systems involving marine operations, terminal handling, yard logistics, gate operations, transport interfaces, energy usage, and environmental constraints. The Simulation Engine for Digital Twins is an indigenous simulation platform developed by the National Technology Centre for Ports, Waterways and Coasts (NTCPWC) creates a living digital replica of the port, continuously synchronized with real-time data from physical sensors, operational systems, and historical databases. This enables port authorities and operators to view an accurate and dynamic representation of port conditions, including vessel movements, cargo flows, equipment status, weather, and resource utilization.


The simulation engine is designed based on a decade experience maritime domain expert to address the growing operational complexity of modern ports by providing situational awareness, intelligent decision support, and collaborative governance across the entire port ecosystem.
  

A defining strength of the Digital Twin Engine lies in its predictive simulation capability. The engine allows port managers to run “what-if” scenarios across operational, infrastructural, and environmental dimensions before implementing changes on the ground. These simulations support informed decisions related to berth allocation, quay crane assignment and scheduling, yard planning, truck routing, traffic management, and capacity expansion, thereby reducing operational risks and improving productivity.
    

The engine is built on a three-dimensional decision-support principle. The first dimension provides a 3D spatial representation of port infrastructure, including berths, terminals, yards, gates, buildings, and equipment, combined with dynamic visualization of live port processes. The second dimension enables collaborative decision-making, where multiple port stakeholders—marine, terminal, traffic, and planning authorities—operate on a shared digital platform. The third dimension incorporates advanced analytics and simulation, allowing the system to predict the impact of operational decisions on port performance, safety, congestion, and energy consumption.
    

From gate to quay, the NTCPWC Digital Twin Engine integrates real-time data from IoT devices, AIS, terminal systems, cranes, vehicles, and environmental sensors. At the gate level, it supports monitoring of truck movements, cargo flow, congestion, and equipment health, enabling optimization of gate workflows and reduction of turnaround times. In terminal and quay operations, the engine models berth allocation, crane productivity, crane scheduling, and container stacking strategies, directly linking marine-side and land-side operations to avoid bottlenecks.


The engine also supports predictive maintenance and asset optimization by leveraging historical and real-time data to anticipate equipment failures and maintenance needs. This minimizes unplanned downtime and improves reliability across critical port assets. Integrated energy and sustainability analytics enable ports to assess energy consumption patterns, test green initiatives, and reduce their environmental footprint through data-driven optimization.

Designed with an open, modular, and scalable architecture, the NTCPWC Digital Twin Simulation Engine can integrate with existing Port Management Information Systems (PMIS), Vessel Traffic Services (VTS), Terminal Operating Systems (TOS), and Smart Port dashboards. Its indigenous development ensures adaptability to Indian port conditions, data sovereignty, and long-term sustainability without vendor lock-in.

Overall, the Simulation Engine transforms digital twins from static visual tools into active, predictive, and intelligence-driven operational platforms, empowering ports to achieve higher efficiency, safety, resilience, and sustainability while supporting India’s Smart Port and Atmanirbhar Bharat objectives.`,
    specs: [
      {
        label: "Parameters",
        value: "Wind, waves, tide, current, visibility, temperature",
      },
      {
        label: "Sensors",
        value: "Wave buoys, weather stations, tide gauges, ADCPs",
      },
      {
        label: "Numerical Models",
        value: "Wave and surge forecasting up to 72 hours",
      },
      {
        label: "Alert System",
        value: "Automated SMS/email alerts for threshold breach",
      },
      {
        label: "Data Archive",
        value: "Long-term archive for climate and design studies",
      },
      { label: "Display", value: "Web dashboard and VTS integration" },
    ],
    features: [
      "Real-time weather and oceanographic monitoring",
      "72-hour wave and surge forecast",
      "Automated threshold alerts for port operations",
      "Tide prediction and surge correction",
      "Long-term data archive for design studies",
      "Integration with VTS and Port OS",
    ],
    photos: [
      {
        src: "/assets/images/product/digital-twin/Digital Twin_1.gif",
        caption: "Hydromet monitoring dashboard",
      },
      {
        src: "/assets/images/product/digital-twin/Picture1.jpg",
        caption: "Hydromet monitoring dashboard",
      },
    ],
    video: null,
  },
  "vessel-tracker": {
    name: "Vessel Tracker – Inland Waterways",
    tag: "Hydrographic Survey",
    accent: "#E87070",
    overview: `The Indigenous Vessel Tracking System for Inland Waterways is a low-cost, mobile-first navigation and surveillance solution developed in India to enhance safety, situational awareness, and traffic management across inland and coastal waters. Designed specifically for ferries, small crafts, and fishing vessels, the system addresses the operational gap where conventional AIS- and VHF-based solutions are either economically unviable or technically impractical for smaller vessels.

The solution is delivered through a smartphone-based application compatible with both Android and iOS platforms, enabling rapid and scalable adoption without the need for specialized onboard hardware. The application is currently available free of cost on the Play Store and App Store, providing digital navigation charts and Least Available Depth (LAD) information for major National Waterways. This ensures that even small vessel operators have access to authoritative, safety-critical navigation information in real time.

The Vessel Tracking System has been enhanced with AIS integration, allowing it to operate seamlessly within mixed traffic environments where both AIS-equipped and non-AIS vessels coexist. Integration with the PANI portal has been completed, enabling centralized visibility of inland vessel movements and strengthening data-driven waterway management. The system is also fully interoperable with Vessel Traffic Services (VTS) and River Information Systems (RIS), ensuring continuity between inland waterways and port/coastal surveillance frameworks.

A centralized, web-based dashboard provides authorities with real-time traffic visualization, vessel tracking, and surveillance capabilities. This dashboard supports traffic management, incident monitoring, and operational coordination, enabling a unified view of vessel movements across waterways. The system currently supports over 2,000 vessels in active operation across National Waterways, demonstrating its scalability, robustness, and acceptance by the user community.

The implementation of the Vessel Tracking System across all National Waterways is presently in progress, marking a significant step toward comprehensive digital coverage of India’s inland navigation network. By leveraging widely available mobile technology, the system significantly reduces deployment and maintenance costs while ensuring rapid nationwide rollout.

In a notable extension of its operational relevance, the system has recently been implemented in the Mumbai Harbour area by the Indian Navy (Western Region) as part of the National Maritime Domain Awareness framework. This deployment underscores the system’s reliability, security, and suitability not only for civilian inland navigation but also for strategic maritime surveillance applications.

The Indigenous Vessel Tracking System represents a cost-effective, scalable, and interoperable national solution that strengthens inland waterway safety, improves traffic management, supports maritime domain awareness, and aligns strongly with India’s Atmanirbhar Bharat and Smart Waterways objectives.`,
    specs: [
      {
        label: "Vessel Type",
        value: "Remotely operated autonomous surface vessel",
      },
      {
        label: "Echo Sounder",
        value: "Multi-beam MBES for full-swath coverage",
      },
      {
        label: "Positioning",
        value: "DGPS with real-time kinematic correction",
      },
      { label: "Operational Depth", value: "0.3m to 30m water depth range" },
      { label: "Endurance", value: "8+ hours continuous operation per charge" },
      {
        label: "Data Output",
        value: "Real-time processed bathymetric point cloud",
      },
    ],
    features: [
      "Android and iOS-based low-cost navigation solution designed for ferries, small crafts, and fishing vessels operating across inland waterways.",
      "The system has been enhanced to enable seamless integration with Vessel Traffic Services (VTS) and River Information Services (RIS), including additional sensor layers from both platforms to ensure comprehensive situational awareness.",
      "It is being implemented on a large scale across all National Waterways, including the Indo-Bangladesh Protocol Route, enabling real-time vessel tracking and promoting safe navigation for a diverse fleet of inland vessels.",
    ],
    photos: [
      {
        src: "/assets/images/product/vessel-tracker/Picture3.png",
        caption: "Autonomous survey vessel in operation",
      },
      {
        src: "/assets/images/product/vessel-tracker/Picture2.png",
        caption: "Multi-beam sonar data collection",
      },
      {
        src: "/assets/images/product/vessel-tracker/Picture1.jpg",
        caption: "Multi-beam sonar data collection",
      },
    ],
    video: null,
  },
  "smart-port-os": {
    name: "Smart port operating system",
    tag: "Maintenance",
    accent: "#9B7FE8",
    overview: `Successfully implemented at VOCPA as part of the integration between Vessel Traffic Services (VTS) and the Port Operating System (POS). This includes seamless integration of vessel data with port operations and the implementation of a handheld-based Pilot Card system to track pilot movements in real time.

    A pilot project in collaboration with the Indian Ports Association (IPA) is underway to enhance the existing POS into a Smart POS for VOCPA. The objective is to ensure interoperability across various port IT systems while leveraging emerging technologies like Artificial Intelligence (AI) and Machine Learning (ML) to optimize operations and improve productivity.`,
    specs: [
      {
        label: "Monitoring",
        value: "Real-time dredge position, depth and production",
      },
      {
        label: "Fleet Tracking",
        value: "GPS tracking for all dredgers and barges",
      },
      {
        label: "Sensors",
        value: "DGPS, depth sensors, flow meters, fuel monitors",
      },
      { label: "Planning", value: "Integrated dredge campaign planning tool" },
      {
        label: "Disposal",
        value: "Barge filling and disposal site monitoring",
      },
      { label: "Reporting", value: "Daily production and compliance reports" },
    ],
    features: [
      "Real-time dredging production monitoring",
      "Intelligent campaign planning from survey data",
      "Barge loading and disposal site tracking",
      "Fuel consumption and emissions monitoring",
      "Regulatory compliance reporting",
      "Integration with port hydrographic systems",
    ],
    photos: [
      {
        src: "/assets/images/product/smart-port/Vessel Tracker.jpg",
        caption: "Dredging management dashboard",
      },
      {
        src: "/assets/images/product/smart-port/Picture1.png",
        caption: "Fleet tracking map view",
      },
      {
        src: "/assets/images/product/smart-port/Picture2.png",
        caption: "Fleet tracking map view",
      },
      {
        src: "/assets/images/product/smart-port/Picture3.png",
        caption: "Fleet tracking map view",
      },
    ],
    video: null,
  },
  "marina-ai": {
    name: "Marina AI",
    tag: "Artificial Intelligence",
    accent: "#E8A730",
    overview: `Marina AI is an AI-driven marina management platform that automates berth allocation, optimises occupancy and enhances the experience for boat owners and marina operators alike.

Using machine learning, Marina AI predicts demand, automates reservation management and provides real-time guidance to incoming vessels — making marina operations efficient, transparent and profitable.`,
    specs: [
      {
        label: "AI Engine",
        value: "ML demand forecasting and dynamic berth pricing",
      },
      {
        label: "Berth Allocation",
        value: "Automated optimal berth assignment algorithm",
      },
      {
        label: "Vessel Guidance",
        value: "Real-time berth guidance display at entrance",
      },
      {
        label: "Owner Portal",
        value: "Mobile app for boat owners — booking and billing",
      },
      {
        label: "Utilities",
        value: "Smart metering for electricity and water per berth",
      },
      {
        label: "Analytics",
        value: "Occupancy, revenue and seasonal trend analytics",
      },
    ],
    features: [
      "AI-based optimal berth allocation",
      "Dynamic pricing based on demand forecasting",
      "Boat owner mobile app for reservations",
      "Smart utility metering per berth",
      "Real-time marina occupancy dashboard",
      "Revenue analytics and seasonal forecasting",
    ],
    photos: [],
    video: [
      {
        src: "/assets/images/product/marina-ai/Media1.mp4",
        caption: "Marina AI management dashboard",
      },
      {
        src: "/assets/images/product/marina-ai/VTMS_ Marina_AI_HD.mp4",
        caption: "Marina AI management dashboard",
      },
    ],
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData[id];
  const [lightbox, setLightbox] = useState(null);
  if (!product) {
    return (
      <div className="pd-404">
        <p>Product not found.</p>
        <a href="/products">← Back to Products</a>
      </div>
    );
  }

  return (
    <div className="pd-page">
      {/* HERO */}
      <section className="pd-hero" style={{ "--accent": product.accent }}>
        <div className="pd-hero__img-wrap">
          <img
            src={product.photos[0]?.src}
            alt={product.name}
            className="pd-hero__img"
          />
          <div className="pd-hero__scrim" />
        </div>

        <div className="pd-hero__content">
          <a href="/products" className="pd-back">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            All Products
          </a>
          <span className="pd-tag" style={{ color: product.accent }}>
            {product.tag}
          </span>
          <h1 className="pd-name">{product.name}</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="pd-overview">
        <div className="pd-overview__inner">
          <div className="pd-overview__left">
            <p className="pd-eyebrow">Overview</p>
            <h2 className="pd-heading">About this product.</h2>
          </div>
          <div className="pd-overview__right">
            {product.overview.split("\n\n").map((para, i) => (
              <p key={i} className="pd-para">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="pd-specs">
        <div className="pd-specs__inner">
          <p className="pd-eyebrow">Specifications</p>
          <div className="pd-specs-grid">
            {product.specs.map((s, i) => (
              <div key={i} className="pd-spec-row">
                <span className="pd-spec-row__label">{s.label}</span>
                <span className="pd-spec-row__value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pd-features">
        <div className="pd-features__inner">
          <div className="pd-features__left">
            <p className="pd-eyebrow pd-eyebrow--light">Key Features</p>
            <h2 className="pd-heading pd-heading--light">What it does.</h2>
          </div>
          <ul className="pd-feat-list">
            {product.features.map((f, i) => (
              <li key={i} className="pd-feat-item">
                <span
                  className="pd-feat-item__n"
                  style={{ color: product.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pd-feat-item__text">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pd-gallery">
        <div className="pd-gallery__inner">
          <p className="pd-eyebrow">Gallery</p>
          <h2 className="pd-heading">Photos.</h2>
          <div className="pd-photo-grid">
            {product.photos.map((p, i) => (
              <div key={i} className="pd-photo" onClick={() => setLightbox(i)}>
                <img src={p.src} alt={p.caption} className="pd-photo__img" />
                <div className="pd-photo__overlay">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      {product.video && product.video.length > 0 && (
        <section className="pd-video">
          <div className="pd-video__inner">
            <p className="pd-eyebrow">Video</p>
            <h2 className="pd-heading">See it in action.</h2>

            <div className="pd-video-grid">
              {product.video.map((v, i) => (
                <div key={i} className="pd-video-item">
                  <video className="pd-video-player" controls src={v.src} />
                  <p className="pd-video-caption">{v.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BACK */}
      <section className="pd-footer">
        <div className="pd-footer__inner">
          <a href="/products" className="pd-back-btn">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to all products
          </a>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="pd-lightbox" onClick={() => setLightbox(null)}>
          <div
            className="pd-lightbox__inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="pd-lightbox__close"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
            <img
              src={product.photos[lightbox].src}
              alt={product.photos[lightbox].caption}
              className="pd-lightbox__img"
            />
            <p className="pd-lightbox__cap">
              {product.photos[lightbox].caption}
            </p>
            <div className="pd-lightbox__nav">
              <button
                onClick={() =>
                  setLightbox(
                    (lightbox - 1 + product.photos.length) %
                      product.photos.length,
                  )
                }
              >
                ←
              </button>
              <span>
                {lightbox + 1} / {product.photos.length}
              </span>
              <button
                onClick={() =>
                  setLightbox((lightbox + 1) % product.photos.length)
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
