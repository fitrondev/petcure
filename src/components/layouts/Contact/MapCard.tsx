import { MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MapCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lokasi Kami</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted flex aspect-video items-center justify-center rounded-lg">
          <div className="space-y-2 text-center">
            <div className="bg-primary/10 mx-auto flex size-12 items-center justify-center rounded-full">
              <MapPin className="text-primary size-6" />
            </div>
            <p className="text-muted-foreground text-sm">
              Peta lokasi akan ditampilkan di sini
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapCard;
