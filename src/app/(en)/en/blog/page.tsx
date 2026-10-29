import { blogIndexRoute } from "@/lib/route-factories";

const r = blogIndexRoute("en");
export const metadata = r.metadata;
export default r.Page;
