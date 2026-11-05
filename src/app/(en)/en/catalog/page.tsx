import { catalogRoute } from "@/lib/route-factories";

const r = catalogRoute("en");
export const metadata = r.metadata;
export default r.Page;
