import Image from "next/image";
import Button from "./components/Button";
import Card from "./components/Card";
import Link from "next/link";

// Place background SVGs at the top-level so they are always visible and not cut
function HeroBackgroundSVGs() {
  return (
    <>
      <svg
        width="700"
        height="700"
        viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: '-120px',
          left: '-180px',
          zIndex: 0,
          opacity: 0.13,
          pointerEvents: 'none',
        }}
      >
        <circle cx="350" cy="350" r="350" fill="var(--color-accent)" />
      </svg>
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-60px',
          zIndex: 0,
          opacity: 0.10,
          pointerEvents: 'none',
        }}
      >
        <rect x="0" y="0" width="300" height="300" rx="80" fill="#111" />
      </svg>
    </>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        zIndex: 1,
      }}
    >
      {/* Content container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 700, marginBottom: '1.2rem', lineHeight: 1.1 }}>
            Learn Tech & AI for Business and Everyday Life
          </h1>
          <p style={{ fontSize: '1.35rem', marginBottom: '2.2rem', color: '#444', maxWidth: 500 }}>
            Tutorials, guides, and resources to help you master technology and AI, boost productivity, and grow your business.
          </p>
          <Link href="#materials" scroll={false} legacyBehavior>
            <a style={{ textDecoration: "none" }}>
              <Button style={{ fontSize: '1.1rem' }}>
                Explore Materials
              </Button>
            </a>
          </Link>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
          <div style={{
            position: 'relative',
            width: 560,
            height: 560,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              position: 'absolute',
              top: 30,
              left: 30,
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'var(--color-accent)',
              opacity: 0.18,
              zIndex: 1,
            }} />
            <Image src="/hero-ai.png" alt="Vlad AI Hero" width={500} height={500} style={{ zIndex: 2, objectFit: 'contain', position: 'relative' }} />
            {/* Overlay a modern badge or icon */}
            <div style={{
              position: 'absolute',
              bottom: 24,
              right: 24,
              background: 'var(--color-accent)',
              color: '#111',
              borderRadius: 16,
              padding: '0.5rem 1.1rem',
              fontWeight: 600,
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <span>🚀</span> Vlad AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SectionContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>{children}</div>
);

function MainDescription() {
  return (
    <SectionContainer>
      <section id="about" style={{ padding: '2rem 0 1.5rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>What is Vlad AI?</h2>
        <p style={{ fontSize: '1.15rem', color: '#444' }}>
          Vlad AI is your go-to platform for practical tech and AI tutorials, business automation, and everyday productivity hacks. Whether you’re a business owner, professional, or enthusiast, you’ll find actionable content to help you stay ahead in the digital world.
        </p>
      </section>
    </SectionContainer>
  );
}

function FeaturesSection() {
  return (
    <SectionContainer>
      <section id="features" style={{ padding: '2.5rem 0 2rem 0' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 600, marginBottom: '2rem', textAlign: 'center' }}>Why Vlad AI?</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          <Card icon={"💡"} className="feature-card" style={{ margin: 0 }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Actionable Tutorials</h3>
            <p style={{ color: '#444', fontSize: '1rem', textAlign: 'center' }}>Step-by-step guides for real-world business and daily tasks.</p>
          </Card>
          <Card icon={"⚡"} className="feature-card" style={{ margin: 0 }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>AI Productivity</h3>
            <p style={{ color: '#444', fontSize: '1rem', textAlign: 'center' }}>Leverage AI to automate, optimize, and save time.</p>
          </Card>
          <Card icon={"📈"} className="feature-card" style={{ margin: 0 }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Business Growth</h3>
            <p style={{ color: '#444', fontSize: '1rem', textAlign: 'center' }}>Tech strategies to help your business scale and succeed.</p>
          </Card>
          <Card icon={"🛠️"} className="feature-card" style={{ margin: 0 }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Practical Tools</h3>
            <p style={{ color: '#444', fontSize: '1rem', textAlign: 'center' }}>Curated tools and resources for immediate impact.</p>
          </Card>
        </div>
        <style>{`
          @media (max-width: 900px) {
            #features > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </SectionContainer>
  );
}

function MaterialsSection() {
  return (
    <SectionContainer>
      <section id="materials" style={{ padding: '2.5rem 0 2rem 0' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 600, marginBottom: '2rem', textAlign: 'center' }}>Latest Materials</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          <Card style={{ margin: 0 }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.7rem' }}>How to Use ChatGPT for Business Automation</h4>
            <p style={{ color: '#444', fontSize: '1rem', marginBottom: '0.7rem' }}>A practical guide to automating repetitive business tasks using ChatGPT and AI tools.</p>
            <Button style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Read more →</Button>
          </Card>
          <Card style={{ margin: 0 }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.7rem' }}>Top 5 AI Tools for Everyday Productivity</h4>
            <p style={{ color: '#444', fontSize: '1rem', marginBottom: '0.7rem' }}>Discover the best AI-powered tools to boost your daily efficiency and save time.</p>
            <Button style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Read more →</Button>
          </Card>
          <Card style={{ margin: 0 }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.7rem' }}>Beginner’s Guide to AI for Small Business</h4>
            <p style={{ color: '#444', fontSize: '1rem', marginBottom: '0.7rem' }}>Everything you need to know to start using AI in your small business today.</p>
            <Button style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Read more →</Button>
          </Card>
        </div>
      </section>
    </SectionContainer>
  );
}

function TestimonialsSection() {
  // Testimonial data
  const testimonials = [
    { name: "Anna K.", text: "Vlad AI’s tutorials helped me automate my business and save hours every week!" },
    { name: "James L.", text: "Clear, practical, and super useful for anyone wanting to use AI in daily life." },
    { name: "Maria S.", text: "I love the minimal design and actionable content. Highly recommended!" },
    { name: "Omar T.", text: "The best resource for business-focused AI tips!" },
    { name: "Sophie W.", text: "Easy to follow and always up to date with the latest tech." },
    { name: "Liam P.", text: "A must-follow for anyone interested in AI for business." },
  ];
  // Duplicate testimonials for seamless looping
  const looped = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" style={{ maxWidth: '100vw', margin: '0 auto', padding: '2.5rem 0 2rem 0', overflow: 'hidden', background: 'transparent' }}>
      <h2 style={{ fontSize: '1.7rem', fontWeight: 600, marginBottom: '2rem', textAlign: 'center' }}>What People Say</h2>
      <div style={{
        width: '100%',
        overflow: 'visible',
        position: 'relative',
        height: 240,
      }}>
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            width: 'max-content',
            animation: 'testimonial-marquee 32s linear infinite',
          }}
          className="testimonial-marquee"
        >
          {looped.map((t, i) => (
            <Card
              key={i}
              className="testimonial-card"
              shadowColor="#111"
              style={{
                background: '#fff',
                width: 340,
                height: 180,
                margin: 0,
                border: 'none',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{ fontStyle: 'italic', color: '#444', marginBottom: '1rem', fontSize: '1.08rem', textAlign: 'center' }}>
                “{t.text}”
              </p>
              <div style={{ fontWeight: 600, color: 'var(--color-fg)' }}>{t.name}</div>
            </Card>
          ))}
        </div>
      </div>
      {/* Marquee animation keyframes */}
      <style>{`
        @keyframes testimonial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-marquee {
          width: max-content;
        }
        .testimonial-card {
          flex: 0 0 auto;
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <SectionContainer>
      <footer style={{
        width: '100%',
        padding: '2rem 0 1rem 0',
        textAlign: 'center',
        color: '#888',
        fontSize: '1rem',
        borderTop: '1px solid #eee',
        marginTop: '2rem',
      }}>
        <div>
          © {new Date().getFullYear()} Vlad AI. Made with <span style={{ color: 'var(--color-accent)' }}>♥</span> for tech & business.
        </div>
      </footer>
    </SectionContainer>
  );
}

export default function Home() {
  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', overflow: 'visible' }}>
        <HeroBackgroundSVGs />
      </div>
      <HeroSection />
      <MainDescription />
      <FeaturesSection />
      <MaterialsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
