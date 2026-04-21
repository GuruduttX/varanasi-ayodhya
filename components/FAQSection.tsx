import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is included in the tour packages?", a: "Our packages include accommodation, guided temple visits, all ritual arrangements, meals, local transportation, and a dedicated guide. Premium packages also include flight booking assistance and VIP darshan passes." },
  { q: "Is the trip suitable for elderly travelers?", a: "Absolutely. We design our itineraries with comfort in mind, offering accessible vehicles, minimal walking options, and dedicated assistance for senior travelers." },
  { q: "How do I prepare for a pilgrimage?", a: "We send a detailed preparation guide upon booking, covering dress codes, temple etiquette, items to carry, and practical tips. Our team also offers a pre-trip consultation call." },
  { q: "Can I customize my travel package?", a: "Yes! Every journey can be tailored. Whether you want extra days, a specific puja arrangement, or a detour to Prayagraj — we personalize everything to your needs." },
  { q: "What is your cancellation policy?", a: "Full refund up to 15 days before departure, 50% refund up to 7 days before. We also offer rescheduling at no extra cost for unforeseen circumstances." },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-3">Questions & Answers</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg px-5 border border-border shadow-sm">
              <AccordionTrigger className="font-heading text-sm font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
