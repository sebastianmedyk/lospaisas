import { serviceRoute } from "@/lib/route-factories";

const r = serviceRoute("pl");
export const dynamicParams = false;
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
