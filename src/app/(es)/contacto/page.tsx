import { placeRoute } from "@/lib/route-factories";

const r = placeRoute("es", "contact");
export const metadata = r.metadata;
export default r.Page;
