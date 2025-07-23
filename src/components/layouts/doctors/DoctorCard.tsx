import { Award, Clock, Mail, Phone } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Doctor } from "@/constants/data";

type DoctorCardProps = {
  doctor: Doctor;
};

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="group gap-4 overflow-hidden pt-0 transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{doctor.name}</h3>
            <p className="text-sm opacity-90">{doctor.title}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Specialization & Experience */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Award className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-medium">
                {doctor.specialization}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Pengalaman: {doctor.experience}
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {doctor.description}
          </p>

          {/* Education */}
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Pendidikan:</h4>
            <p className="text-muted-foreground text-xs">{doctor.education}</p>
          </div>

          {/* Schedule */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="text-primary h-4 w-4" />
              <span className="text-sm font-medium">Jadwal Praktik:</span>
            </div>
            <div className="space-y-1">
              {doctor.schedule.map((schedule, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{schedule.day}</span>
                  <span className="font-medium">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Sertifikasi & Pencapaian:</h4>
            <ul className="space-y-1">
              {doctor.achievements.slice(0, 2).map((achievement, index) => (
                <li
                  key={index}
                  className="text-muted-foreground flex items-start gap-1 text-xs"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
              {doctor.achievements.length > 2 && (
                <li className="text-primary text-xs font-medium">
                  +{doctor.achievements.length - 2} lainnya
                </li>
              )}
            </ul>
          </div>

          {/* Contact Actions */}
          <div className="flex gap-2 border-t pt-4">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`tel:${doctor.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Telepon
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`mailto:${doctor.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
