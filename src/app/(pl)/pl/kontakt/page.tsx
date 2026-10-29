import { placeRoute } from "@/lib/route-factories";

const r = placeRoute("pl", "contact");
export const metadata = r.metadata;
export default r.Page;
