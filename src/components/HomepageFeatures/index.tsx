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

const FeatureList: FeatureItem[] = [
  {
    title: 'Team',
    description: 'Handbook, drive team criteria, and member resources.',
    link: '/docs/team/',
  },
  {
    title: 'Software',
    description: 'Programming references, tools, and control system guides.',
    link: '/docs/software/',
  },
  {
    title: 'Manufacturing',
    description: 'Machining, fabrication, and build processes.',
    link: '/docs/manufacturing/',
  },
  {
    title: 'Electrical',
    description: 'Wiring, motor controllers, connectors, and power distribution.',
    link: '/docs/electrical/',
  },
  {
    title: 'Design',
    description: 'CAD resources, design standards, and part libraries.',
    link: '/docs/design/',
  },
  {
    title: 'Build',
    description: 'Assembly, integration, and competition prep.',
    link: '/docs/build/',
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
