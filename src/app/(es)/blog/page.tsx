import { blogIndexRoute } from "@/lib/route-factories";

const r = blogIndexRoute("es");
export const metadata = r.metadata;
export default r.Page;
