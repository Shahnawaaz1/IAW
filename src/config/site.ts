/**
 * Single source of truth for dealership contact + brand info.
 * Sourced directly from https://iawforce.com/
 */
export const site = {
  name: "IAW FORCE",
  legalName: "IAW Force Motors",
  brandSubtitle: "FORCE MOTORS VEHICLES",
  topbarText: "IAW FORCE · COMMERCIAL & PASSENGER MOBILITY",
  tagline: "Move People. Move Business.",
  heroHeading: "MOVE PEOPLE.\nMOVE BUSINESS.",
  heroLead:
    "Explore Force Motors passenger, commercial and purpose-built vehicles—with expert guidance from selection to service.",
  city: "Gorakhpur",
  state: "Uttar Pradesh",
  region: "Eastern Uttar Pradesh",
  country: "India",
  addressLine: "GIDA, Sector 5",
  locality: "Gorakhpur, Uttar Pradesh - 273209",
  phone: "1800-889-6927",
  phoneHref: "tel:18008896927",
  whatsapp: "+91 84295 40902",
  whatsappHref: "https://wa.me/918429540902?text=Hi%20IAW%20Force%2C%20I%20would%20like%20to%20enquire%20about%20Force%20vehicles.",
  email: "sales@iawforce.com",
  emailHref: "mailto:sales@iawforce.com",
  infoEmail: "info@iawforce.com",
  hours: [
    { days: "Monday – Saturday", time: "9:30 AM – 7:30 PM" },
    { days: "Sunday", time: "10:00 AM – 5:00 PM" },
  ],
  directionsUrl: "https://maps.google.com/?q=GIDA+Gorakhpur+Force+Motors",
  url: "https://iawforce.com",
  googleSheetWebhookUrl:
    "https://script.google.com/macros/s/AKfycby31nG4JN6VL6q10nhaFqgwcN4RuGZTF3ym_W0AEm7TN_Ti1gOFt0Fn3bxvEg_HaSIA5g/exec",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Applications", href: "/applications" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroStats = [
  { value: "8+", label: "Vehicle ranges", sub: "Commercial & Passenger" },
  { value: "4", label: "Mobility applications", sub: "School, Tour, Medical, Cargo" },
  { value: "1", label: "Trusted local team", sub: "Gorakhpur & Eastern UP" },
] as const;

export const quickActions = [
  {
    num: "01",
    title: "Get On-Road Price",
    subtitle: "Personalised quotation & tax breakdown",
    href: "#contact",
    action: "quote",
  },
  {
    num: "02",
    title: "Fleet Enquiry",
    subtitle: "Custom solutions for your business",
    href: "#contact",
    action: "fleet",
  },
] as const;
