import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <span className="font-bold text-xl text-white">
        <span className="text-vuighe-pink">Vui</span>Ghe
      </span>
    </Link>
  );
}
