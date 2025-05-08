import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaLink: string;
  ctaText: string;
  imageSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaLink,
  ctaText,
  imageSrc,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xODgtLjk1NiAyLjE4OC0yLjE4OCAwLTEuMjMtLjk1Ni0yLjE4OC0yLjE4OC0yLjE4OC0xLjIzIDAtMi4xODguOTU2LTIuMTg4IDIuMTg4IDAgMS4yMy45NTYgMi4xODggMi4xODggMi4xODh6TTI0IDQ4YzEuMjMgMCAyLjE4OC0uOTU2IDIuMTg4LTIuMTg4IDAtMS4yMy0uOTU2LTIuMTg4LTIuMTg4LTIuMTg4LTEuMjMgMC0yLjE4OC45NTYtMi4xODggMi4xODggMCAxLjIzLjk1NiAyLjE4OCAyLjE4OCAyLjE4OHpNNDggMzBjMS4yMyAwIDIuMTg4LS45NTYgMi4xODgtMi4xODggMC0xLjIzLS45NTYtMi4xODgtMi4xODgtMi4xODgtMS4yMyAwLTIuMTg4Ljk1Ni0yLjE4OCAyLjE4OCAwIDEuMjMuOTU2IDIuMTg4IDIuMTg4IDIuMTg4ek0xMiAzMGMxLjIzIDAgMi4xODgtLjk1NiAyLjE4OC0yLjE4OCAwLTEuMjMtLjk1Ni0yLjE4OC0yLjE4OC0yLjE4OC0xLjIzIDAtMi4xODguOTU2LTIuMTg4IDIuMTg4IDAgMS4yMy45NTYgMi4xODggMi4xODggMi4xODh6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0zNiAzMGMxLjIzIDAgMi4xODgtLjk1NiAyLjE4OC0yLjE4OCAwLTEuMjMtLjk1Ni0yLjE4OC0yLjE4OC0yLjE4OC0xLjIzIDAtMi4xODguOTU2LTIuMTg4IDIuMTg4IDAgMS4yMy45NTYgMi4xODggMi4xODggMi4xODh6TTI0IDMwYzEuMjMgMCAyLjE4OC0uOTU2IDIuMTg4LTIuMTg4IDAtMS4yMy0uOTU2LTIuMTg4LTIuMTg4LTIuMTg4LTEuMjMgMC0yLjE4OC45NTYtMi4xODggMi4xODggMCAxLjIzLjk1NiAyLjE4OCAyLjE4OCAyLjE4OHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            {subtitle}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Optional image */}
      {imageSrc && (
        <div className="mt-12 max-w-4xl mx-auto px-4">
          <img
            src={imageSrc}
            alt="Hero illustration"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;