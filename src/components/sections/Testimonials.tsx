"use client";

import { useId } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

interface Review {
  id: number;
  name: string;
  initials: string;
  title: string;
  text: string;
  rating: number;
  highlight?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Priyanka B.",
    initials: "PB",
    title: "Hair Spa",
    text: "Better than any salon nowadays. This is the only place where I am satisfied with my hair spa. The massage is really relaxing. They don't force you to get services you don't need.",
    rating: 5,
    highlight: "Best hair spa in Barasat",
  },
  {
    id: 2,
    name: "Arunima S.",
    initials: "AS",
    title: "Facial",
    text: "Glass Shine really provides quality service and maintains good levels of hygiene. Must experience the wellness! Extremely satisfied with the facial services.",
    rating: 5,
    highlight: "Quality service & hygiene",
  },
  {
    id: 3,
    name: "Rahul D.",
    initials: "RD",
    title: "Haircut & Beard",
    text: "Overall excellent experience. Excellent service, awesome and friendly staff. Good sanitization. Beautiful zen-like ambience. Convenient location. Reasonable rates.",
    rating: 5,
    highlight: "Excellent experience",
  },
  {
    id: 4,
    name: "Sneha M.",
    initials: "SM",
    title: "Bridal Package",
    text: "I've been coming here for 3 years and the quality has only improved. My go-to salon for everything from haircuts to bridal makeup. Highly recommended!",
    rating: 5,
    highlight: "3 years and counting",
  },
  {
    id: 5,
    name: "Debashish C.",
    initials: "DC",
    title: "Hair Colouring",
    text: "The best unisex salon in Barasat. Very professional staff, amazing service, and they use premium products. The academy trains really talented hairstylists.",
    rating: 5,
    highlight: "Best in Barasat",
  },
  {
    id: 6,
    name: "Riya G.",
    initials: "RG",
    title: "Nail Art",
    text: "Love the ambiance! It's so peaceful and clean. The nail art is incredible and the makeup artists truly understand what works for your face.",
    rating: 5,
    highlight: "Incredible nail art",
  },
  {
    id: 7,
    name: "Aniket R.",
    initials: "AR",
    title: "Keratin Treatment",
    text: "I was skeptical about keratin treatment but the results were phenomenal. My hair has never been this smooth. The staff explained everything thoroughly.",
    rating: 5,
    highlight: "Phenomenal results",
  },
  {
    id: 8,
    name: "Tanya S.",
    initials: "TS",
    title: "Bridal Makeup",
    text: "They made my wedding day absolutely perfect. The makeup lasted all day and looked flawless in every photo. Can't thank the team enough!",
    rating: 5,
    highlight: "Wedding day perfection",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-[#c8a566]"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 15.585l-5.878 3.09 1.123-6.545L.489 7.59l6.572-.955L10 .73l2.939 5.905 6.572.955-4.756 4.54 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ review }: { review: Review }) {
  return (
    <article
      className="w-[85vw] max-w-[300px] sm:max-w-[340px] md:max-w-[380px] shrink-0 rounded-2xl border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8a566]"
      tabIndex={0}
      aria-label={`Review by ${review.name}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full bg-[#c8a566] flex items-center justify-center text-white text-sm font-semibold select-none"
            aria-hidden="true"
          >
            {review.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)] leading-tight">
              {review.name}
            </p>
            <p className="text-xs text-[var(--muted)] mt-0.5">
              {review.title}
            </p>
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>

      <p className="text-sm leading-relaxed text-[var(--foreground)]/70 line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>

      {review.highlight && (
        <div className="mt-4 pt-4 border-t border-[rgba(0,0,0,0.04)] dark:border-[rgba(255,255,255,0.04)]">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#c8a566]">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {review.highlight}
          </span>
        </div>
      )}
    </article>
  );
}

export default function Testimonials() {
  const headingId = useId();

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32"
      aria-labelledby={headingId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 md:mb-18">
        <SectionHeading
          id={headingId}
          tag="Testimonials"
          title="What Our Clients Say"
          subtitle="Rated 4.9★ from 379+ reviews on Google. Here's what our clients have to say about their experience at Glass Shine."
        />
      </div>

      <InfiniteMarquee
        direction="left"
        speed={25}
        className="mb-6"
        ariaLabel="Client testimonials, first row"
      >
        {reviews.map((review) => (
          <TestimonialCard key={review.id} review={review} />
        ))}
      </InfiniteMarquee>

      <InfiniteMarquee
        direction="right"
        speed={28}
        ariaLabel="Client testimonials, second row"
      >
        {reviews.slice(4).concat(reviews.slice(0, 4)).map((review) => (
          <TestimonialCard key={`r2-${review.id}`} review={review} />
        ))}
      </InfiniteMarquee>
    </section>
  );
}
