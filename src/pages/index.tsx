import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type SDKItem = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

const SDKList: SDKItem[] = [
  {
    title: 'iOS SDK',
    icon: '📱',
    description: 'Build powerful forms in native iOS applications with Swift.',
    link: '/ios/introduction',
  },
  {
    title: 'Kotlin SDK',
    icon: '🤖',
    description: 'Integrate forms into your Android apps using Kotlin.',
    link: '/kotlin/introduction',
  },
  {
    title: 'React Native SDK',
    icon: '⚛️',
    description: 'Cross-platform forms for iOS and Android with React Native.',
    link: '/react-native/introduction',
  },
  {
    title: 'Web SDK',
    icon: '🌐',
    description: 'Add forms to any web application - framework agnostic.',
    link: '/web/introduction',
  },
];

function SDK({title, icon, description, link}: SDKItem) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={link} className={styles.sdkCard}>
        <div className="text--center padding-horiz--md">
          <div className={styles.sdkIcon}>{icon}</div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Joyfill SDKs across all platforms">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/ios/introduction">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.sdks}>
          <div className="container">
            <Heading as="h2" className="text--center margin-bottom--lg">
              Choose Your Platform
            </Heading>
            <div className="row">
              {SDKList.map((props, idx) => (
                <SDK key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <Heading as="h2" className="text--center margin-bottom--lg">
              Why Joyfill?
            </Heading>
            <div className="row">
              <div className="col col--4">
                <h3>🚀 Easy Integration</h3>
                <p>Get started in minutes with our simple, well-documented APIs.</p>
              </div>
              <div className="col col--4">
                <h3>🎨 Fully Customizable</h3>
                <p>Customize every aspect to match your brand and requirements.</p>
              </div>
              <div className="col col--4">
                <h3>🔒 Secure by Default</h3>
                <p>Enterprise-grade security with GDPR and HIPAA compliance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
