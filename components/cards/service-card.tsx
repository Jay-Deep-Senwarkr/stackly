import type { LucideIcon } from "lucide-react";
import { CardSpotlight } from "../ui/card-spotlight";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <CardSpotlight
      className="h-full border-[#8899aa]/20 bg-[#1e2a38]"
      color="#c9a84c"
    >
      <div className="relative z-20">
        <Icon className="h-8 w-8 text-[#c9a84c]" />

        <h3 className="mt-6 text-xl font-semibold text-[#f5f0e8]">{title}</h3>

        <p className="mt-4 leading-relaxed text-[#8899aa]">{description}</p>
      </div>
    </CardSpotlight>
  );
}
