import { ProductSpotlight } from "@/components/ProductSpotlight";
import { brewo } from "@/lib/content";

export function BrewoSpotlight() {
  return (
    <ProductSpotlight
      id={brewo.id}
      name="brewo"
      badge={brewo.badge}
      tagline={brewo.tagline}
      description={brewo.description}
      contributions={brewo.contributions}
      tags={brewo.tags}
      logo={brewo.logo}
      delay={0.05}
      actions={[
        { href: brewo.links.site, label: "Visit brewo.io" },
        {
          href: brewo.links.subscribe,
          label: "Subscribe",
          variant: "ghost",
        },
      ]}
    />
  );
}
