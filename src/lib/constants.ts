export const BUSINESS = {
  name: "Glass Shine Unisex Salon & Academy",
  shortName: "Glass Shine",
  tagline: "Salon & Academy",
  description: "Premium unisex salon and academy in Barasat, Kolkata, offering world-class hair, skin, and beauty services since 2010.",
  phone: "08777025057",
  whatsapp: "918777025057",
  email: "hello@glassshinesalon.com",
  address: "1, 41/A/8, Mitra Para Rd, near Dukbanglow, Barowaritola, Barasat, Kolkata, West Bengal 700124",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5!2d88.45!3d22.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8995fe9776f2b%3A0x1c5d60b778d8994f!2sGlass%20Shine%20Unisex%20Salon%20%26%20Academy!5e0!3m2!1sen!2sin!4v1",
  rating: 4.9,
  reviews: 379,
  hours: {
    "Mon-Sat": "10:30 AM – 9:00 PM",
    "Sunday": "10:30 AM – 8:00 PM",
  },
  social: {
    facebook: "https://www.facebook.com/styledmantra/",
    instagram: "https://www.instagram.com/glassshinesalon/",
    youtube: "https://www.youtube.com/@glassshinesalon",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Hair Styling & Color",
    description: "Expert cuts, balayage, ombre, keratin treatments, and gloss services tailored to your unique style.",
    icon: "scissors",
    features: ["Haircut & Blow-dry", "Balayage & Ombre", "Keratin Treatment", "Hair Colouring", "Gloss & Glaze"],
    image: "/images/service-hair.jpg",
    gradient: "from-amber-500/20 to-rose-500/20",
  },
  {
    title: "Skin & Facial Care",
    description: "Rejuvenating facials, clean-ups, and advanced skin treatments for a radiant, glowing complexion.",
    icon: "sparkles",
    features: ["Deep Cleansing Facial", "Gold Facial", "Anti-Aging Treatment", "Acne Care", "Bridal Package"],
    image: "/images/service-skin.jpg",
    gradient: "from-rose-500/20 to-purple-500/20",
  },
  {
    title: "Nail Art & Care",
    description: "Premium manicure, pedicure, and artistic nail designs to keep your hands and feet beautiful.",
    icon: "heart",
    features: ["Classic Manicure", "Gel Nails", "Nail Art Design", "Pedicure Spa", "Paraffin Treatment"],
    image: "/images/service-nails.jpg",
    gradient: "from-pink-500/20 to-amber-500/20",
  },
  {
    title: "Bridal & Makeup",
    description: "Complete bridal packages with professional makeup, hairstyling, and draping for your special day.",
    icon: "crown",
    features: ["Bridal Makeup", "Engagement Look", "Party Makeup", "Draping Service", "Trial Sessions"],
    image: "/images/service-bridal.jpg",
    gradient: "from-rose-500/20 to-amber-500/20",
  },
  {
    title: "Body Waxing & Grooming",
    description: "Gentle and effective waxing services for a smooth, hair-free look. Beard trimming for men.",
    icon: "star",
    features: ["Full Body Waxing", "Facial Waxing", "Beard Trim", "Threading", "Rica Wax"],
    image: "/images/service-waxing.jpg",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Academy & Training",
    description: "Professional beauty and hairstyling courses with hands-on training and certification.",
    icon: "graduation",
    features: ["Hair Styling Course", "Makeup Artistry", "Skin Care Diploma", "Nail Tech Course", "Advanced Bridal"],
    image: "/images/service-academy.jpg",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priyanka B.",
    text: "Better than any salon nowadays. This is the only place where I am satisfied with my hair spa. Especially the massage is really relaxing. They don't force you to get services you don't need.",
    rating: 5,
    service: "Hair Spa",
  },
  {
    name: "Arunima S.",
    text: "Glass Shine really provides quality service and maintains good levels of hygiene. Must experience the wellness! Extremely satisfied with facial services.",
    rating: 5,
    service: "Facial",
  },
  {
    name: "Rahul D.",
    text: "Overall excellent experience. Excellent service. Awesome and friendly staff. Good sanitization. Beautiful zen-like ambience. Convenient location. Reasonable rates.",
    rating: 5,
    service: "Haircut & Beard",
  },
  {
    name: "Sneha M.",
    text: "I've been coming here for 3 years and the quality has only improved. My go-to salon for everything from haircuts to bridal makeup. Highly recommended!",
    rating: 5,
    service: "Bridal Package",
  },
  {
    name: "Debashish C.",
    text: "The best unisex salon in Barasat. Very professional staff, amazing service, and they use premium products. The academy trains really talented hairstylists.",
    rating: 5,
    service: "Hair Colouring",
  },
  {
    name: "Riya G.",
    text: "Love the ambiance! It's so peaceful and clean. The nail art is incredible and the makeup artists truly understand what works for your face. 10/10 recommend.",
    rating: 5,
    service: "Nail Art",
  },
];

export const TEAM = [
  {
    name: "Priyanka Sharma",
    role: "Founder & Creative Director",
    bio: "With over 15 years of experience, Priyanka has trained at top academies in India and abroad. Her vision drives Glass Shine's excellence.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=85&fit=crop&crop=face",
    social: "priyanka.sharma",
  },
  {
    name: "Ananya Das",
    role: "Senior Hair Stylist",
    bio: "Specializing in balayage, keratin treatments, and precision cuts. Ananya has transformed hundreds of clients with her expert touch.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=85&fit=crop&crop=face",
    social: "ananya.das",
  },
  {
    name: "Rohan Sen",
    role: "Makeup Artist & Beauty Expert",
    bio: "Master of bridal and editorial makeup, Rohan brings a creative flair to every look. Trained at Lakmé Academy.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&fit=crop&crop=face",
    social: "rohan.sen",
  },
  {
    name: "Maya Ghosh",
    role: "Skin & Wellness Specialist",
    bio: "Expert in advanced skincare treatments and facials. Maya ensures every client leaves with glowing, healthy skin.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=85&fit=crop&crop=face",
    social: "maya.ghosh",
  },
  {
    name: "Arjun Kapoor",
    role: "Nail Artist & Grooming Expert",
    bio: "From classic manicures to avant-garde nail art, Arjun's precision and creativity make him a client favorite.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=85&fit=crop&crop=face",
    social: "arjun.kapoor",
  },
  {
    name: "Sara Khan",
    role: "Academy Head & Trainer",
    bio: "Leading the education vertical at Glass Shine, Sara has mentored over 200 students now running their own successful salons.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&fit=crop&crop=face",
    social: "sara.khan",
  },
];

export const PRICING = [
  {
    tier: "Essential",
    price: "₹499",
    period: "starting from",
    description: "Perfect for quick grooming and basic services.",
    features: ["Haircut & Blow-dry", "Basic Facial", "Eyebrow Threading", "Manicure", "Shampoo & Condition"],
    highlighted: false,
  },
  {
    tier: "Premium",
    price: "₹1,999",
    period: "starting from",
    description: "Our most popular package for complete pampering.",
    features: ["Keratin Treatment", "Gold Facial", "Gel Nail Art", "Pedicure Spa", "Hair Spa", "Makeup Application"],
    highlighted: true,
  },
  {
    tier: "Luxury",
    price: "₹4,999",
    period: "starting from",
    description: "The ultimate salon experience with exclusive services.",
    features: ["Bridal Makeup", "Balayage/Ombre", "Anti-Aging Facial", "Full Body Waxing", "Paraffin Treatment", "Complete Nail Care", "Complimentary Products"],
    highlighted: false,
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consultation",
    description: "We begin with a detailed consultation to understand your needs, preferences, and expectations.",
    icon: "chat",
  },
  {
    step: 2,
    title: "Personalization",
    description: "Our experts design a customized treatment plan tailored to your hair type, skin tone, and style goals.",
    icon: "wand",
  },
  {
    step: 3,
    title: "The Experience",
    description: "Relax in our zen-like ambiance while our skilled professionals work their magic with premium products.",
    icon: "sparkles",
  },
  {
    step: 4,
    title: "The Reveal",
    description: "See the transformation. We ensure every detail is perfect before you step out feeling confident and beautiful.",
    icon: "heart",
  },
];

export const STATS = [
  { label: "Happy Clients", value: "15,000+" },
  { label: "Services Done", value: "50,000+" },
  { label: "Years of Excellence", value: "15+" },
  { label: "Students Trained", value: "500+" },
  { label: "Google Rating", value: "4.9" },
  { label: "Awards Won", value: "12+" },
];
