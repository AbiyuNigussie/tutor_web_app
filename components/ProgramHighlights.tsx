import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export type ProgramHighlightsProps = {
  title?: string;
  description?: string;
  items?: string[];
  featured?: {
    imageAriaLabel?: string;
    title: string;
    description: string;
    bullets: string[];
  };
};

const DEFAULT_ITEMS = [
  "Private On-Site Training",
  "Leadership Training",
  "Customer Service Training",
  "Corporate Training",
];

const DEFAULT_FEATURED = {
  imageAriaLabel: "placeholder image",
  title: "Sales Excellence Program",
  description:
    "Our comprehensive sales training program combines proven methodologies with modern techniques to help your team exceed targets and build lasting customer relationships.",
  bullets: [
    "Consultative selling techniques",
    "Pipeline management and forecasting",
    "Objection handling and closing strategies",
    "CRM optimization and sales analytics",
  ],
};

export default function ProgramHighlights({
  title = "Program Highlights",
  description = "Explore our comprehensive training programs designed to address every aspect of professional development and organizational growth.",
  items = DEFAULT_ITEMS,
  featured = DEFAULT_FEATURED,
}: ProgramHighlightsProps) {
  return (
    <section className="bg-gray-50">
      <Section className="py-12">
        <h3 className="text-3xl font-bold text-[#111] text-center">{title}</h3>
        <p className="mt-4 max-w-3xl mx-auto text-center text-[#555] text-lg">
          {description}
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <Card padded>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-[#111]">Sales Training</h4>
                <div
                  className="w-5 h-5 bg-gray-200 rounded"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-[#555]">
                Master proven sales methodologies, relationship building, and
                closing techniques to drive revenue growth and exceed targets
                consistently.
              </p>
            </Card>
            {/* Consolidate repeated items using a map */}
            {items.map((title) => (
              <Card
                key={title}
                padded
                className="flex items-center justify-between"
              >
                <span className="font-semibold text-[#111]">{title}</span>
                <div
                  className="w-5 h-5 bg-gray-200 rounded"
                  aria-hidden="true"
                />
              </Card>
            ))}
          </div>

          <Card padded>
            <div
              className="w-full aspect-video bg-gray-200 rounded-md"
              aria-label={featured.imageAriaLabel || "placeholder image"}
            />
            <h4 className="mt-6 text-xl font-bold text-[#111]">
              {featured.title}
            </h4>
            <p className="mt-3 text-[#555]">{featured.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-[#555]">
              {featured.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </section>
  );
}
