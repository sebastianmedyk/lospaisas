import { catalogRoute } from "@/lib/route-factories";

const r = catalogRoute("pl");
export const metadata = r.metadata;
export default r.Page;
