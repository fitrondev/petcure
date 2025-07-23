import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type ContactInfoCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
};

const ContactInfoCard = ({
  icon: IconComponent,
  title,
  value,
  description,
}: ContactInfoCardProps) => {
  return (
    <Card className="group transition-shadow hover:shadow-lg">
      <CardContent className="flex items-start gap-4 p-6">
        <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-3 transition-colors">
          <IconComponent className="text-primary size-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-foreground font-medium">{value}</p>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;
