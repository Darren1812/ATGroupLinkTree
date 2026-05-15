"use client";

import { useState } from "react";
import Image from "next/image";
const links = [
  {
    id: "website",
    label: "Official Website",
    sub: "atgroup.com.my",
    href: "https://atgroup.com.my",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-5 h-5'
      >
        <circle cx='12' cy='12' r='10' />
        <line x1='2' y1='12' x2='22' y2='12' />
        <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
      </svg>
    ),
    color: "#1a3c8f",
    bg: "#e8edf8",
  },
  {
    id: "facebook",
    label: "Facebook",
    sub: "atpsalesandservices",
    href: "https://facebook.com/atpsalesandservices",
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
      </svg>
    ),
    color: "#1877f2",
    bg: "#e7f0fd",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    sub: "+60 16 717 0107",
    href: "https://wa.me/60167170107",
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
        <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z' />
      </svg>
    ),
    color: "#25d366",
    bg: "#e6f9ee",
  },
  {
    id: "instagram",
    label: "Instagram",
    sub: "@atp_sales_services_sdn_bhd",
    href: "https://www.instagram.com/atp_sales_services_sdn_bhd/",
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
      </svg>
    ),
    color: "#e1306c",
    bg: "#fce8f0",
  },
  {
    id: "youtube",
    label: "YouTube",
    sub: "@ATPSALESSERVICESSDNBHD",
    href: "https://www.youtube.com/@ATPSALESSERVICESSDNBHD",
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
        <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
      </svg>
    ),
    color: "#ff0000",
    bg: "#ffe8e8",
  },
  {
    id: "tiktok",
    label: "TikTok",
    sub: "@atp.sales.services",
    href: "https://www.tiktok.com/@atp.sales.services",
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
        <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z' />
      </svg>
    ),
    color: "#010101",
    bg: "#f0f0f0",
  },
  {
    id: "lazada",
    label: "Lazada",
    sub: "ATP Sales & Services",
    href: "https://www.lazada.com.my/shop/atp-sales-services-plotter-copier-supplier",
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
        <path d='M6.5 2h11A1.5 1.5 0 0 1 19 3.5v1A1.5 1.5 0 0 1 17.5 6h-11A1.5 1.5 0 0 1 5 4.5v-1A1.5 1.5 0 0 1 6.5 2z' />
        <path d='M4 8h16l-1.5 11H5.5L4 8z' />
        <path d='M9.5 11v5M14.5 11v5' />
      </svg>
    ),
    color: "#f57224",
    bg: "#fff3eb",
  },
  {
    id: "googlemaps",
    label: "Google Maps",
    sub: "ATP Sales & Services Sdn Bhd JB",
    href: "https://maps.google.com/?q=ATP+Sales+and+Services+Sdn+Bhd+Johor+Bahru",
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
        <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
      </svg>
    ),
    color: "#34a853",
    bg: "#e8f5e9",
  },
];

export default function ATGroupLinks() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <main className='min-h-screen bg-[#f2f3f5] flex items-start justify-center py-10 px-4'>
      <div className='w-full max-w-[480px]'>
        {/* Header */}
        <div className='flex flex-col items-center mb-8'>
          {/* Logo */}
          <div className='w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border border-gray-100 overflow-hidden'>
            <Image
              src='/20231122_AT_GROUP_LOGO_ROUND[1]_2.png'
              alt='AT Group Logo'
              width={80}
              height={80}
              className='object-contain w-full h-full'
            />
          </div>
          <h1 className='text-2xl font-bold text-gray-800 tracking-tight'>
            AT Group
          </h1>
          <p className='text-sm text-gray-500 mt-1'>
            @ATGroup1984 · Since 1984
          </p>
          <p className='text-xs text-center text-gray-400 mt-2 max-w-xs'>
            Your trusted partner for plotters, copiers & office solutions in
            Johor Bahru.
          </p>
        </div>

        {/* Links */}
        <div className='flex flex-col gap-3'>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
              className='group flex items-center gap-4 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]'
              style={{
                borderLeftWidth: hoveredId === link.id ? "4px" : "1px",
                borderLeftColor: hoveredId === link.id ? link.color : "#f3f4f6",
              }}
            >
              {/* Icon box */}
              <div
                className='flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110'
                style={{ background: link.bg, color: link.color }}
              >
                {link.icon}
              </div>

              {/* Text */}
              <div className='flex-1 min-w-0'>
                <p className='font-semibold text-gray-800 text-sm leading-tight'>
                  {link.label}
                </p>
                <p className='text-xs text-gray-400 truncate mt-0.5'>
                  {link.sub}
                </p>
              </div>

              {/* Arrow */}
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-4 h-4 text-gray-300 flex-shrink-0 transition-all duration-200 group-hover:text-gray-500 group-hover:translate-x-0.5'
              >
                <path d='M5 12h14M12 5l7 7-7 7' />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className='text-center text-xs text-gray-400 mt-8'>
          © {new Date().getFullYear()} AT Group · Since 1984 · Johor Bahru,
          Malaysia
        </p>
      </div>
    </main>
  );
}
