import { placeRoute } from "@/lib/route-factories";

const r = placeRoute("pl", "location");
export const metadata = r.metadata;
export default r.Page;
