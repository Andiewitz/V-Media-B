'use client';

import React from 'react';
import { SparksCarousel } from './ui/sparks-carousel';

export function CampaignChannelsSection() {
  const items = [
    {
      id: "social-media",
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80",
      title: "Social Media Marketing — Facebook, Instagram & TikTok campaigns",
      count: 4,
      countLabel: "Active Channels",
    },
    {
      id: "web-dev",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      title: "Website Development — Next.js, React & WordPress engineering",
      count: 3,
      countLabel: "Frameworks",
    },
    {
      id: "email",
      imageSrc: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&auto=format&fit=crop&q=80",
      title: "Email Marketing — Automated flows via Mailchimp & Klaviyo",
      count: 2,
      countLabel: "Platforms",
    },
    {
      id: "content",
      imageSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80",
      title: "Content Creation — YouTube, Canva & Adobe CC production",
      count: 5,
      countLabel: "Asset Types",
    },
    {
      id: "ui-ux",
      imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&auto=format&fit=crop&q=80",
      title: "UI/UX Design — Figma, Framer & Storybook prototyping",
      count: 4,
      countLabel: "Design Tools",
    },
    {
      id: "google-ads",
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80",
      title: "Google Search SEM — Direct-intent paid acquisition campaigns",
      count: 3,
      countLabel: "Campaign Types",
    },
  ];

  return (
    <section 
      id="campaign-channels"
      className="relative bg-[#1E1E1E] text-white py-16 px-6 md:px-12 w-full z-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SparksCarousel
          title="Campaign Channels"
          subtitle="Platforms & tools we deploy across every service."
          items={items}
        />
      </div>
    </section>
  );
}
