import Section from "@/components/ui/Section";

type Props = { title: string; blurb: string };

export default function Intro({ title, blurb }: Props) {
  return (
    <Section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111]">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-[#555] text-lg">
        {blurb}
      </p>
    </Section>
  );
}
