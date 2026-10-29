import { cityRoute } from "@/lib/route-factories";

const r = cityRoute("es");
export const dynamicParams = false;
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
