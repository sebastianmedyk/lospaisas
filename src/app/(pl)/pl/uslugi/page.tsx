import { servicesIndexRoute } from "@/lib/route-factories";

const r = servicesIndexRoute("pl");
export const metadata = r.metadata;
export default r.Page;
