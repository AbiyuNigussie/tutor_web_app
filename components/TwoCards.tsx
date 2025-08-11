import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function TwoCards() {
  return (
    <Section className="pb-12 grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="text-xl font-bold text-[#111]">
          Our Approach to Leadership Development
        </h3>
        <p className="mt-4 text-[#555]">
          We believe in developing leaders who can navigate complexity, inspire
          teams, and drive meaningful change. Our comprehensive approach
          combines theoretical frameworks with practical application, ensuring
          sustainable growth and measurable impact.
        </p>
        <a className="mt-6 inline-block text-blue-600 font-semibold" href="#">
          Learn More About Our Methodology →
        </a>
      </Card>
      <Card>
        <h3 className="text-xl font-bold text-[#111]">
          Leadership Development Expands a Leader's Impact
        </h3>
        <ul className="mt-4 space-y-3 text-[#555]">
          <li className="flex items-start gap-3">
            <span
              className="mt-1 w-5 h-5 bg-gray-200 rounded"
              aria-hidden="true"
            />{" "}
            Enhanced decision-making capabilities
          </li>
          <li className="flex items-start gap-3">
            <span
              className="mt-1 w-5 h-5 bg-gray-200 rounded"
              aria-hidden="true"
            />{" "}
            Improved team engagement and performance
          </li>
          <li className="flex items-start gap-3">
            <span
              className="mt-1 w-5 h-5 bg-gray-200 rounded"
              aria-hidden="true"
            />{" "}
            Strategic thinking and innovation
          </li>
          <li className="flex items-start gap-3">
            <span
              className="mt-1 w-5 h-5 bg-gray-200 rounded"
              aria-hidden="true"
            />{" "}
            Organizational culture transformation
          </li>
        </ul>
        <Button className="mt-6" size="lg">
          Show More Information
        </Button>
      </Card>
    </Section>
  );
}
