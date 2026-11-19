import { cheapHubRoute } from "@/lib/route-factories";

const r = cheapHubRoute("pl");
export const metadata = r.metadata;
export default r.Page;
