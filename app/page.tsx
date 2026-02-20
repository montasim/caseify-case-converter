import { CaseConverter } from "@/components/case-converter";
import { PageLayout } from "@/components/layout";
import { PAGE_TITLE_SUFFIX, PAGE_DEFAULT_DESCRIPTION } from "@/config/constants";

/**
 * Home page metadata
 */
export const metadata = {
    title: `Smart Case Converter${PAGE_TITLE_SUFFIX}`,
    description: PAGE_DEFAULT_DESCRIPTION,
};

/**
 * Home page component
 */
export default function Home() {
  return (
    <PageLayout>
      <CaseConverter />
    </PageLayout>
  );
}
