"use client";

import { ShoppingBag } from "lucide-react";

type Props = {
  productId: string;
  productHandle: string;
  color: string;
};

export default function AddToCartButton({ productHandle, color }: Props) {
  const shopifyUrl = `https://kimpatches.com/products/${productHandle}`;

  return (
    <a
      href={shopifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-white font-medium text-base hover:opacity-90 transition-opacity"
      style={{ backgroundColor: color }}
    >
      <ShoppingBag size={18} />
      Acquista ora
    </a>
  );
}
