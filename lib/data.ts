export const siteData = {
  name: "NTCPWC",
  fullName: "National Technology Centre for Ports, Waterways and Coasts",
  tagline: "Advancing India's Maritime Future",
  description:
    "Research, technology and solutions for safe, efficient and sustainable ports, waterways and coastal regions.",
  email: "director@ntcpwc.gov.in",
  phone: "+91-44-2230-0000",
  address: "NTCPWC, IIT Madras Campus, Chennai – 600 036, Tamil Nadu, India",
  socials: {
    twitter: "https://twitter.com/ntcpwc",
    linkedin: "https://linkedin.com/company/ntcpwc",
    youtube: "https://youtube.com/@ntcpwc",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About NTCPWC", href: "/about" },
      { label: "Vision & Mandate", href: "/about#vision" },
      { label: "Institutional Leadership", href: "/people" },
      { label: "Organizational Structure", href: "/about#structure" },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    children: [
      { label: "Overview of Labs", href: "/facilities" },
      { label: "3D Wave Basin", href: "/facilities#wave-basin" },
      { label: "2D Wave Flumes", href: "/facilities#wave-flume" },
      { label: "HPC Numerical Modeling", href: "/facilities#numerical-modeling" },
      { label: "Offshore Survey Vessel", href: "/facilities#survey-vessel" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Technical Services", href: "/services" },
      { label: "Ports & Harbour Engineering", href: "/services#ports" },
      { label: "Coastal Defense & Erosion", href: "/services#coastal" },
      { label: "Inland Waterways & Dredging", href: "/services#waterways" },
      { label: "Environmental Assessments", href: "/services#environment" },
    ],
  },
  {
    label: "Research & Development",
    href: "/research",
    children: [
      { label: "R&D Overview", href: "/research" },
      { label: "Deepwater Port Design", href: "/research#port-infrastructure" },
      { label: "Wave-Structure Interaction", href: "/research#coastal-offshore" },
      { label: "Marine Geosciences", href: "/research#marine-geosciences" },
      { label: "Green Ports & Blue Carbon", href: "/research#environmental" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Indigenous Tech Overview", href: "/products" },
      { label: "Autonomous Survey Vessel (USV)", href: "/products#usv" },
      { label: "Real-Time Coastal Network", href: "/products#monitoring" },
      { label: "Dredging Optimization Suite", href: "/products#dredging" },
    ],
  },
  {
    label: "Training & Education",
    href: "/training-education",
    children: [
      { label: "Executive Maritime Courses", href: "/training-education" },
      { label: "Port Engineering Workshops", href: "/training-education#workshops" },
      { label: "Internships & Fellowships", href: "/training-education#fellowships" },
    ],
  },
  {
    label: "People",
    href: "/people",
    children: [
      { label: "Director & Leadership", href: "/people#leadership" },
      { label: "Faculty & Domain Heads", href: "/people#heads" },
      { label: "Research Scientists", href: "/people#scientists" },
      { label: "Technical Engineering Staff", href: "/people#engineers" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Publications & Guidelines", href: "/publications" },
      { label: "News & Events", href: "/news-events" },
      { label: "Contact Us", href: "/contact" },
      { label: "Admin Operations Portal", href: "/admin" },
    ],
  },
];

export const stats = [
  { value: 156, label: "Publications", suffix: "+" },
  { value: 42, label: "Active Projects", suffix: "+" },
  { value: 89, label: "Reports Published", suffix: "+" },
  { value: 25, label: "Years of Excellence", suffix: "+" },
];

export const services = [
  {
    id: "ports",
    icon: "Anchor",
    title: "Ports & Harbour Engineering",
    description: "Advanced research in port design, harbour structures, and navigation safety.",
    color: "#0f2b48",
  },
  {
    id: "coastal",
    icon: "Waves",
    title: "Coastal Engineering",
    description: "Shoreline protection, coastal erosion studies, and beach management.",
    color: "#0284c7",
  },
  {
    id: "waterways",
    icon: "Navigation",
    title: "Waterways & Navigation",
    description: "Inland waterway development, sedimentation and dredging research.",
    color: "#0d9488",
  },
  {
    id: "environment",
    icon: "Leaf",
    title: "Environmental Studies",
    description: "Marine ecology, water quality and environmental impact assessments.",
    color: "#10b981",
  },
  {
    id: "numerical",
    icon: "BarChart3",
    title: "Numerical Modeling",
    description: "Hydrodynamic and wave modeling using state-of-the-art numerical tools.",
    color: "#2563eb",
  },
  {
    id: "capacity",
    icon: "GraduationCap",
    title: "Capacity Building & Training",
    description: "Specialized training programmes for maritime and coastal professionals.",
    color: "#d97706",
  },
];

export const researchAreas = [
  {
    id: "port-infrastructure",
    title: "Port Infrastructure & Operations",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
    category: "Infrastructure",
    description:
      "Comprehensive studies on deepwater port design, berth optimization, automated cargo handling, and structural integrity.",
    projects: 14,
  },
  {
    id: "coastal-offshore",
    title: "Coastal & Offshore Engineering",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80",
    category: "Coastal",
    description:
      "Breakwater design, shoreline defense, wave-structure interaction, storm surge modeling, and sediment dynamics.",
    projects: 18,
  },
  {
    id: "marine-geosciences",
    title: "Marine Geosciences & Hydrodynamics",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
    category: "Marine",
    description:
      "High-resolution seabed mapping, sub-bottom profiling, geotechnical surveys, and 3D hydrodynamic flume modeling.",
    projects: 11,
  },
  {
    id: "environmental",
    title: "Environmental Sustainability & Green Ports",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    category: "Environment",
    description:
      "Eco-dredging management, marine ecology assessment, blue carbon preservation, and coastal climate resilience.",
    projects: 15,
  },
];

export const publications = [
  {
    id: 1,
    type: "Technical Report",
    title: "Wave Climate Analysis for Indian Coast",
    date: "12 Aug 2025",
    status: "Published",
    category: "technical",
    downloads: 1240,
  },
  {
    id: 2,
    type: "Research Paper",
    title: "Sediment Transport in Coastal Regions",
    date: "08 Aug 2025",
    status: "Published",
    category: "research",
    downloads: 890,
  },
  {
    id: 3,
    type: "Project Report",
    title: "Harbour Hydraulic Model Studies",
    date: "02 Aug 2025",
    status: "Published",
    category: "technical",
    downloads: 654,
  },
  {
    id: 4,
    type: "Guidelines",
    title: "Coastal Resilience and Adaptation",
    date: "20 Jul 2025",
    status: "Draft",
    category: "guidelines",
    downloads: 432,
  },
  {
    id: 5,
    type: "Technical Report",
    title: "Dredging Standards for Indian Ports",
    date: "15 Jul 2025",
    status: "Published",
    category: "technical",
    downloads: 768,
  },
  {
    id: 6,
    type: "Research Paper",
    title: "Tidal Hydrodynamics of Coastal Estuaries",
    date: "01 Jul 2025",
    status: "Published",
    category: "research",
    downloads: 543,
  },
];

export const newsEvents = [
  {
    id: 1,
    type: "News",
    title: "NTCPWC Launches Advanced Coastal Monitoring Network",
    date: "10 Aug 2025",
    excerpt: "A new real-time coastal monitoring network spanning 2,000 km of India's coastline.",
    image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=800&q=80",
    category: "Announcement",
  },
  {
    id: 2,
    type: "Event",
    title: "International Symposium on Coastal Engineering 2025",
    date: "25 Sep 2025",
    excerpt: "Join leading experts for a three-day symposium on sustainable coastal engineering.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Event",
  },
  {
    id: 3,
    type: "News",
    title: "New MoU Signed with PIANC for Research Collaboration",
    date: "05 Aug 2025",
    excerpt: "NTCPWC signs MoU with PIANC to strengthen international research partnerships.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    category: "Partnership",
  },
];

export const teamMembers = [
  {
    name: "Dr. A. Ramaswamy",
    title: "Director",
    qualification: "PhD, IIT Madras",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Dr. Priya Menon",
    title: "Head, Coastal Engineering",
    qualification: "PhD, NIT Calicut",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Dr. Suresh Kumar",
    title: "Head, Marine Geosciences",
    qualification: "PhD, IISER Pune",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Dr. Kavitha Nair",
    title: "Head, Environmental Studies",
    qualification: "PhD, JNU",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export const adminStats = [
  { label: "Pages", value: 42, published: 36, draft: 6, icon: "FileText", color: "#0f2b48" },
  { label: "Publications", value: 156, published: 132, draft: 24, icon: "BookOpen", color: "#0284c7" },
  { label: "Reports", value: 89, published: 75, draft: 8, icon: "BarChart3", color: "#2563eb" },
  { label: "Announcements", value: 27, published: 22, draft: 5, icon: "Bell", color: "#d97706" },
];

export const chartData = [
  { date: "Jul 14", visitors: 3200, pageViews: 8100 },
  { date: "Jul 21", visitors: 4100, pageViews: 10200 },
  { date: "Jul 28", visitors: 3800, pageViews: 9500 },
  { date: "Aug 04", visitors: 5200, pageViews: 13100 },
  { date: "Aug 11", visitors: 4800, pageViews: 12300 },
  { date: "Aug 18", visitors: 6100, pageViews: 15400 },
  { date: "Aug 25", visitors: 5700, pageViews: 14200 },
];

export const contentStatusData = [
  { name: "Published", value: 165, color: "#10b981" },
  { name: "Draft", value: 34, color: "#0284c7" },
  { name: "Under Review", value: 10, color: "#d97706" },
  { name: "Archived", value: 5, color: "#94a3b8" },
];

export const topContent = [
  { rank: 1, title: "Home Page", views: 14326 },
  { rank: 2, title: "Publications", views: 8412 },
  { rank: 3, title: "Research Areas", views: 6218 },
  { rank: 4, title: "About NTCPWC", views: 5904 },
  { rank: 5, title: "Coastal Engineering", views: 4823 },
];

export const recentActivities = [
  { icon: "BookOpen", title: "New publication added", subtitle: "Wave Climate Analysis for Indian Coast", time: "2 hours ago", color: "#0f2b48" },
  { icon: "FileText", title: "Page updated", subtitle: "About NTCPWC", time: "3 hours ago", color: "#0284c7" },
  { icon: "Bell", title: "New announcement", subtitle: "Workshop on Coastal Resilience", time: "1 day ago", color: "#d97706" },
  { icon: "BarChart3", title: "Report uploaded", subtitle: "Harbour Model Study Report", time: "2 days ago", color: "#2563eb" },
  { icon: "Image", title: "Media added", subtitle: "Port Infrastructure Gallery", time: "2 days ago", color: "#10b981" },
];

export const facilities = [
  {
    id: "wave-flume",
    title: "2D Wave Flume",
    category: "Hydraulic",
    description: "60m long flume for wave-structure interaction studies with precision wave generation.",
    image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=800&q=80",
    specs: ["Length: 60m", "Width: 2m", "Depth: 2.5m", "Max wave height: 0.6m"],
  },
  {
    id: "wave-basin",
    title: "3D Wave Basin",
    category: "Hydraulic",
    description: "Multi-directional wave basin for complex port and coastal model testing.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    specs: ["Area: 30m × 25m", "Multi-directional waves", "Active absorption", "Moveable carriage"],
  },
  {
    id: "numerical-modeling",
    title: "HPC Numerical Modeling Centre",
    category: "Numerical",
    description: "High-performance computing facility for large-scale hydrodynamic and wave modeling.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    specs: ["256-core HPC cluster", "DELFT3D", "MIKE by DHI", "OpenFOAM"],
  },
  {
    id: "survey-vessel",
    title: "Offshore Survey Vessel",
    category: "Field Survey",
    description: "Equipped research vessel for multi-beam bathymetry, sediment sampling, and oceanographic surveys.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
    specs: ["28m LOA", "Multi-beam MBES", "ADCP", "Sub-bottom profiler"],
  },
  {
    id: "sediment-lab",
    title: "Sediment Analysis Laboratory",
    category: "Laboratory",
    description: "Full-fledged sediment characterization lab with particle size analysis and geotechnical testing.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    specs: ["Laser diffractometer", "SEM imaging", "Geotechnical testing", "Grain size analysis"],
  },
  {
    id: "water-quality",
    title: "Water Quality Laboratory",
    category: "Laboratory",
    description: "State-of-the-art laboratory for marine water quality and pollution analysis.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80",
    specs: ["ICP-MS", "HPLC", "Total organic carbon analyzer", "Dissolved oxygen meters"],
  },
];

export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80", alt: "Port Infrastructure", category: "Ports" },
  { id: 2, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80", alt: "Coastal Research", category: "Coastal" },
  { id: 3, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", alt: "Beach Survey", category: "Field Work" },
  { id: 4, src: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=800&q=80", alt: "Monitoring Equipment", category: "Equipment" },
  { id: 5, src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", alt: "Laboratory Work", category: "Laboratory" },
  { id: 6, src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", alt: "Conference", category: "Events" },
  { id: 7, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", alt: "Numerical Modeling", category: "Research" },
  { id: 8, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Symposium 2024", category: "Events" },
  { id: 9, src: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80", alt: "Water Quality Testing", category: "Laboratory" },
  { id: 10, src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80", alt: "Team Training", category: "Training" },
  { id: 11, src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80", alt: "Director Meeting", category: "Events" },
  { id: 12, src: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&q=80", alt: "Coastal Survey", category: "Field Work" },
];
