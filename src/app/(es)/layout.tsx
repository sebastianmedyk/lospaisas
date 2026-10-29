import { localeLayout } from "@/lib/route-factories";

const r = localeLayout("es");
export const metadata = r.metadata;
export { viewport } from "@/components/RootDocument";
export default r.Layout;
