import { servicesIndexRoute } from "@/lib/route-factories";

const r = servicesIndexRoute("en");
export const metadata = r.metadata;
export default r.Page;
