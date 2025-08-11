import Section from "@/components/ui/Section";

export default function TrustedBy() {
  return (
    <section className="bg-gray-50">
      <Section className="py-10">
        <p className="text-center text-sm font-medium text-[#555]">
          TRUSTED BY INDUSTRY LEADERS
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-2xl font-bold text-[#111]">
          <span>Microsoft</span>
          <span>Google</span>
          <span>Amazon</span>
          <span>Tesla</span>
          <span>Apple</span>
          <span>Meta</span>
        </div>
      </Section>
    </section>
  );
}
