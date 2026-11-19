import { cheapHubRoute } from "@/lib/route-factories";

const r = cheapHubRoute("en");
export const metadata = r.metadata;
export default r.Page;
