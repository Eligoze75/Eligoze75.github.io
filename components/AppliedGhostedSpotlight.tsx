import { ProductSpotlight } from "@/components/ProductSpotlight";
import { appliedGhosted } from "@/lib/content";

export function AppliedGhostedSpotlight() {
  return (
    <ProductSpotlight
      id={appliedGhosted.id}
      name={appliedGhosted.name}
      badge={appliedGhosted.badge}
      tagline={appliedGhosted.tagline}
      description={appliedGhosted.description}
      contributions={appliedGhosted.contributions}
      tags={appliedGhosted.tags}
      logo={appliedGhosted.logo}
      logoDark
      actions={[
        {
          href: appliedGhosted.links.site,
          label: "Visit appliednghosted.com",
        },
      ]}
    />
  );
}
