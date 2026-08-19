import DocCardList from '@theme/DocCardList';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';

const normalize = (path: string) => path.replace(/\/+$/, '');

/**
 * Card list for a section landing page.
 *
 * A section landing lives at the root of its own sidebar, so the plain
 * <DocCardList /> would include the landing page itself. This filters it out.
 */
export default function SectionCards() {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const items = (sidebar?.items ?? []).filter(
    (item) => !('href' in item && normalize(item.href) === normalize(pathname)),
  );
  return <DocCardList items={items} />;
}
