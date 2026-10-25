import Reveal from "./Reveal";

/** Section label + bold headline + accent rule. Used by every content section. */
export default function SectionHeading({
  id,
  label,
  title,
  children,
  as: Tag = "h2",
}: {
  id?: string;
  label?: string;
  title: string;
  children?: React.ReactNode;
  as?: "h2" | "h3";
}) {
  return (
    <Reveal>
      {label ? <p className="section-label mb-3">{label}</p> : null}
      <Tag
        id={id}
        className="headline text-4xl font-bold leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </Tag>
      <span className="accent-rule accent-rule-lg" aria-hidden />
      {children}
    </Reveal>
  );
}
