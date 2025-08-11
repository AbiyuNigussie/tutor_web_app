import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

type Props = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: Props) {
  return (
    <Section className="py-12 md:py-16 lg:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight leading-tight">
          {title}
        </h1>
        <p className="mt-5 text-[#555555] text-lg leading-7">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg">Start the Transformation</Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
        <div className="mt-8 text-xs font-medium text-[#111] tracking-wide">
          CHOOSE YOUR PATH
        </div>
        <div className="mt-3 flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm">
            Individuals
          </span>
          <span className="px-4 py-2 rounded-full bg-gray-50 text-[#555] text-sm">
            Scaling Companies
          </span>
          <span className="px-4 py-2 rounded-full bg-gray-50 text-[#555] text-sm">
            Enterprise
          </span>
        </div>
      </div>
      <div>
        <div
          className="w-full aspect-[4/3] bg-gray-100 rounded-xl"
          aria-label="placeholder image"
        />
        <div
          className="hidden md:block w-full aspect-[4/3] bg-gray-100 rounded-xl mt-6"
          aria-label="placeholder image"
        />
      </div>
    </Section>
  );
}
