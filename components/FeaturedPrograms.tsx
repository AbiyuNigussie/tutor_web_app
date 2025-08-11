import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function FeaturedPrograms() {
  return (
    <Section className="py-12 grid md:grid-cols-2 gap-6">
      <Card>
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-blue-600 text-sm font-medium">
          Leadership
        </span>
        <h4 className="mt-4 text-xl font-bold text-[#111]">
          Executive Presence &amp; Strategic Leadership
        </h4>
        <p className="mt-3 text-[#555]">
          Develop the executive presence and strategic mindset needed to lead
          with confidence, inspire teams, and drive organizational
          transformation in today&apos;s complex business environment.
        </p>
        <a className="mt-4 inline-block text-blue-600 font-semibold" href="#">
          Learn more →
        </a>
      </Card>
      <Card>
        <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium">
          Sales
        </span>
        <h4 className="mt-4 text-xl font-bold text-[#111]">
          Advanced Sales Methodology &amp; Negotiation
        </h4>
        <p className="mt-3 text-[#555]">
          Master sophisticated sales techniques, negotiation strategies, and
          relationship-building skills to consistently exceed targets and create
          long-term customer value.
        </p>
        <a className="mt-4 inline-block text-blue-600 font-semibold" href="#">
          Learn more →
        </a>
      </Card>
      <Card className="md:col-span-2">
        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-medium">
          Operations
        </span>
        <h4 className="mt-4 text-xl font-bold text-[#111]">
          Digital Transformation &amp; Change Management
        </h4>
        <p className="mt-3 text-[#555]">
          Navigate digital transformation successfully with comprehensive change
          management strategies, technology adoption frameworks, and
          organizational alignment techniques.
        </p>
        <a className="mt-4 inline-block text-blue-600 font-semibold" href="#">
          Learn more →
        </a>
      </Card>
      <Card className="md:col-span-2">
        <span className="inline-block px-3 py-1 rounded-full bg-pink-50 text-pink-500 text-sm font-medium">
          Culture
        </span>
        <h4 className="mt-4 text-xl font-bold text-[#111]">
          Team Dynamics &amp; Collaborative Excellence
        </h4>
        <p className="mt-3 text-[#555]">
          Build high-performing teams through improved communication, conflict
          resolution, collaborative problem-solving, and inclusive leadership
          practices.
        </p>
        <a className="mt-4 inline-block text-blue-600 font-semibold" href="#">
          Learn more →
        </a>
      </Card>
    </Section>
  );
}
