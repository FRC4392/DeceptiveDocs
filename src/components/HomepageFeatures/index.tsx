import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
  link: string;
};

// Start Here applies to every member regardless of subteam, so it leads on its
// own row.
const LeadFeature: FeatureItem = {
  title: 'Start Here',
  description:
    'Handbook, shop safety, onboarding, the season calendar, and everything else that applies to every member.',
  link: '/docs/start-here/',
};

// The rest follow the robot's lifecycle: design it, make it, wire it, program
// it, compete with it, tell people about it.
const FeatureList: FeatureItem[] = [
  {
    title: 'Design',
    description:
      'CAD setup, document and part naming, design standards, and designing for the machines we actually own.',
    link: '/docs/design/',
  },
  {
    title: 'Manufacturing',
    description:
      'Machine sign-off, shop layout, fasteners, and how we cut, rivet, print, and machine parts.',
    link: '/docs/manufacturing/',
  },
  {
    title: 'Electrical',
    description:
      'Wiring standards, power distribution, motors, controllers, sensors, and battery care.',
    link: '/docs/electrical/',
  },
  {
    title: 'Software',
    description:
      'Development setup, code structure, command-based programming, deploying, autonomous, and vision.',
    link: '/docs/software/',
  },
  {
    title: 'Competition',
    description:
      'Scouting, competition-day procedures, the pit kit, and the criteria and manual for each special role.',
    link: '/docs/competition/',
  },
  {
    title: 'Media',
    description:
      'Brand guide, media release and consent, social media guidelines, and photo and video workflow.',
    link: '/docs/media/',
  },
];

function Feature({title, description, link, wide}: FeatureItem & {wide?: boolean}) {
  return (
    <div className={clsx('col', wide ? 'col--12' : 'col--4')}>
      <div className={clsx('text--center padding-horiz--md', styles.featureCard)}>
        <Heading as="h3">
          <Link to={link}>{title}</Link>
        </Heading>
        <p>{description}</p>
        <Link to={link} className={styles.browseLink}>
          Browse →
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featuresRow)}>
          <Feature {...LeadFeature} wide />
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
