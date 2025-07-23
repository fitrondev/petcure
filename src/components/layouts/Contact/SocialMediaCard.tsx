import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SocialMediaItem {
  id: string;
  name: string;
  icon: LucideIcon;
  url: string;
}

type SocialMediaCardProps = {
  socialMedia: SocialMediaItem[];
};

const SocialMediaCard = ({ socialMedia }: SocialMediaCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ikuti Kami</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          {socialMedia.map((social) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={social.id}
                to={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex size-12 items-center justify-center rounded-lg transition-colors"
                aria-label={social.name}
              >
                <IconComponent className="size-5" />
              </Link>
            );
          })}
        </div>
        <p className="text-muted-foreground mt-4 text-sm">
          Dapatkan tips perawatan hewan, update layanan terbaru, dan konten
          menarik lainnya di media sosial kami.
        </p>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
