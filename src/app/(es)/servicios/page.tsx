import { servicesIndexRoute } from "@/lib/route-factories";

const r = servicesIndexRoute("es");
export const metadata = r.metadata;
export default r.Page;
