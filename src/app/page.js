"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle Navbar scroll effect and scroll reveal animations
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      {/* ─── NAVBAR ─── */}
      <nav className={isScrolled ? "stuck" : ""}>
        <a href="/" className="logo">
          <div className="logo-mark">S&L</div>
          <div className="logo-info">
            <span className="logo-name playfair-font">Salt & Lights</span>
            <span className="logo-sub">Media Agency</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li className="nav-drop">
            <a>Expertise <span className="drop-arrow">▼</span></a>
            <div className="dropdown">
              <a href="#seo"><span className="di">📈</span> SEO & Content</a>
              <a href="#social"><span className="di">📱</span> Social Media</a>
            </div>
          </li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>

        <a href="#contact" className="nav-cta">Let's Talk</a>

        <button 
          className={`ham ${isMobileOpen ? "open" : ""}`} 
          onClick={() => setIsMobileOpen(true)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* ─── MOBILE MENU ─── */}
      <div className={`mob-menu ${isMobileOpen ? "open" : ""}`}>
        <button className="mob-close" onClick={() => setIsMobileOpen(false)}>✕</button>
        <a href="#services" onClick={() => setIsMobileOpen(false)}>Services</a>
        <a href="#pricing" onClick={() => setIsMobileOpen(false)}>Pricing</a>
        <a href="#contact" className="mob-fire" onClick={() => setIsMobileOpen(false)}>Let's Talk</a>
        <a href="https://wa.me/YOURNUMBER" className="mob-wa" onClick={() => setIsMobileOpen(false)}>
          Chat on WhatsApp
        </a>
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="hero bg-sand">
        <div className="reveal">
          <div className="kicker">
            <div className="kicker-dot"></div> Digital Marketing Agency
          </div>
          <h1 className="playfair-font">You do business, We build <em>presence</em></h1>
          <p className="hero-sub">
            Salt & Lights Media helps local businesses build a powerful online presence through data-driven SEO, strategic social media, and elite branding.
          </p>

          <div className="hero-btns">
            <a href="#pricing" className="btn-primary">View Packages</a>
            <a href="#contact" className="btn-outline">Book Consultation</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-n playfair-font">50<span>+</span></div>
              <div className="stat-l">Brands Scaled</div>
            </div>
            <div className="stat">
              <div className="stat-n playfair-font">2<span>M+</span></div>
              <div className="stat-l">Leads Gen</div>
            </div>
            <div className="stat">
              <div className="stat-n playfair-font">98<span>%</span></div>
              <div className="stat-l">Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee">
        <div className="mtrack">
          {[...Array(6)].map((_, i) => (
            <div className="mitem" key={i}>
              STRATEGY <b>///</b> SEO <b>///</b> BRANDING <div className="mdot"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES SECTION ─── */}
      <section id="services" className="sec bg-white">
        <div className="reveal">
          <div className="eyebrow">Capabilities</div>
          <h2 className="playfair-font">What We Do</h2>
          <p className="sec-sub">End-to-end digital solutions designed to capture attention and convert audiences into loyal customers.</p>
        </div>

        <div className="svc-grid reveal d1">
          <div className="svc">
            <div className="svc-icon">📈</div>
            <h3 className="svc-title playfair-font">SEO & Search</h3>
            <p className="svc-desc">Dominate local search rankings and capture high-intent traffic actively looking for your services.</p>
          </div>
          <div className="svc">
            <div className="svc-icon">📱</div>
            <h3 className="svc-title playfair-font">Social Media</h3>
            <p className="svc-desc">Engaging, high-converting content strategies across Instagram, Facebook, and LinkedIn.</p>
          </div>
          <div className="svc">
            <div className="svc-icon">🎯</div>
            <h3 className="svc-title playfair-font">Paid Advertising</h3>
            <p className="svc-desc">Highly targeted ad campaigns engineered to maximize your Return on Ad Spend (ROAS).</p>
          </div>
        </div>
      </section>

      {/* ─── WHY US SECTION ─── */}
      <section className="sec bg-sand">
        <div className="why-grid">
          <div className="reveal">
            <div className="eyebrow">The S&L Difference</div>
            <h2 className="playfair-font">Why Partner With Us?</h2>
            <div className="why-items">
              <div className="why-item">
                <div className="why-num">01</div>
                <div>
                  <div className="why-title">Data-Driven Creativity</div>
                  <div className="why-desc">We don't guess. Every piece of content and campaign is backed by hard analytics.</div>
                </div>
              </div>
              <div className="why-item">
                <div className="why-num">02</div>
                <div>
                  <div className="why-title">Local Market Mastery</div>
                  <div className="why-desc">Based in Kolkata, we understand the local nuances and consumer behavior perfectly.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="promise reveal d1">
            <div className="promise-label">Our Guarantee</div>
            <div className="promise-title playfair-font">Transparency at Every Step</div>
            <div className="promise-desc">No hidden fees, no confusing jargon. Just clear reporting and measurable growth for your brand month over month.</div>
            <div className="badges">
              <span className="badge">Weekly Reports</span>
              <span className="badge">Dedicated AM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING SECTION ─── */}
      <section id="pricing" className="sec bg-white">
        <div className="reveal">
          <div className="eyebrow">Investment</div>
          <h2 className="playfair-font">Transparent Packages</h2>
          <p className="sec-sub">Simple, scalable pricing tiers designed for businesses at every stage of growth.</p>
        </div>

        <div className="pkg-grid">
          {/* Basic Package */}
          <div className="pkg reveal">
            <div className="pkg-tier">Ignite</div>
            <h3 className="pkg-name playfair-font">Starter</h3>
            <div className="pkg-price">
              <span className="pkg-cur">$</span>
              <span className="pkg-amt playfair-font">899</span>
              <span className="pkg-per">/mo</span>
            </div>
            <p className="pkg-tagline">Essential visibility for local businesses.</p>
            <div className="pkg-for">Best for new setups</div>
            <div className="pkg-div"></div>
            <ul className="pkg-features">
              <li><span className="fdot">✓</span> Local SEO Optimization</li>
              <li><span className="fdot">✓</span> 12 Social Media Posts</li>
              <li><span className="fdot">✓</span> Basic Google Ads Setup</li>
              <li><span className="fdot">✓</span> Monthly Reporting</li>
            </ul>
            <button className="pkg-btn">Get Started</button>
          </div>

          {/* Featured Package */}
          <div className="pkg featured reveal d1">
            <div className="feat-tag">Most Popular</div>
            <div className="pkg-tier">Accelerate</div>
            <h3 className="pkg-name playfair-font">Growth</h3>
            <div className="pkg-price">
              <span className="pkg-cur">$</span>
              <span className="pkg-amt playfair-font">1,499</span>
              <span className="pkg-per">/mo</span>
            </div>
            <p className="pkg-tagline">Aggressive scaling for established brands.</p>
            <div className="pkg-for">Best for fast scaling</div>
            <div className="pkg-div"></div>
            <ul className="pkg-features">
              <li><span className="fdot">✓</span> Advanced SEO & Content</li>
              <li><span className="fdot">✓</span> 20 Social Posts + 4 Reels</li>
              <li><span className="fdot">✓</span> Meta & Google Ads Mgt</li>
              <li><span className="fdot">✓</span> Bi-Weekly Strategy Calls</li>
            </ul>
            <button className="pkg-btn">Claim This Plan</button>
            <div className="pkg-note">Limited spots available</div>
          </div>

          {/* Premium Package */}
          <div className="pkg reveal d2">
            <div className="pkg-tier">Dominate</div>
            <h3 className="pkg-name playfair-font">Enterprise</h3>
            <div className="pkg-price">
              <span className="pkg-amt playfair-font">Custom</span>
            </div>
            <p className="pkg-tagline">Complete digital takeover for large brands.</p>
            <div className="pkg-for">Best for market leaders</div>
            <div className="pkg-div"></div>
            <ul className="pkg-features">
              <li><span className="fdot">✓</span> Full Omnichannel Strategy</li>
              <li><span className="fdot">✓</span> Daily Social Management</li>
              <li><span className="fdot">✓</span> High-budget Ad Scaling</li>
              <li><span className="fdot">✓</span> Dedicated Slack Channel</li>
            </ul>
            <button className="pkg-btn">Let's Discuss</button>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section id="contact" className="cta-sec">
        <div className="cta-inner reveal">
          <span className="cta-kicker">Ready to Grow?</span>
          <h2 className="playfair-font">Let's Make Your Brand <em>Shine</em></h2>
          <p className="cta-sub">Drop us a message and we'll get back to you with a free, no-obligation audit of your current digital presence.</p>
          <div className="cta-btns">
            <a href="https://wa.me/919330505788" className="btn-wa">Chat on WhatsApp</a>
            <a href="mailto:saltandlightsmedia@gmail.com" className="btn-mail">Send an Email</a>
          </div>
          <div className="cta-socials">
            <a href="#" className="soc">Instagram</a>
            <a href="#" className="soc">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer>
        <div className="foot-logo playfair-font">Salt & Lights Media</div>
        <div className="foot-sub">© {new Date().getFullYear()} All Rights Reserved.</div>
      </footer>
      
      {/* Utility to apply playfair font where needed */}
      <style jsx global>{`
        .playfair-font { font-family: var(--font-playfair), sans-serif; }
      `}</style>
    </main>
  );
}