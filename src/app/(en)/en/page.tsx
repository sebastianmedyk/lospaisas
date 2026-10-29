import { homeRoute } from "@/lib/route-factories";

const r = homeRoute("en");
export const metadata = r.metadata;
export default r.Page;
