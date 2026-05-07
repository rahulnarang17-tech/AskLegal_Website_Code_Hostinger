import React from 'react';
import bentley from '@/assets/logos/bentley.svg';
import siemens from '@/assets/logos/siemens.svg';
import toyota from '@/assets/logos/toyota.svg';
import kotak from '@/assets/logos/kotak.svg';
import pnb from '@/assets/logos/pnb.svg';
import ansys from '@/assets/logos/ansys.svg';
import oyo from '@/assets/logos/oyo.svg';
import tata from '@/assets/logos/tata.svg';
import sbi from '@/assets/logos/sbi.svg';
import bmw from '@/assets/logos/bmw.svg';
import shriram from '@/assets/logos/shriram.svg';
import kogta from '@/assets/logos/kogta.svg';

const logos = [
  { name: 'Bentley Systems', src: bentley },
  { name: 'Siemens Digital Industries', src: siemens },
  { name: 'Toyota Financial Services', src: toyota },
  { name: 'Kotak Mahindra Bank', src: kotak },
  { name: 'Punjab National Bank', src: pnb },
  { name: 'Ansys', src: ansys },
  { name: 'OYO', src: oyo },
  { name: 'Tata CLiQ', src: tata },
  { name: 'SBI Cards', src: sbi },
  { name: 'BMW Financial Services', src: bmw },
  { name: 'Shriram Finance', src: shriram },
  { name: 'Kogta Financial', src: kogta }
];

const ClientLogos = () => {
  // Duplicate logos to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden relative py-8 marquee-container">
      {/* Gradient masks for smooth fade in/out at edges */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-marquee items-center">
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-20"
          >
            <img 
              src={logo.src} 
              alt={`${logo.name} logo`} 
              className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;