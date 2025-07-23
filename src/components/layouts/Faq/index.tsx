import SectionTitle from "@/components/common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/data";

const Faq = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          title="Pertanyaan yang"
          highlightedText="Sering Diajukan"
          subtitle="Temukan jawaban untuk pertanyaan umum tentang layanan perawatan hewan di PetCure. Jika Anda memiliki pertanyaan lain, jangan ragu untuk menghubungi kami."
          titleClassName="text-center"
          subtitleClassName="text-center"
        />

        {/* FAQ Accordion */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-border bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-base font-semibold">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
