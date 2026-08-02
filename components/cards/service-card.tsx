import { Icon } from "lucide-react";
import { CardSpotlight } from "../ui/card-spotlight";

<CardSpotlight
  className="h-full bg-[#1e2a38] border-[#8899aa]/20"
  color="#c9a84c"
>
  <Icon className="h-8 w-8 text-[#c9a84c]" />

  <h3 className="mt-6 text-xl font-semibold text-[#f5f0e8]">
    {title}
  </h3>

  <p className="mt-4 text-[#8899aa] leading-relaxed">
    {description}
  </p>
</CardSpotlight>