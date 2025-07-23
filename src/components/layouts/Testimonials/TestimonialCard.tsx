import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/constants/data";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card>
      <CardContent className="space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              key={index}
              className="size-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Testimonial Content */}
        <blockquote className="text-muted-foreground">
          "{testimonial.content}"
        </blockquote>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="size-12">
              <AvatarImage
                src={"https://github.com/shadcn.png"}
                alt={testimonial.name}
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {/* Online indicator */}
            <div className="absolute -right-0 -bottom-0 size-3 rounded-full bg-green-500 ring-2 ring-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">
              {testimonial.name}
            </span>
            <span className="text-muted-foreground text-sm leading-none">
              {testimonial.role}
            </span>
            {testimonial.petName && testimonial.petType && (
              <span className="text-muted-foreground mt-1 text-xs">
                Pet: {testimonial.petName} ({testimonial.petType})
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
