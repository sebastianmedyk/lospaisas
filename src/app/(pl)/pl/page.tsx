import { homeRoute } from "@/lib/route-factories";

const r = homeRoute("pl");
export const metadata = r.metadata;
export default r.Page;
