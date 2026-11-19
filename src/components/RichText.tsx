import Link from "next/link";
import type { ReactNode } from "react";

/** Renders inline [label](/path) markers in plain copy as internal links; other text unchanged. */
export function rich(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <Link key={m.index} href={m[2]} className="font-semibold text-brand-gold underline-offset-4 hover:underline">
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
