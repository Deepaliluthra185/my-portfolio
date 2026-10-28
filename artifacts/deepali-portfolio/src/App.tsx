import { type FormEvent, type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDown, ArrowUpRight, Check, Copy, Menu, X, Code2, Layers3, Sparkles, Braces, Palette, Workflow, Send, Github, Linkedin } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

const navItems = [
  ['About', '#about'], ['Capabilities', '#capabilities'], ['Selected work', '#work'], ['Approach', '#approach'],
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    const value = 'deepaliluthra440@gmail.com';
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setFormMessage('Clipboard access is unavailable.');
    }
  };
  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) {
      setFormMessage('Write a few words first, then prepare your message.');
      return;
    }
    setFormMessage(`Message draft ready. Add a preferred email address to enable sending. Your note: “${message.trim()}”`);
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Deepali Luthra, home" data-testid="link-home">
            <span className="brand-mark"><span /></span><span>DEEPALI<span className="brand-dot">.</span></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</a>)}
            <a className="nav-contact" href="#contact" onClick={closeMenu} data-testid="link-nav-contact">Let’s talk <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid wrap">
          <div className="hero-copy reveal">
            <div className="eyebrow hero-label"><span className="live-dot" /> BUILDING DIGITAL PRODUCTS · FULL-STACK DEVELOPER</div>
            <h1>Creating impactful<br />digital <em>solutions.</em></h1>
            <p className="hero-lede">I’m Deepali Luthra, an Engineering student and builder fusing full-stack web development with a UI/UX design eye to shape student-led platforms.</p>
            <p className="hero-lede sub">Amritsar, Punjab, India · deepaliluthra440@gmail.com</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work" data-testid="link-explore-work">Explore selected work <ArrowDown size={16} /></a>
              <a className="text-link" href="#about" data-testid="link-about">A little about me <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-footnote"><span className="foot-line" /> OPEN TO A GOOD CONVERSATION <span className="foot-line" /></div>
          </div>
          <div className="hero-art" aria-label="Abstract violet orbital illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="orb-core"><span>DL</span></div>
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
            <div className="art-caption mono">IDEAS IN<br />MOTION <span>↗</span></div>
            <div className="art-index mono">01 — 03</div>
            <div className="art-node node-one" /><div className="art-node node-two" /><div className="art-node node-three" />
            <div className="art-stamp">DESIGN<br />×<br />SYSTEMS</div>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <span>DESIGN WITH INTENT</span><span>BUILD WITH CARE</span><span>ALWAYS STAY CURIOUS</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="wrap strip-content"><span className="strip-star"><Sparkles size={19} /></span><p>Good work lives where <em>clarity meets character.</em></p><span className="strip-coordinate mono">DL / 001</span></div>
      </section>

      <section className="section about-section" id="about">
        <div className="wrap about-layout">
          <div className="section-kicker"><span className="eyebrow">01 / A little context</span><span className="kicker-rule" /></div>
          <div className="about-content">
            <h2>Professional <span className="serif-word">summary.</span></h2>
            <div className="about-columns">
              <p className="about-lead">A tech-forward Engineering student and builder passionate about creating impactful digital solutions. Fuses full-stack web development with a keen eye for UI/UX design to shape student-led platforms. Driven by an entrepreneurial spirit to turn complex code into elegant, user-centric experiences.</p>
              <div><p className="body-copy">Currently pursuing a B.Tech in Computer Science Engineering at Guru Nanak Dev University, Amritsar (2025–2029). Core focus on Data Structures, Algorithms, and Software Development, with hands-on experience across Django, Node.js, Express.js, AWS, and Generative AI.</p><p className="body-copy">Secondary School (Class 10th) — ICSE Council, Holy Heart Presidency School, Amritsar — 95% · High School (Class 12th) — ISC Council, Holy Heart Presidency School, Amritsar — 92%.</p><a href="#contact" className="underlined-link" data-testid="link-about-contact">Start a conversation <ArrowUpRight size={15} /></a></div>
            </div>
            <div className="principles">
              <div><span className="principle-index mono">A</span><div><strong>Full-stack development</strong><p>Python, JavaScript (ES6+), HTML5, CSS3, SQL — Django, Node.js, Express.js.</p></div></div>
              <div><span className="principle-index mono">B</span><div><strong>Cloud &amp; tools</strong><p>Amazon Web Services (AWS), Git, GitHub, RESTful APIs, Generative AI.</p></div></div>
              <div><span className="principle-index mono">C</span><div><strong>Core competencies</strong><p>Data Structures &amp; Algorithms (DSA), UI/UX Design, building user-centric experiences.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section capabilities-section" id="capabilities">
        <div className="wrap">
          <div className="section-heading"><div><span className="eyebrow">02 / Technical skills</span><h2>A toolbox built<br /><span className="muted-title">for impact.</span></h2></div><p>Languages, frameworks, and core competencies I work with.</p></div>
          <div className="cap-grid">
            <article className="cap-card cap-large"><div className="cap-top"><span className="cap-icon"><Code2 size={20} /></span><span className="mono cap-num">01 / LANGUAGES</span></div><h3>Languages</h3><p>Python, JavaScript (ES6+), HTML5, CSS3, SQL.</p><div className="cap-tags"><span>Python</span><span>JavaScript</span><span>HTML5</span><span>CSS3</span><span>SQL</span></div></article>
            <article className="cap-card"><div className="cap-top"><span className="cap-icon"><Layers3 size={20} /></span><span className="mono cap-num">02 / FRAMEWORKS &amp; RUNTIMES</span></div><h3>Frameworks &amp; Runtimes</h3><p>Django, Node.js, Express.js.</p><div className="cap-tags"><span>Django</span><span>Node.js</span><span>Express.js</span></div></article>
            <article className="cap-card cap-offset"><div className="cap-top"><span className="cap-icon"><Sparkles size={20} /></span><span className="mono cap-num">03 / CLOUD &amp; TOOLS</span></div><h3>Cloud &amp; Tools</h3><p>Amazon Web Services (AWS), Git, GitHub.</p><div className="cap-tags"><span>AWS</span><span>Git</span><span>GitHub</span></div></article>
            <article className="cap-card cap-wide"><div className="cap-top"><span className="cap-icon"><Palette size={20} /></span><span className="mono cap-num">04 / CORE COMPETENCIES</span></div><h3>Core Competencies</h3><p>Data Structures &amp; Algorithms (DSA), UI/UX Design, RESTful APIs, Generative AI.</p><div className="cap-tags"><span>DSA</span><span>UI/UX Design</span><span>RESTful APIs</span><span>Generative AI</span></div></article>
          </div>
          <div className="cap-bottom"><span className="eyebrow">CERTIFICATIONS</span><p>Credentials I’ve earned.</p><div className="tool-list"><span>AWS Cloud Practitioner / Cloud Course — Amazon Web Services</span><span>AWS Cloud Course — Udemy</span><span>Python Programming — Infosys Springboard</span></div></div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="wrap">
          <div className="section-heading work-heading"><div><span className="eyebrow">03 / Academic projects</span><h2>Selected <em>work.</em></h2></div><p>Projects built during my B.Tech and independent practice.</p></div>
          <div className="work-list">
            {[
              {
                num: '01',
                title: 'Urbanis AI',
                role: 'AI & Full-Stack Developer',
                link: 'github.com/Deepaliluthra185',
                desc: 'Ranked Top 5 in the Global Innoventure Hackathon. An intelligent urban spatial and analytics platform powered by Generative AI that transforms complex urban metrics, municipal data, and environmental insights into actionable workflows, interactive 3D visualizations, and smart city modeling.',
                type: 'React · Python · Generative AI · Urban Analytics',
                logo: '/urbanis-ai-logo.jpg',
                visual: 'logo',
              },
              {
                num: '02',
                title: 'SyncSpace (Axlero Internship)',
                role: 'Full-Stack Developer Intern · Axlero',
                link: 'github.com/Deepaliluthra185/SyncSpace',
                desc: 'A real-time collaborative whiteboard and code editor built for distributed engineering teams. Powered by WebSockets and Conflict-free Replicated Data Types (CRDTs / Yjs) to ensure low-latency, zero-conflict concurrent editing, embedded Monaco editor synchronization, and high-performance interactive whiteboarding without race conditions.',
                type: 'React · WebSockets · CRDTs (Yjs) · Monaco · Node.js',
                logo: '/syncspace-logo.svg',
                visual: 'logo',
              },
              {
                num: '03',
                title: 'GNDU SHOP — Buy, Sell & Connect',
                role: 'Creator & Full-Stack Developer',
                link: 'gndu-shop.vercel.app',
                desc: 'A student-only university marketplace enabling campus members to buy, sell, and connect for textbooks, electronics, dorm gear, and student services. Features verified student profiles, real-time messaging, zero platform fees, and seamless local campus exchange.',
                type: 'React · TypeScript · Tailwind CSS · Full-Stack',
                logo: '/gndu-shop-logo.png',
                logoBadge: true,
                visual: 'logo',
              },
            ].map((project, i) => <article className={`work-card work-card-${i + 1}`} key={project.num}>
              <div className="work-visual" aria-label={`Project artwork for ${project.title}`}>
                <span className="work-num mono">{project.num} / CASE STUDY</span>
                {project.logo ? (
                  <div className={`urbanis-logo-wrap ${project.logoBadge ? 'gndu-logo-badge' : ''}`}>
                    <img src={project.logo} alt={`${project.title} logo`} className="urbanis-logo-img" />
                  </div>
                ) : project.visual === 'composition-b' ? (
                  <div className="visual-composition composition-b">
                    <div className="window-ui"><div /><div /><div /><div /><div /><div /></div>
                    <div className="window-orbit" />
                  </div>
                ) : project.visual === 'composition-c' ? (
                  <div className="visual-composition composition-c">
                    <div className="line-chart"><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="chart-dot" />
                  </div>
                ) : (
                  <div className="visual-composition composition-a"><div className="comp-ring" /><div className="comp-block" /><span>BUILD<br />→ SHIP</span></div>
                )}
              </div>
              <div className="work-info">
                <div>
                  <span className="eyebrow">{project.role}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
                <a
                  href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                  aria-label={`Discuss ${project.title}`}
                  className="work-arrow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-project-${project.num}`}
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <div className="work-meta"><span>TYPE: {project.type}</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="wrap approach-grid">
          <div className="approach-intro"><span className="eyebrow">04 / A working rhythm</span><h2>From first<br />question to<br /><em>final detail.</em></h2><p>A flexible process starter. Adapt it to how you actually like to work.</p></div>
          <div className="steps">
            <article><span className="step-number mono">01</span><div><h3>Listen for the real question</h3><p>Make room for context, nuance, and the needs behind the brief.</p></div><span className="step-state">START HERE</span></article>
            <article><span className="step-number mono">02</span><div><h3>Explore, then make a choice</h3><p>Try the possibilities. Find the thread that feels both useful and alive.</p></div><span className="step-state">FIND FOCUS</span></article>
            <article><span className="step-number mono">03</span><div><h3>Make it real, together</h3><p>Share early, refine with care, and keep the details connected to the idea.</p></div><span className="step-state">BUILD &amp; REFINE</span></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="wrap contact-wrap">
          <span className="eyebrow">05 / Your turn</span>
          <div className="contact-title-row"><h2>Have a good<br /><em>question?</em></h2><span className="contact-spark"><Sparkles size={42} /></span></div>
          <div className="contact-bottom">
            <div className="contact-copy"><p>Tell me what you’re thinking. A project, a collaboration, or just a thoughtful hello — I’d love to hear more.</p>
              <div className="contact-actions"><button type="button" className="email-copy" onClick={copyEmail} data-testid="button-copy-email"><span>{copied ? <Check size={16} /> : <Copy size={16} />}</span>{copied ? 'Copied' : 'Copy email'}</button><span className="email-placeholder mono">deepaliluthra440@gmail.com</span></div>
              <div className="social-placeholders"><span>Amritsar, Punjab, India</span><span><Github size={16} /> github.com/Deepaliluthra185</span><span><Linkedin size={16} /> linkedin.com/in/deepali-luthra-057951354</span></div>
            </div>
            <form className="contact-form" onSubmit={submitMessage}>
              <label htmlFor="contact-message">A note to start with</label>
              <textarea id="contact-message" rows={4} placeholder="What are you curious about?" value={message} onChange={(event) => { setMessage(event.target.value); setFormMessage(''); }} data-testid="input-contact-message" />
              <button className="button button-primary form-button" type="submit" data-testid="button-prepare-message">Prepare a message <Send size={15} /></button>
              <p className="form-feedback" role="status" aria-live="polite">{formMessage}</p>
              <p className="form-hint">This starter form doesn’t send or store anything. Add a verified email address or connect a form service to enable delivery.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="wrap footer-inner"><a href="#home" className="footer-brand" data-testid="link-footer-home">DEEPALI<span>.</span></a><span className="footer-credit">Deepali Luthra · B.Tech CSE, Guru Nanak Dev University</span><a href="#home" className="back-top" data-testid="link-back-top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
