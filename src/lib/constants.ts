import {
  Building2,
  Hammer,
  Home,
  Paintbrush,
  Puzzle,
  ClipboardCheck,
  Clock,
  MessageSquare,
  Shield,
  Star,
  Wrench,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Building modern homes designed around client needs. From custom builds to volume housing, we deliver quality residential projects.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Professional construction solutions for businesses and developers. Office spaces, retail fit-outs, and commercial developments.",
  },
  {
    icon: Paintbrush,
    title: "Renovations",
    description:
      "Transforming existing spaces with modern upgrades. Kitchen, bathroom, and full home renovations completed to the highest standard.",
  },
  {
    icon: Hammer,
    title: "Extensions",
    description:
      "Expanding properties with quality craftsmanship. Additions, ground floor, and second-storey extensions built to complement your home.",
  },
  {
    icon: Puzzle,
    title: "Interior Fit-outs",
    description:
      "Creating functional and beautiful interiors. Commercial and residential fit-outs tailored to your specifications.",
  },
  {
    icon: Wrench,
    title: "Project Management",
    description:
      "End-to-end project oversight ensuring your build stays on time, on budget, and to specification.",
  },
];

export const projects = [
  {
    title: "Modern Family Residence",
    location: "Sydney, NSW",
    type: "Residential",
    description:
      "A contemporary 4-bedroom family home featuring open-plan living, floor-to-ceiling windows, and seamless indoor-outdoor integration.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Riverside Office Development",
    location: "Melbourne, VIC",
    type: "Commercial",
    description:
      "A 3-storey commercial office building with sustainable design features, modern amenities, and premium finishing throughout.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Luxury Home Renovation",
    location: "Brisbane, QLD",
    type: "Renovation",
    description:
      "Complete transformation of a 1960s Queenslander into a modern luxury residence while preserving its heritage character.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "Working with IronBuild was an excellent experience. They delivered our project on time and exceeded expectations in every way. The attention to detail was outstanding.",
    name: "David Wilson",
    role: "Homeowner, Sydney",
  },
  {
    quote:
      "Professional team with great attention to detail. Our commercial fit-out was completed ahead of schedule with minimal disruption to our business operations.",
    name: "Emma Roberts",
    role: "Business Owner, Melbourne",
  },
  {
    quote:
      "High-quality workmanship from start to finish. IronBuild transformed our outdated home into a modern masterpiece we're proud to call our own.",
    name: "Michael Taylor",
    role: "Property Developer, Brisbane",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Discuss project requirements, goals, and vision. We assess feasibility and provide initial guidance.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Create detailed designs, budgets, and timelines. Every aspect is planned before construction begins.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Professional execution with rigorous quality control. Regular updates keep you informed throughout.",
  },
  {
    number: "04",
    title: "Completion",
    description:
      "Final inspection, defect rectification, and project handover. We ensure everything meets our standards.",
  },
];

export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "250+", label: "Completed Projects" },
  { value: "98%", label: "Client Satisfaction" },
];

export const trustBadges = [
  { icon: CheckCircle2, label: "Licensed Builders" },
  { icon: Shield, label: "Fully Insured" },
  { icon: ClipboardCheck, label: "Safety Certified" },
  { icon: Star, label: "Quality Guaranteed" },
];

export const whyChooseUs = [
  {
    icon: Building2,
    title: "Experienced Builders",
    description:
      "Over 15 years of industry knowledge and expertise delivering projects of all sizes across Australia.",
  },
  {
    icon: Hammer,
    title: "Quality Materials",
    description:
      "We use only reliable, tested materials and proven construction methods to ensure lasting results.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Keeping clients updated throughout every stage of the project with regular progress reports.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Focused on completing projects efficiently without compromising on quality or craftsmanship.",
  },
];

export const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(02) 5555 6789",
    href: "tel:+61255556789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@ironbuildconstruction.com",
    href: "mailto:hello@ironbuildconstruction.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Sydney, Australia",
    href: "#",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation",
  "Extension",
  "Interior Fit-out",
  "Project Management",
  "Other",
];

export const budgetRanges = [
  "Under $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "$500,000 - $1,000,000",
  "$1,000,000+",
  "Not Sure Yet",
];
