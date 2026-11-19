import { cheapHubRoute } from "@/lib/route-factories";

const r = cheapHubRoute("es");
export const metadata = r.metadata;
export default r.Page;
