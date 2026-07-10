export interface ServiceItem {
  id: number;
  category: string;
  title: string;
  shortDesc: string;
  modalDesc: string;
  price: string;
  duration: string;
  benefits: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    category: "Hair",
    title: "Haircut & Style",
    shortDesc:
      "Signature precision cuts tailored to your face shape and lifestyle.",
    modalDesc:
      "Every haircut begins with a consultation — not a formula. Using Japanese-steel shears and precise layering, our senior stylists sculpt movement into every strand.",
    price: "From ₹450",
    duration: "45 mins",
    benefits: ["Professional Consultation", "Premium Products", "Luxury Styling Finish"],
    image:
      "https://images.unsplash.com/photo-1734111719430-fe4a3973f8af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxoYWlyJTIwc3R5bGluZyUyMHByZWNpc2V8ZW58MHx8fHwxNzgzNTYwOTk5fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: 2,
    category: "Hair",
    title: "Hair Colouring",
    shortDesc:
      "Balayage, ombré, gloss and global colour using L'Oréal Professionnel and Wella — applied with the eye of an artist.",
    modalDesc:
      "From barely-there balayage to bold global transformations — our colourists map placement to enhance bone structure, using bond-protecting formulations for luminous, healthy hair.",
    price: "From ₹1,200",
    duration: "90 mins",
    benefits: ["L'Oréal & Wella Colour", "Bond Protection", "Gloss Finish"],
    image:
      "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMHByZWNpc2V8ZW58MHx8fHwxNzgzNTYwOTk5fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: 3,
    category: "Bridal",
    title: "Bridal Makeup",
    shortDesc:
      "From engagement to wedding day — artistry that photographs beautifully.",
    modalDesc:
      "HD-compatible artistry using luxury products that wear weightlessly while photographing flawlessly. Every look begins with a trial and ends with a transfer-proof finish.",
    price: "From ₹4,999",
    duration: "2 hrs",
    benefits: ["Trial Session Included", "HD & Flash-Friendly", "Long-Wear Formula"],
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    id: 4,
    category: "Skin",
    title: "Facial Treatments",
    shortDesc:
      "Hydra-facials, gold-leaf rituals and deep-clean therapies that restore your skin's natural luminosity.",
    modalDesc:
      "Multi-step facials formulated around your skin's current state — deep-clean clay therapies to gold-leaf luminosity rituals. Every treatment leaves your skin breathing better.",
    price: "From ₹699",
    duration: "60 mins",
    benefits: ["Skin Analysis", "Multi-Step Protocol", "Personalised Serum"],
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    id: 5,
    category: "Nails",
    title: "Nail Art & Care",
    shortDesc:
      "Gel extensions, hand-painted art and spa manicures — every detail refined to perfection.",
    modalDesc:
      "Hand-filed shaping, meticulous cuticle work and gel applications that last without lifting. Every finger finished with a top-coat that mirrors glass.",
    price: "From ₹399",
    duration: "45 mins",
    benefits: ["Hand-Filed Shaping", "Long-Wear Gel", "Spa Finish"],
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  },
  {
    id: 6,
    category: "Treatment",
    title: "Threading & Waxing",
    shortDesc:
      "Deep-conditioning rituals, scalp treatments and Kerastase therapies that transform damaged hair from root to tip.",
    modalDesc:
      "Precision threading and gentle waxing in a serene environment. Every brow shaped to complement your bone structure, every wax formulated for sensitive skin.",
    price: "From ₹899",
    duration: "30 mins",
    benefits: ["Sensitive Skin Formula", "Expert Brow Mapping", "Post-Care Soothing"],
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80",
  },
  {
    id: 7,
    category: "Treatment",
    title: "Hair Spa & Therapy",
    shortDesc:
      "Deep-conditioning spa, hydration and scalp therapy rituals.",
    modalDesc:
      "Olaplex bond repair and Kérastase nutrient-infused treatments delivered through warm-oil massage and steam infusion. Your scalp breathes. Your strands rebuild.",
    price: "From ₹1,200",
    duration: "75 mins",
    benefits: ["Bond Repair", "Scalp Massage", "Kérastase Ritual"],
    image:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
  },
];
