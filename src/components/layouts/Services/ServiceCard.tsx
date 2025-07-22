import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/constants/data";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = service.icon;

  return (
    <Card className="group bg-card relative gap-4 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader>
        <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-pink-100 transition-all duration-300 group-hover:scale-110 dark:from-blue-900/30 dark:to-pink-900/30">
          <IconComponent className="size-8 text-blue-600 dark:text-blue-400" />
        </div>

        <CardTitle className="text-foreground text-xl font-bold">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{service.description}</p>

        {/* Features List */}
        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="size-4 text-green-500" />
              <span className="text-muted-foreground text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="outline" className="w-full">
          Pelajari Lebih Lanjut
        </Button>
      </CardContent>

      {/* Decorative Element */}
      <div className="absolute -top-8 -right-8 size-16 rounded-full bg-gradient-to-br from-blue-200 to-pink-200 opacity-20 transition-all duration-300 group-hover:scale-150 dark:from-blue-800/30 dark:to-pink-800/30" />
    </Card>
  );
};

export default ServiceCard;
