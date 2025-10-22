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
      description="Embeddable form builder SDKs for developers. Add powerful form and document capabilities to your web and mobile applications.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Developer Documentation
          </Heading>
          <p className="hero__subtitle">
            Embeddable form builder SDKs for iOS, Android, React Native, and Web
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/ios/introduction">
              Get Started →
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
              Why Developers Choose Joyfill
            </Heading>
            <div className="row">
              <div className="col col--4">
                <h3>⚡ Quick Integration</h3>
                <p>Add powerful form capabilities to your app in minutes with our embeddable SDKs and comprehensive documentation.</p>
              </div>
              <div className="col col--4">
                <h3>🎨 Fully Customizable</h3>
                <p>Customize forms to match your brand. Build dynamic forms with enhanced fields, validation, and complex data structures.</p>
              </div>
              <div className="col col--4">
                <h3>🔒 Enterprise Ready</h3>
                <p>Production-grade security with GDPR compliance. Trusted by 1000+ companies for mission-critical applications.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
