/* KiWi Technologies - static site generator.
   Usage:  node build.js
   Reads  src/home.html + src/data.js, writes all .html pages into the project root.
   Shared header, footer and call-to-action live in this file, so edit them once here. */
const fs = require('fs');
const path = require('path');
const { services, cases } = require('./src/data.js');

const SITE = 'https://kiwigroup.co.in/';
const out = (file, html) => {
  const p = path.join(__dirname, file);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, html);
};
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fmtDate = d => new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const svc = slug => services.find(s => s.slug === slug);
const urls = []; // for sitemap

/* ---------- shared partials ---------- */
const FULLLOGO = (r) => `<img class="full-logo" src="${r}assets/logo-full.png" width="320" height="202" alt="KiWi Technologies - Growing Solutions, Together" loading="eager">`;

const NAV = [
  ['about.html', 'Who We Are', 'about'],
  ['services.html', 'Services', 'services'],
  ['work.html', 'Our Work', 'work'],
  ['contact.html', 'Contact', 'contact']
];

function header(r, active) {
  const links = NAV.map(([href, label, key]) => {
    const cur = key === active ? ' aria-current="page"' : '';
    if (key === 'services') {
      return `<div class="dd"><a href="${r}${href}"${cur}>${label}</a><ul>${services.map(s => `<li><a href="${r}services/${s.slug}.html">${esc(s.name)}</a></li>`).join('')}</ul></div>`;
    }
    return `<a href="${r}${href}"${cur}>${label}</a>`;
  }).join('');
  const drawer = NAV.map(([href, label], i) => `<a href="${r}${href}"><span>0${i + 1}</span>${label}</a>`).join('');
  return `<div id="prog"></div>
<header id="hd"><div class="w">
  <a class="logo" href="${r}index.html" aria-label="KiWi Technologies home">${FULLLOGO(r)}</a>
  <nav aria-label="Primary">${links}</nav>
  <a class="btn gold hcta" href="${r}contact.html">Start a Project</a>
  <button class="burger" id="bg" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
</div></header>
<div class="drawer" id="dr">${drawer}<a class="btn gold" href="${r}contact.html">Start a Project</a></div>
`;
}

function footer(r) {
  return `<footer><div class="w">
  <div class="big">Growing solutions, together.</div>
  <div class="fg">
    <div><a class="logo foot-logo" href="${r}index.html">${FULLLOGO(r)}</a><p style="margin-top:18px;max-width:32ch;font-size:15px">Brand design and web development for businesses that intend to lead.</p></div>
    <div><h4>Company</h4><a href="${r}about.html">Who We Are</a><a href="${r}work.html">Our Work</a><a href="${r}contact.html">Contact</a></div>
    <div><h4>Services</h4>${services.slice(0, 5).map(s => `<a href="${r}services/${s.slug}.html">${esc(s.name)}</a>`).join('')}<a href="${r}services.html">All services</a></div>
    <div><h4>Get in Touch</h4><a href="mailto:kiwigroupconnect@gmail.com">kiwigroupconnect@gmail.com</a><a href="tel:+917798848995">+91 77988 48995</a><a href="https://www.google.com/maps?svid=CCYSESoPCg0vZy8xMXpfcjhkZmIyGAo&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KddjGtHh68I7MTJ9_5nuzedm&daddr=Sriram+chowk,+C112+-+Runwal+Seagull+commercial,+complex,+Handewadi+Rd,+Hadapsar,+Pune,+Maharashtra+411028" target="_blank" rel="noopener">Hadapsar, Pune</a></div>
  </div>
  <div class="fb"><span>© 2026 KiWi Technologies. All rights reserved.</span><span><a href="${r}privacy.html" style="display:inline">Privacy Policy</a> · <a href="${r}terms.html" style="display:inline">Terms</a></span></div>
</div></footer>
<div class="fab"><a class="up" href="#top" aria-label="Back to top">↑</a><a class="wa" href="${r}contact.html" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.13 15.06l-.3-.18-3.1.82.83-3.03-.2-.31A8.1 8.1 0 0 1 12.04 3.8zM8.5 7.6c-.2 0-.5.07-.75.35-.26.28-1 1-1 2.4s1.03 2.8 1.17 3c.14.2 2 3.2 4.95 4.35 2.45.97 2.95.78 3.48.73.53-.05 1.7-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34-.28-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.2.28-.74.93-.9 1.12-.17.2-.33.22-.62.07a6.6 6.6 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.35-1.68c-.14-.28-.01-.43.13-.57.13-.13.28-.33.43-.5.14-.17.19-.28.28-.47.1-.2.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.1-.23-.56-.47-.48-.64-.49z"/></svg></a></div>
`;
}

const ctaBand = r => `<section class="dk grid-bg ctaband"><div class="w">
  <div><div class="eb">Let's talk</div><h2>Ready to transform your <em>vision?</em></h2><p>Tell us what you want to build. A senior member of our team replies within one working day.</p></div>
  <div class="crow"><a class="btn gold" href="${r}contact.html">Start a Project →</a><a class="btn line" href="${r}work.html">See Our Work</a></div>
</div></section>`;

function page({ file, title, desc, r = '', active = '', body, ogType = 'website', ld }) {
  urls.push(file);
  const full = `${title} | KiWi Technologies`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(full)}</title>
  <meta name="description" content="${esc(desc)}" />
  <meta name="theme-color" content="#061a13" />
  <link rel="canonical" href="${SITE}${file}" />
  <link rel="icon" type="image/svg+xml" href="${r}assets/favicon.svg" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:title" content="${esc(full)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:image" content="${SITE}assets/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${r}css/styles.css" />
${ld ? `  <script type="application/ld+json">${JSON.stringify(ld)}</script>\n` : ''}</head>
<body>
${header(r, active)}
<main id="top">
${body}
</main>
${footer(r)}
<script src="${r}js/script.js"></script>
</body>
</html>
`;
}

const ihero = ({ r, crumbs, eyebrow, h1, lead, extra = '' }) => `<section class="ihero dk">
  <canvas id="net"></canvas>
  <div class="w">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${r}index.html">Home</a>${crumbs.map(([h, l]) => h ? `<span>/</span><a href="${r}${h}">${esc(l)}</a>` : `<span>/</span><span aria-current="page">${esc(l)}</span>`).join('')}</nav>
    <div class="eb">${esc(eyebrow)}</div>
    <h1>${h1}</h1>
    ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
    ${extra}
  </div>
</section>`;

function bento(r) {
  return '<div class="bento" id="bento">' + services.map((s, i) => '<a class="bt' + (i < 2 ? ' l' : '') + '" href="' + r + 'services/' + s.slug + '.html"><span class="no">' + s.no + '</span>' + svcIcon(s) + '<h3>' + esc(s.name) + '</h3><p>' + esc(s.short) + '</p><div class="tags">' + s.tech.slice(0, 3).map(t => '<span>' + esc(t) + '</span>').join('') + '</div></a>').join('') + '</div>';
}
const svcIcon = (s, size = 74) => `<svg class="ico" viewBox="0 0 64 64" fill="none" stroke="#d2ad5c" stroke-width="2" width="${size}" height="${size}" aria-hidden="true">${s.icon}</svg>`;

/* ---------- ABOUT ---------- */
out('about.html', page({
  file: 'about.html', title: 'Who We Are', active: 'about',
  desc: 'KiWi Technologies is a software development and graphic design company combining engineering and creativity to help businesses stand out and grow.',
  body: `${ihero({ r: '', crumbs: [[null, 'Who We Are']], eyebrow: 'Who we are', h1: 'Logic and art, <em>under one roof.</em>', lead: 'We combine technology and creativity to help businesses stand out and grow.', extra: `<div class="ihimg"><img src="assets/about-hero.jpg" alt="A laptop showing code flowing into a wave of colour toward paintbrushes and a palette, representing engineering and creativity working together" width="1100" height="619" loading="eager"></div>` })}
<section><div class="w">
  <div class="about">
    <div class="rv wm" data-n="01"><div class="eb">Our story</div><h2>Built to close the gap between <em>code and craft</em></h2>
      <p class="lead">Most companies are strong at engineering or at design. Few are good at both, and the handoff between two vendors is where quality gets lost.</p>
      <p>KiWi Technologies was founded to remove that handoff. Engineers and designers sit in the same team, share the same brief and answer to the same standard, so the product your customers use and the brand they remember feel like one thing.</p>
      <p>Today we work with founders and leadership teams across logistics, retail, food, education and services, building software, platforms and identities that are made to last.</p>
    </div>
    <div class="disc2 rv">
      <div class="dcard l"><span class="eb">Left brain</span><h3>The Logic</h3><ul class="ticks"><li><span>Scalable backends and clean codebases</span></li><li><span>Secure architecture from day one</span></li><li><span>Performance-focused engineering</span></li></ul></div>
      <div class="dcard a"><span class="eb">Right brain</span><h3>The Art</h3><ul class="ticks"><li><span>Brand psychology and strategy</span></li><li><span>Typography and colour theory</span></li><li><span>Considered UX / UI design</span></li></ul></div>
    </div>
  </div>
  <div class="cnt">
    <div><b data-c="54">54<sup>+</sup></b><span>Projects delivered</span></div>
    <div><b data-c="35">35<sup>+</sup></b><span>Happy clients</span></div>
    <div><b data-c="2">2<sup>+</sup></b><span>Years building</span></div>
    <div><b data-c="25">25<sup>+</sup></b><span>Specialists</span></div>
  </div>
</div></section>
<section class="dk grid-bg"><div class="w">
  <div class="sh rv wm" data-n="02"><div class="eb">Our values</div><h2>What we <em>hold ourselves to</em></h2></div>
  <div class="why">
    <div class="wy dkc rv"><span class="n">i.</span><h3>Clarity first</h3><p>Plain language, fixed scope and honest timelines from the first conversation.</p></div>
    <div class="wy dkc rv"><span class="n">ii.</span><h3>Craft in detail</h3><p>We sweat the spacing, the edge cases and the code nobody sees.</p></div>
    <div class="wy dkc rv"><span class="n">iii.</span><h3>Built to last</h3><p>Maintainable systems and documented handovers, never lock-in.</p></div>
    <div class="wy dkc rv"><span class="n">iv.</span><h3>Partners, not vendors</h3><p>We stay accountable long after launch and grow with your business.</p></div>
  </div>
</div></section>
${ctaBand('')}`
}));

/* ---------- SERVICES OVERVIEW ---------- */
out('services.html', page({
  file: 'services.html', title: 'Services', active: 'services',
  desc: 'Logo and brand identity, websites and web apps, company profiles and presentations, UI/UX design, custom software and support from one accountable team.',
  body: `${ihero({ r: '', crumbs: [[null, 'Services']], eyebrow: 'Services', h1: 'Everything you need to <em>build and brand</em> a digital business', lead: 'Engage us for a single service or as a full product and brand partner, with one point of contact throughout.' })}
<section class="dk grid-bg" style="padding-top:clamp(40px,5vw,72px)"><div class="w">
  ${bento('')}
</div></section>
<section><div class="w">
  <div class="sh rv wm" data-n="01"><div class="eb">Ways to work with us</div><h2>Engagement <em>models</em></h2><p>Choose the structure that fits your project and budget. We will recommend one after discovery.</p></div>
  <div class="why three">
    <div class="wy rv"><span class="n">Model A</span><h3>Fixed-scope project</h3><p>A defined deliverable with agreed scope, timeline and cost. Best for websites, brand identities and first releases.</p></div>
    <div class="wy rv"><span class="n">Model B</span><h3>Dedicated team</h3><p>A team of designers and engineers working as an extension of yours, billed monthly. Best for long roadmaps.</p></div>
    <div class="wy rv"><span class="n">Model C</span><h3>Retainer and support</h3><p>A monthly allowance of hours for maintenance, enhancements and design support after launch.</p></div>
  </div>
</div></section>
${ctaBand('')}`
}));

/* ---------- SERVICE DETAIL ---------- */
services.forEach((s, idx) => {
  const rel = cases.filter(c => c.services.includes(s.slug));
  const others = services.filter(o => o.slug !== s.slug);
  out(`services/${s.slug}.html`, page({
    file: `services/${s.slug}.html`, r: '../', title: s.name, active: 'services',
    desc: `${s.name}: ${s.short} ${s.lead.split('.')[0]}.`,
    ld: { '@context': 'https://schema.org', '@type': 'Service', name: s.name, provider: { '@type': 'Organization', name: 'KiWi Technologies' }, description: s.short },
    body: `${ihero({ r: '../', crumbs: [['services.html', 'Services'], [null, s.name]], eyebrow: `Service ${s.no}`, h1: esc(s.name).replace(/&amp;/g, '&amp;'), lead: s.lead, extra: `<div class="crow"><a class="btn gold" href="../contact.html">Discuss this service →</a><a class="btn line" href="#faq">Common questions</a></div>` })}
<section><div class="w svc">
  <div>
    <div class="sh rv wm" data-n="01" style="margin-bottom:36px"><div class="eb">What we build</div><h2>Scope of <em>${esc(s.name)}</em></h2></div>
    <div class="fgrid">${s.builds.map(([t, d], i) => `<div class="fc rv"><span class="n">0${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div>

    <div class="sh rv wm" data-n="02" style="margin:88px 0 36px"><div class="eb">What you receive</div><h2>Deliverables, <em>clearly defined</em></h2></div>
    <ul class="ticks two rv">${s.deliver.map(d => `<li><span>${esc(d)}</span></li>`).join('')}</ul>

    <div class="sh rv" style="margin:88px 0 24px"><div class="eb">Tools and technology</div><h3 style="font-size:28px">Built with proven tools</h3></div>
    <div class="techs rv">${s.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
  </div>
  <aside class="aside"><div class="ac">
    <div class="eb">Start here</div><h3>Talk to a specialist</h3><p>Share a few details and we will reply with next steps and a rough timeline within one working day.</p>
    <a class="btn gold" href="../contact.html" style="width:100%">Start a Project →</a>
    <div class="mini"><span>Email</span>kiwigroupconnect@gmail.com</div><div class="mini"><span>Phone</span>+91 77988 48995</div>
  </div></aside>
</div></section>
${rel.length ? `<section class="dk grid-bg"><div class="w">
  <div class="sh rv wm" data-n="03"><div class="eb">Related work</div><h2>Where we have <em>done this</em></h2></div>
  <div class="wg">${rel.map(caseCard('../')).join('')}</div>
</div></section>` : ''}
<section id="faq"><div class="w">
  <div class="sh rv wm" data-n="04"><div class="eb">FAQ</div><h2>Questions about <em>${esc(s.name.split(' ')[0])}</em></h2></div>
  <div class="fq">${s.faqs.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>
</div></section>
<section style="background:var(--paper);border-block:1px solid var(--line);padding-block:72px"><div class="w">
  <div class="eb">More services</div>
  <div class="olist">${others.map(o => `<a href="${o.slug}.html"><span>${o.no}</span>${esc(o.name)}<i>→</i></a>`).join('')}</div>
</div></section>
${ctaBand('../')}`
  }));
});

/* ---------- WORK ---------- */
function caseCard(r) {
  return c => `<article class="pj rv" data-k="${c.cat}"><div class="pv ${c.mock}">${c.mockHtml}</div><div class="pm"><span class="k">${esc(c.kind)}</span><h3><a href="${r}work/${c.slug}.html">${esc(c.title)}</a></h3><p>${esc(c.summary)}</p><div class="r">${c.results.map(([b, s]) => `<div><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div></div></article>`;
}
out('work.html', page({
  file: 'work.html', title: 'Our Work', active: 'work',
  desc: 'Selected KiWi Technologies projects across software, mobile apps, e-commerce and brand identity, with the results they delivered.',
  body: `${ihero({ r: '', crumbs: [[null, 'Our Work']], eyebrow: 'Selected work', h1: 'Projects that <em>moved the business</em>', lead: 'A sample of recent engagements across software and design, and the outcomes they delivered.' })}
<section><div class="w">
  <div class="fl" role="group" aria-label="Filter work"><button aria-pressed="true" data-f="all">All</button><button aria-pressed="false" data-f="soft">Software</button><button aria-pressed="false" data-f="des">Design</button></div>
  <div class="wg">${cases.map(caseCard('')).join('')}</div>
</div></section>
${ctaBand('')}`
}));

cases.forEach((c, i) => {
  const next = cases[(i + 1) % cases.length];
  out(`work/${c.slug}.html`, page({
    file: `work/${c.slug}.html`, r: '../', title: c.title, active: 'work',
    desc: `${c.summary} A KiWi Technologies case study for ${c.sector}.`,
    body: `${ihero({ r: '../', crumbs: [['work.html', 'Our Work'], [null, c.title]], eyebrow: c.kind, h1: esc(c.title), lead: c.summary })}
<section style="padding-block:0"><div class="w"><div class="chero ${c.mock}"><div class="pv ${c.mock}" style="aspect-ratio:21/9">${c.mockHtml}</div></div></div></section>
<section><div class="w">
  <div class="facts rv">
    <div><span>Client</span>${esc(c.client)}</div><div><span>Sector</span>${esc(c.sector)}</div><div><span>Timeline</span>${esc(c.timeline)}</div><div><span>Services</span>${c.services.map(s => `<a href="../services/${s}.html">${esc(svc(s).name)}</a>`).join('<br>')}</div>
  </div>
  <div class="cs2">
    <div class="rv wm" data-n="01"><div class="eb">The challenge</div><h2>Where <em>things stood</em></h2><p class="lead">${esc(c.challenge)}</p></div>
    <div class="rv wm" data-n="02"><div class="eb">Our approach</div><h2>What we <em>did</em></h2>${c.solution.map(p => `<p>${esc(p)}</p>`).join('')}</div>
  </div>
</div></section>
<section class="dk grid-bg"><div class="w">
  <div class="sh rv wm" data-n="03"><div class="eb">Results</div><h2>The <em>outcome</em></h2></div>
  <div class="bigres">${c.results.map(([b, s]) => `<div class="rv"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
  <div class="techs on-dk rv" style="margin-top:56px">${c.stack.map(t => `<span>${esc(t)}</span>`).join('')}</div>
</div></section>
<section><div class="w narrow"><div class="eb">Client voice (sample)</div><q class="pq rv">${esc(c.quote)}</q><cite class="pc2">${esc(c.client)}</cite></div></section>
<section style="background:var(--paper);border-block:1px solid var(--line);padding-block:72px"><div class="w">
  <a class="nextc" href="${next.slug}.html"><span class="eb">Next case study</span><h3>${esc(next.title)}</h3><i>→</i></a>
</div></section>
${ctaBand('../')}`
  }));
});

/* ---------- CONTACT ---------- */
out('contact.html', page({
  file: 'contact.html', title: 'Contact', active: 'contact',
  desc: 'Start a project with KiWi Technologies. Share a few details and a senior team member will reply within one working day.',
  body: `${ihero({ r: '', crumbs: [[null, 'Contact']], eyebrow: 'Contact', h1: 'Ready to transform your <em>vision?</em>', lead: 'Share a few details and a senior member of our team will respond within one working day.' })}
<section class="dk grid-bg" style="padding-top:clamp(40px,5vw,72px)"><div class="w ct">
  <div class="l rv">
    <div class="eb">Get in touch</div><h2 style="font-size:clamp(30px,3.6vw,46px)">Tell us about <em>your project</em></h2>
    <div class="ci"><div><span>Email</span>kiwigroupconnect@gmail.com</div><div><span>Phone</span>+91 77988 48995</div><div><span>WhatsApp</span>+91 77988 48995</div><div><span>Office</span>Sriram Chowk, C112 - Runwal Seagull Commercial Complex, Handewadi Rd, Hadapsar, Pune, Maharashtra 411028</div><div><span>Hours</span>Mon to Sat, 10:00 to 19:00 IST</div></div>
  </div>
  <form class="fm rv" id="f">
    <div class="two"><label for="n">Name<input id="n" name="name" required></label><label for="c">Company<input id="c" name="company"></label></div>
    <div class="two"><label for="e">Work email<input id="e" name="email" type="email" required></label><label for="p">Phone<input id="p" name="phone" type="tel"></label></div>
    <div class="two"><label for="s">Area of interest<select id="s" name="interest">${services.map(s => `<option>${esc(s.name)}</option>`).join('')}<option>Not sure yet</option></select></label><label for="b">Budget range<select id="b" name="budget"><option>Not decided</option><option>Under ₹1 lakh</option><option>₹1 to 5 lakh</option><option>₹5 to 15 lakh</option><option>₹15 lakh+</option></select></label></div>
    <label for="m">Project overview<textarea id="m" name="message" rows="4"></textarea></label>
    <div><button class="btn gold" type="submit">Send Enquiry →</button></div>
    <div class="ok" id="ok" hidden></div>
  </form>
</div></section>
<section style="background:var(--paper);border-block:1px solid var(--line)"><div class="w">
  <div class="sh rv wm" data-n="01"><div class="eb">Reach Us</div><h2>Talk to us <em>directly</em></h2></div>
  <div class="channels">
    <a class="channel rv" href="tel:+917798848995"><span class="cico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/></svg></span><small>Call us</small><b>+91 77988 48995</b><span class="go">Call now →</span></a>
    <a class="channel rv" href="https://wa.me/917798848995" target="_blank" rel="noopener"><span class="cico"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.3 17.3L2 22l4.8-1.3A11 11 0 1 0 20.5 3.5ZM12 20.2a9 9 0 0 1-4.6-1.3l-.3-.2-2.8.8.8-2.7-.2-.3A9 9 0 1 1 21 12a9 9 0 0 1-9 8.2Zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6 0a7.3 7.3 0 0 1-3.6-3.1c-.3-.5.3-.5.8-1.5a.5.5 0 0 0 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4.1c1.7.7 2.4.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z"/></svg></span><small>WhatsApp</small><b>Chat with us instantly</b><span class="go">Open chat →</span></a>
    <a class="channel rv" href="mailto:kiwigroupconnect@gmail.com"><span class="cico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span><small>Email</small><b>kiwigroupconnect@gmail.com</b><span class="go">Write to us →</span></a>
    <a class="channel rv" href="https://www.google.com/maps?svid=CCYSESoPCg0vZy8xMXpfcjhkZmIyGAo&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KddjGtHh68I7MTJ9_5nuzedm&daddr=Sriram+chowk,+C112+-+Runwal+Seagull+commercial,+complex,+Handewadi+Rd,+Hadapsar,+Pune,+Maharashtra+411028" target="_blank" rel="noopener"><span class="cico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg></span><small>Visit</small><b>Hadapsar, Pune 411028</b><span class="go">Get directions →</span></a>
  </div>
  <div class="map-wrap rv">
    <div class="mapbox"><iframe title="KiWi Technologies location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=KiWi+Technologies%2C+Sriram+chowk%2C+C112+-+Runwal+Seagull+commercial+complex%2C+Handewadi+Rd%2C+Hadapsar%2C+Pune%2C+Maharashtra+411028&output=embed"></iframe></div>
    <div class="map-card"><small>Our office</small><b>KiWi Technologies</b><p>Sriram Chowk, C112 – Runwal Seagull Commercial Complex,<br>Handewadi Rd, Hadapsar, Pune, Maharashtra 411028</p><a href="https://www.google.com/maps?svid=CCYSESoPCg0vZy8xMXpfcjhkZmIyGAo&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KddjGtHh68I7MTJ9_5nuzedm&daddr=Sriram+chowk,+C112+-+Runwal+Seagull+commercial,+complex,+Handewadi+Rd,+Hadapsar,+Pune,+Maharashtra+411028" target="_blank" rel="noopener">Open in Google Maps →</a></div>
  </div>
</div></section>
<section><div class="w">
  <div class="sh rv wm" data-n="02"><div class="eb">What happens next</div><h2>Three steps <em>to start</em></h2></div>
  <div class="why three">
    <div class="wy rv"><span class="n">01</span><h3>We reply within a day</h3><p>A senior team member reads your enquiry and responds with questions or a call invitation.</p></div>
    <div class="wy rv"><span class="n">02</span><h3>Discovery call</h3><p>A 30-minute conversation about goals, users, budget and timelines. No obligation.</p></div>
    <div class="wy rv"><span class="n">03</span><h3>Proposal in a week</h3><p>A fixed-scope proposal with timeline, cost and a clear plan for the first delivery.</p></div>
  </div>
</div></section>
<section style="background:var(--paper);border-block:1px solid var(--line)"><div class="w">
  <div class="sh rv wm" data-n="03"><div class="eb">FAQ</div><h2>Before you <em>write to us</em></h2></div>
  <div class="fq">
    <details open><summary>Do you sign an NDA?</summary><p>Yes, as standard and before you share anything sensitive. We can use yours or ours.</p></details>
    <details><summary>What budget do I need?</summary><p>Business websites often start in the low lakhs; software and apps depend on scope. We will give a clear range after the discovery call.</p></details>
    <details><summary>Can we meet in person?</summary><p>Yes, we are based in Hadapsar, Pune and also work with clients remotely across India and abroad.</p></details>
  </div>
</div></section>`
}));

/* ---------- LEGAL ---------- */
const legal = (file, title, rows) => out(file, page({
  file, title, desc: `${title} for the KiWi Technologies website.`,
  body: `${ihero({ r: '', crumbs: [[null, title]], eyebrow: 'Legal', h1: esc(title), lead: 'Template text. Have this reviewed by your legal adviser before publishing.' })}
<section><div class="w narrow"><article class="prose">${rows.map(([h, t]) => `<h2>${esc(h)}</h2><p>${esc(t)}</p>`).join('')}<p><em>Last updated: October 2026.</em></p></article></div></section>`
}));
legal('privacy.html', 'Privacy Policy', [
  ['Information we collect', 'When you contact us we collect the details you provide, such as your name, email, phone number, company and project description. We may also collect basic analytics about how the site is used.'],
  ['How we use it', 'We use your details to respond to enquiries, prepare proposals and improve our services. We do not sell your personal information.'],
  ['Sharing', 'We share information only with service providers who help us operate the site and communicate with you, and where required by law.'],
  ['Your choices', 'You can ask us to access, correct or delete your information at any time by emailing kiwigroupconnect@gmail.com.'],
  ['Contact', 'KiWi Technologies, Pune, Maharashtra, India. Email: kiwigroupconnect@gmail.com.']
]);
legal('terms.html', 'Terms of Use', [
  ['Use of this website', 'The content on this site is provided for general information about KiWi Technologies and its services. By using it you agree to these terms.'],
  ['Intellectual property', 'Text, designs, logos and code on this site belong to KiWi Technologies or its licensors and may not be copied without permission.'],
  ['No warranty', 'We work to keep the information accurate and current but provide it without warranty of any kind.'],
  ['Project terms', 'Specific project work is governed by the written proposal and agreement we sign with you.'],
  ['Changes', 'We may update these terms from time to time. Continued use of the site means you accept the updated terms.']
]);

/* ---------- 404 ---------- */
out('404.html', page({
  file: '404.html', title: 'Page not found', desc: 'The page you are looking for could not be found.',
  body: `<section class="dk grid-bg nf"><canvas id="net"></canvas><div class="w"><div class="eb">Error 404</div><h1>This page has <em>wandered off.</em></h1><p class="lead">The link may be old or mistyped. Try one of these instead.</p><div class="crow"><a class="btn gold" href="index.html">Back to Home</a><a class="btn line" href="services.html">Our Services</a><a class="btn line" href="contact.html">Contact Us</a></div></div></section>`
}));
urls.splice(urls.indexOf('404.html'), 1);

/* ---------- HOME ---------- */
out('index.html', page({
  file: 'index.html', title: 'Brand Design & Web Development',
  desc: 'KiWi Technologies designs logos and brand identities, builds websites and web apps, and creates company profiles and presentations. Growing solutions, together.',
  active: '', body: fs.readFileSync(path.join(__dirname, 'src/home.html'), 'utf8').replace('{{BENTO}}', bento('')).replace('{{WORK}}', '<div class="wg">' + cases.slice(0, 4).map(caseCard('')).join('') + '</div>'),
  ld: { '@context': 'https://schema.org', '@type': 'Organization', name: 'KiWi Technologies', url: SITE, logo: SITE + 'assets/logo.png', slogan: 'Growing Solutions, Together' }
}).replace('<title>Software Development &amp; Brand Design | KiWi Technologies</title>', '<title>KiWi Technologies | Brand Design &amp; Web Development</title>'));

urls.sort((a, c) => (a === 'index.html' ? -1 : c === 'index.html' ? 1 : 0));
/* ---------- sitemap ---------- */
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Built ${urls.length + 1} pages (${urls.length} in sitemap).`);
