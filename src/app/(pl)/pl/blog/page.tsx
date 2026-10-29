import { blogIndexRoute } from "@/lib/route-factories";

const r = blogIndexRoute("pl");
export const metadata = r.metadata;
export default r.Page;
