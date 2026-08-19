import type {ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {extractLeadingEmoji} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import type {Props} from '@theme/DocCard/Heading/Icon';
import styles from './styles.module.css';

/**
 * Swizzled from theme-classic to replace the stock 🗃 / 📄️ / 🔗 emoji with
 * brand glyphs: a folder for a subsection, a document for a page, an
 * arrow-out-of-box for an external link.
 *
 * A leading emoji on the sidebar label still wins — theme-classic extracts it
 * upstream and hands it down as `icon`, so authors keep a per-page override.
 */

// The three glyphs differ only by their paths, so they share a wrapper.
// Stroked with currentColor; the span in styles.module.css sets the color.
function Glyph({children}: {children: ReactNode}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {children}
    </svg>
  );
}

const FolderGlyph = (
  <Glyph>
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.5h7A1.5 1.5 0 0 1 19 9v8.5A1.5 1.5 0 0 1 17.5 19h-13A1.5 1.5 0 0 1 3 17.5z" />
  </Glyph>
);

const DocumentGlyph = (
  <Glyph>
    <path d="M6 3h7l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M13 3v5h5" />
  </Glyph>
);

const ExternalGlyph = (
  <Glyph>
    <path d="M14 4h6v6" />
    <path d="M20 4l-9 9" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </Glyph>
);

function getGlyph(item: Props['item']): ReactNode {
  if (item.type === 'category') {
    return FolderGlyph;
  }
  if (item.type === 'link' && isInternalUrl(item.href)) {
    return DocumentGlyph;
  }
  return ExternalGlyph;
}

export default function DocCardHeadingIcon({item, icon}: Props): ReactNode {
  // An emoji the author put on the label: theme-classic already extracted it
  // into `icon`, so pass it through untouched.
  const authored =
    'label' in item && extractLeadingEmoji(item.label).emoji !== null;

  return (
    <span
      className={clsx(ThemeClassNames.docs.docCard.icon, styles.cardTitleIcon)}>
      {authored ? icon : getGlyph(item)}
    </span>
  );
}
