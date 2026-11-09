/* Content data for generated pages. Edit text here, then run:  node build.js
   All client names, figures and results are SAMPLE content to be replaced. */

const services = [
  {
    slug: 'custom-software', no: 'i.', name: 'Custom Software', short: 'Business systems, portals and dashboards built around how your teams operate.',
    icon: '<rect x="6" y="10" width="52" height="38" rx="4"/><path d="M22 28l-6 6 6 6M42 28l6 6-6 6M35 24l-6 20"/><path d="M20 56h24"/>',
    lead: 'Off-the-shelf tools force your process to fit their limits. We design and engineer software around the way your teams actually work, and build it to scale as you grow.',
    builds: [
      ['Internal business systems', 'ERP-style tools for operations, inventory, billing, HR and approvals.'],
      ['Customer and partner portals', 'Secure logins, self-service dashboards and document exchange.'],
      ['Dashboards and reporting', 'Live data from your systems, in one place, with role-based views.'],
      ['Workflow automation', 'Replace spreadsheets and email chains with tracked, auditable flows.'],
      ['APIs and integrations', 'Connect accounting, CRM, payment, logistics and messaging platforms.'],
      ['Legacy modernisation', 'Move ageing systems to a maintainable, secure modern stack.']
    ],
    tech: ['React', 'Node.js', 'Python', 'PostgreSQL', 'REST / GraphQL', 'AWS'],
    deliver: ['Fixed-scope proposal and timeline', 'Clickable prototype before build', 'Weekly demos on a staging site', 'Automated tests and security review', 'Source code and documentation handover', 'Training for your team'],
    faqs: [['How long does custom software take?', 'Most first releases take 8 to 16 weeks. We agree a fixed timeline after discovery and ship in short sprints so you see progress weekly.'], ['Who owns the code?', 'You do. Source code, documentation and credentials are handed over in full on final payment.'], ['Can you extend software built by someone else?', 'Often yes. We start with a short code audit and tell you plainly whether to extend or rebuild.']]
  },
  {
    slug: 'web-development', no: 'ii.', name: 'Websites & Web Apps', short: 'Corporate websites, e-commerce and web apps that load fast and win enquiries.',
    icon: '<circle cx="32" cy="32" r="24"/><ellipse cx="32" cy="32" rx="10" ry="24"/><path d="M8 32h48M12 20h40M12 44h40"/>',
    lead: 'Your website is often the first meeting with a customer. We design and build corporate websites, e-commerce stores and web apps that look the part, load fast, rank well and turn visitors into enquiries.',
    builds: [
      ['Corporate and brand websites', 'Rich, animated sites that present your business with authority.'],
      ['E-commerce stores', 'Catalogues, carts, payments and inventory sync, built for conversion.'],
      ['Web apps and portals', 'Customer logins, dashboards, bookings, subscriptions and payments.'],
      ['CMS and editing', 'Update pages, posts and projects yourself, without a developer.'],
      ['SEO and performance', 'Technical SEO, schema markup, Core Web Vitals and analytics setup.'],
      ['Redesign and migration', 'Refresh an existing site while preserving search rankings.']
    ],
    tech: ['Next.js', 'React', 'Headless CMS', 'Tailwind', 'Stripe / Razorpay', 'Vercel'],
    deliver: ['Sitemap and content plan', 'Custom design in Figma', 'Responsive build and QA', 'On-page SEO and redirects', 'Analytics and Search Console', 'Editor training'],
    faqs: [['How long does a website take?', 'A business website usually takes 3 to 5 weeks. Stores and platforms take longer depending on scope.'], ['Will a redesign hurt our Google ranking?', 'Not when it is planned. We map every existing URL, set up redirects and monitor Search Console through the migration.'], ['Can we edit the content ourselves?', 'Yes. We set up a simple editor so your team can update text, images, projects and posts.']]
  },
  {
    slug: 'brand-identity', no: 'iv.', name: 'Logo & Brand Identity', short: 'Logo design, visual identity and a complete brand guideline.',
    icon: '<path d="M32 6c14 0 24 9 24 20 0 8-6 10-12 10h-6c-4 0-4 6 0 8 4 3 2 12-6 12C16 56 6 46 6 32S16 6 32 6z"/><circle cx="20" cy="28" r="3"/><circle cx="30" cy="18" r="3"/><circle cx="42" cy="22" r="3"/>',
    lead: 'A brand is more than a logo. We build identities from strategy outward, using brand psychology, typography and colour theory, so every touchpoint feels like the same confident company.',
    builds: [
      ['Brand strategy', 'Positioning, audience, personality and messaging pillars.'],
      ['Logo design', 'A distinctive primary mark with secondary and icon versions for every use.'],
      ['Visual identity', 'Colour system, typography, imagery and graphic language.'],
      ['Brand guidelines', 'A clear rulebook so your team and vendors stay consistent.'],
      ['Naming and taglines', 'Memorable, available names with supporting copy lines.'],
      ['Rebrands', 'Refresh an existing identity without losing recognition.']
    ],
    tech: ['Illustrator', 'Photoshop', 'Figma', 'InDesign', 'After Effects', 'Brand book PDF'],
    deliver: ['Discovery workshop', 'Three identity directions', 'Final logo suite and files', 'Brand guideline document', 'Stationery and social templates', 'Source files you own'],
    faqs: [['How many logo options do we get?', 'We present three distinct directions, refine the one you choose and deliver the full file set.'], ['Can you rebrand without confusing customers?', 'Yes. We plan a phased rollout that keeps recognisable equity while modernising the look.'], ['What files do we receive?', 'Vector logo files, colour and font specifications, templates and a guideline document.']]
  },
  {
    slug: 'ui-ux-design', no: 'v.', name: 'UI / UX Design', short: 'Research-led interfaces, prototypes and design systems.',
    icon: '<rect x="6" y="8" width="52" height="40" rx="4"/><path d="M6 20h52M20 20v28"/><path d="M26 56h12"/>',
    lead: 'Good interfaces feel obvious. We research how people use your product, design flows that remove friction, and deliver design systems your developers can build from directly.',
    builds: [
      ['User research', 'Interviews, surveys and analytics review to ground every decision.'],
      ['Information architecture', 'Clear structure, navigation and content hierarchy.'],
      ['Wireframes and prototypes', 'Clickable flows you can test with real users before building.'],
      ['Visual interface design', 'Polished screens that carry your brand across web and mobile.'],
      ['Design systems', 'Tokens, components and documentation for consistent scaling.'],
      ['UX audits', 'Find and fix conversion and usability issues in a live product.']
    ],
    tech: ['Figma', 'FigJam', 'Maze / user testing', 'Storybook', 'Lottie', 'Accessibility checks'],
    deliver: ['Research summary', 'User flows and wireframes', 'High-fidelity designs', 'Interactive prototype', 'Design system file', 'Developer handoff specs'],
    faqs: [['Do you design only, or build too?', 'Both. You can take the designs to your own developers, or we can build them.'], ['How do you validate designs?', 'We test prototypes with a handful of real users before development, which catches most issues cheaply.'], ['Do you follow accessibility standards?', 'Yes. We design for contrast, keyboard use and readable type, aiming at WCAG AA.']]
  },
  {
    slug: 'marketing-collateral', no: 'vi.', name: 'Marketing & Collateral', short: 'Presentations, brochures, packaging and social creatives to one standard.',
    icon: '<path d="M8 50V30M24 50V18M40 50V26M56 50V10"/><path d="M6 54h52"/>',
    lead: 'Consistency builds trust. We produce the everyday material your business needs, designed to one visual standard so every brochure, deck and post looks like it came from the same company.',
    builds: [
      ['Presentations and pitch decks', 'Investor, sales and company decks that tell a clear story.'],
      ['Brochures and catalogues', 'Print-ready layouts for products, services and projects.'],
      ['Social media creatives', 'Templates and monthly packs for Instagram, LinkedIn and more.'],
      ['Packaging and labels', 'Retail-ready packaging with dielines and print specifications.'],
      ['Motion and video graphics', 'Short animated intros, explainers and social clips.'],
      ['Exhibition and signage', 'Stands, banners, hoardings and branded environments.']
    ],
    tech: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Canva templates', 'Print production'],
    deliver: ['Brief and moodboard', 'Concepts and revisions', 'Print-ready or web-ready files', 'Editable templates', 'Press proofing support', 'Monthly retainer option'],
    faqs: [['Can you manage printing?', 'Yes. We prepare print-ready files and can coordinate with printers and check proofs.'], ['Do you offer monthly design support?', 'Yes. Retainers give you a set number of creatives each month at a fixed fee.'], ['Can you match our existing brand?', 'Yes. We work from your guideline, or create one first if none exists.']]
  }
];

const cases = [
  {
    slug: 'logistics-platform', cat: 'soft', kind: 'Software · Web Platform', title: 'Logistics performance platform', sector: 'Logistics & Supply Chain', client: 'Regional logistics group (sample)',
    summary: 'A real-time reporting platform that replaced spreadsheets across 14 regional offices.', mock: 'm1',
    mockHtml: '<div class="d"><i></i><i></i></div><svg viewBox="0 0 200 100" fill="none"><path d="M0 80L30 62 60 70 90 40 120 48 150 22 200 8V100H0z" fill="#8cc63f" fill-opacity=".25"/><path d="M0 80L30 62 60 70 90 40 120 48 150 22 200 8" stroke="#b7e26b" stroke-width="2.5"/></svg>',
    results: [['-62%', 'Reporting time'], ['14', 'Offices live'], ['4 mo.', 'Delivery']],
    challenge: 'Each regional office tracked shipments, delays and costs in its own spreadsheet. Head office waited days for consolidated numbers, and errors crept in at every hand-off.',
    solution: ['We mapped the reporting process across all 14 offices and designed one shared data model.', 'A role-based web platform now collects shipment data, flags delays automatically and gives management a live performance dashboard.', 'Integrations with the existing accounting system removed double entry.'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'], timeline: '4 months', services: ['custom-software', 'ui-ux-design'],
    quote: 'Numbers that took a week now take minutes, and every office trusts the same figures.'
  },
  {
    slug: 'food-beverage-rebrand', cat: 'des', kind: 'Design · Brand Identity', title: 'Food & beverage rebrand', sector: 'Food & Beverage', client: 'Orchard & Co. (sample)',
    summary: 'New identity, packaging system and guideline rolled out across 30 products.', mock: 'm2',
    mockHtml: '<div class="lg">O</div><div class="sw"><i style="background:#061a13"></i><i style="background:#8cc63f"></i><i style="background:#f5f4ec"></i></div><div class="tx">ORCHARD &amp; CO.</div>',
    results: [['30', 'SKUs refreshed'], ['+38%', 'Shelf recall'], ['10 wks', 'Delivery']],
    challenge: 'A growing food brand had outgrown its first logo. Packaging varied by product, shelf presence was weak next to larger competitors, and the story behind the brand was lost.',
    solution: ['We ran a discovery workshop, defined the brand personality and built a distinctive identity with a flexible colour system.', 'A packaging architecture gave all 30 products a shared look with clear range and flavour cues.', 'A full brand guideline and templates kept printers, agencies and the in-house team consistent.'],
    stack: ['Illustrator', 'Photoshop', 'Figma', 'Brand book'], timeline: '10 weeks', services: ['brand-identity', 'marketing-collateral'],
    quote: 'Our shelves finally look like one confident brand.'
  },
  {
    slug: 'field-workforce-app', cat: 'soft', kind: 'Software · Mobile App', title: 'Field workforce application', sector: 'Facility & Workforce Services', client: 'Facility services firm (sample)',
    summary: 'Geo-verified attendance and task tracking for 1,200 field staff.', mock: 'm3',
    mockHtml: '<div class="pp" style="left:14%"><i></i><i></i><i></i><i></i></div><div class="pp" style="left:38%;top:20%"><i></i><i></i><i></i><i></i></div><div class="pp" style="left:62%"><i></i><i></i><i></i><i></i></div>',
    results: [['1,200', 'Active users'], ['99.9%', 'Uptime'], ['1', 'Codebase, 2 platforms']],
    challenge: 'Attendance for 1,200 staff across many client sites was collected on paper and chased by phone. Payroll disputes were frequent and supervisors had no live view of who was on site.',
    solution: ['A mobile app records geo-verified, photo-backed check-ins that work offline and sync automatically.', 'Supervisors assign tasks and see site coverage in real time from a companion web dashboard.', 'Payroll exports remove manual consolidation at month end.'],
    stack: ['Flutter', 'Firebase', 'Node.js', 'Google Maps'], timeline: '5 months', services: ['custom-software'],
    quote: 'Payroll disputes dropped sharply because everyone can see the same record.'
  },
  {
    slug: 'retail-storefront', cat: 'soft', kind: 'Software · E-commerce', title: 'Headless retail storefront', sector: 'Retail & E-commerce', client: 'Retail brand (sample)',
    summary: 'A fast, SEO-ready storefront with streamlined checkout and inventory sync.', mock: 'm4',
    mockHtml: '<div class="shop"><i></i><i></i><i></i><i></i><i></i><i></i></div>',
    results: [['2.1s → 0.9s', 'Load time'], ['+27%', 'Conversion'], ['6 wks', 'Delivery']],
    challenge: 'The existing store was slow on mobile, hard to update and out of sync with the warehouse. Cart abandonment was high and product pages did not rank.',
    solution: ['We rebuilt the storefront on a headless architecture for speed and flexibility, with a simple editor for the merchandising team.', 'Checkout was reduced to fewer steps with UPI and card options.', 'Inventory syncs with the warehouse system every few minutes, and product pages carry structured data for search.'],
    stack: ['Next.js', 'Headless CMS', 'Razorpay', 'Vercel'], timeline: '6 weeks', services: ['web-development', 'ui-ux-design'],
    quote: 'The store is faster, easier to run and sells more.'
  }
];

const posts = [
  { slug: 'how-much-should-a-logo-cost', cat: 'Branding', date: '2026-10-14', read: 6,
    title: 'How much should a logo cost, and what are you actually paying for?',
    excerpt: 'Why logo quotes can differ by fifty times, and how to judge what is fair for your business.',
    body: [
      ['p', "Quotes for what sounds like the same logo can differ by a factor of fifty. The drawing itself is rarely the difference. The difference is the thinking, the testing and the files that sit behind it."],
      ['h', 'What a very low price usually covers'],
      ['p', "A very low price typically buys a template or a quick sketch, one or two ideas and a flat image file. That can be fine for a side project. For a business that plans to grow, it often means redoing the logo within a couple of years, when it is already on signage, vehicles and packaging and costs far more to change."],
      ['h', 'What a professional logo process includes'],
      ['ul', ['Discovery: understanding your customers, competitors and goals', 'Research: a look at how others in your market present themselves', 'Concepts: several genuinely different directions, not variations of one idea', 'Refinement: testing the chosen concept at small sizes, in one colour and on different backgrounds', 'Final files: vector files for print and screen, colour and font specifications and usage rules']],
      ['h', 'Questions to ask before you commit'],
      ['ul', ['How many concepts will I see, and how many revision rounds are included?', 'Will I receive editable vector files and own the copyright?', 'Is a brand guideline included, or sold separately?', 'Will the logo be tested on real applications such as signage, packaging and social media?']],
      ['h', 'Match the investment to the stakes'],
      ['p', "A logo appears on everything you sell and send. A sensible budget is one that lets you do the job once, properly. If money is tight, start with the logo and a simple guideline, then add stationery, packaging and your website as the business grows."]
    ] },
  { slug: 'website-that-turns-visitors-into-enquiries', cat: 'Websites', date: '2026-10-02', read: 7,
    title: 'What a business website needs to turn visitors into enquiries',
    excerpt: 'Six things that decide whether a visitor calls you or leaves, with practical fixes for each.',
    body: [
      ['p', "A website that looks good but brings no enquiries is an expensive brochure. The sites that generate business tend to share the same handful of qualities, and none of them is about being flashy."],
      ['h', 'Say what you do in the first screen'],
      ['p', "Visitors decide within seconds whether they are in the right place. The top of your home page should answer three questions without any scrolling."],
      ['ul', ['What do you do?', 'Who is it for?', 'What should I do next?']],
      ['h', 'Show proof early'],
      ['p', "Client names, completed projects, certifications, years in business and short testimonials reduce doubt. Place them close to the top, not buried on an About page nobody reads. Use only real, checkable claims."],
      ['h', 'Make contact effortless'],
      ['p', "Put a phone number, WhatsApp link and a short enquiry form on every page. On mobile, the number should call with one tap. Every extra form field costs you enquiries, so ask only for what you need to reply."],
      ['h', 'Be fast on a phone'],
      ['p', "Most visitors arrive on mobile, often on average connections. Compress images, avoid heavy sliders and autoplay video, and aim for the page to be usable in about three seconds."],
      ['h', 'Make it easy to find'],
      ['p', "Give each service its own page with a clear title and a few paragraphs written for the customer. Keep your business name, address and phone number consistent with your Google Business Profile."],
      ['h', 'Measure and improve'],
      ['p', "Set up analytics from day one. Look at which pages bring enquiries and which visitors leave quickly, then improve one thing at a time. A website is a working asset that gets better with attention."]
    ] },
  { slug: 'company-profile-that-wins-trust', cat: 'Business', date: '2026-09-19', read: 6,
    title: 'How to structure a company profile that wins trust',
    excerpt: 'The sections that belong in a company profile, in the order readers want them, and the design rules that keep it credible.',
    body: [
      ['p', "A company profile is often read before anyone meets you. It is sent with tenders, shared with partners and opened by people deciding whether to take a call. A clear structure matters more than a long one."],
      ['h', 'The sections that belong in it'],
      ['ul', ['Who we are: your business in two or three lines, with the year founded and where you operate', 'What we do: services or products grouped simply, not a long list', 'Proof: key clients, notable projects and numbers you can stand behind', 'Credentials: registrations, certifications, awards and memberships', 'People: leadership and the strengths of the team', 'How to work with us: a simple process and clear contact details']],
      ['h', 'Lead with proof, not adjectives'],
      ['p', "Words like leading, trusted and innovative say nothing. A client list, a completed project with a result and a certificate number say a great deal. Replace claims with evidence wherever you can."],
      ['h', 'Design rules that protect credibility'],
      ['ul', ['One idea per page, with room to breathe', 'Real photography of your people, plant or projects, not stock images', 'A consistent grid, two typefaces at most and your brand colours', 'Short paragraphs, clear headings and a few well-made infographics']],
      ['h', 'Length and formats'],
      ['p', "For most small and mid-sized businesses, twelve to twenty-four pages is enough. Keep the PDF small enough to email, and prepare a one-page version for quick introductions. Build both from an editable master so they stay current."]
    ] },
  { slug: 'five-tests-every-good-logo-passes', cat: 'Branding', date: '2026-09-05', read: 5,
    title: 'Five tests every good logo should pass',
    excerpt: 'A simple checklist for judging a logo before you approve it, whether you designed it or someone else did.',
    body: [
      ['p', "It is easy to fall in love with a logo on a large screen. The real test is how it behaves in the places your customers will actually meet it. Run these five checks before you approve any design."],
      ['h', '1. The size test'],
      ['p', "Shrink the logo to the size of a browser tab or a social media profile picture. If the details disappear or the name becomes unreadable, the logo needs a simpler version for small use."],
      ['h', '2. The one-colour test'],
      ['p', "Print it in plain black on white, then white on black. A strong logo works without gradients, shadows or colour. This matters for invoices, stamps, engraving and low-cost printing."],
      ['h', '3. The memory test'],
      ['p', "Show it to someone for five seconds, then ask them to sketch it. The logos people can recall are simple, with one clear idea."],
      ['h', '4. The context test'],
      ['p', "Place it on a shopfront board, a visiting card, a website header, a product label and a vehicle. It should look at home on all of them, in both horizontal and stacked layouts."],
      ['h', '5. The time test'],
      ['p', "Ask whether it depends on a passing trend. A logo you will still be happy with in ten years is worth more than one that looks fashionable this season."]
    ] },
  { slug: 'website-redesign-without-losing-seo', cat: 'Websites', date: '2026-08-21', read: 7,
    title: 'Planning a website redesign without losing search traffic',
    excerpt: 'A migration checklist for business owners who want a new look and the same, or better, Google rankings.',
    body: [
      ['p', "A redesign can lift enquiries and brand perception. Handled badly, it can wipe out years of search visibility within weeks. Most losses are avoidable with planning."],
      ['h', 'Before the build'],
      ['ul', ['Export every existing page address and its traffic and rankings', 'Identify the pages that bring the most visitors and enquiries', 'Decide which pages stay, merge or retire']],
      ['h', 'During the build'],
      ['p', "Map each old address to its new home with a permanent redirect. Keep titles, headings and on-page content for your best-performing pages close to the original unless you have a reason to change them."],
      ['h', 'At launch'],
      ['ul', ['Check that every redirect works', 'Submit the new sitemap to Google Search Console', 'Make sure the new site is not blocked from search engines', 'Confirm analytics is tracking correctly']],
      ['h', 'After launch'],
      ['p', "Watch Search Console for crawl errors and compare rankings weekly for the first two months. Small fixes in the first fortnight prevent most long-term loss. A short dip is normal; a steady decline means something needs attention."]
    ] },
  { slug: 'rebrand-or-refresh', cat: 'Branding', date: '2026-08-07', read: 6,
    title: 'Rebrand or refresh: how to decide what your business needs',
    excerpt: 'Not every dated logo needs a full rebrand. Here is how to tell which one your business actually needs.',
    body: [
      ['p', "A tired-looking logo does not always mean a full rebrand. Sometimes a careful refresh keeps what customers already recognise and fixes what has aged. Other times only a fresh start will do."],
      ['h', 'Signs a refresh is enough'],
      ['ul', ['The core idea still fits, but the execution looks dated', 'The logo is used inconsistently across materials', 'Colours and typography need tidying, not replacing', 'Customers already recognise and trust the current look']],
      ['h', 'Signs you need a full rebrand'],
      ['ul', ['The business has changed what it offers or who it serves', 'A merger, expansion or new market makes the old identity wrong', 'The name or logo creates confusion or carries a poor reputation', 'The current identity cannot be fixed without starting again']],
      ['h', 'Protect the equity you have built'],
      ['p', "Even in a full rebrand, keep any element customers rely on to recognise you, such as a colour, a shape or a name. Recognition took years to build and is worth preserving."],
      ['h', 'Plan the rollout'],
      ['p', "List every place the brand appears, from signage and vehicles to invoices and social profiles. Phase the changes, starting with the most visible, and announce the update so customers understand it. A clear guideline keeps the new look consistent from day one."]
    ] }
];

services.push({
  slug: 'company-profiles', no: '', name: 'Company Profiles & Presentations', short: 'Company profiles, brochures, pitch decks and corporate presentations that win trust.',
  icon: '<rect x="8" y="10" width="48" height="34" rx="3"/><path d="M32 44v10M22 54h20"/><path d="M16 36l8-9 7 6 8-11 9 9"/>',
  lead: 'A strong company profile or presentation does the selling before you enter the room. We design and write profiles, decks and corporate documents that present your business with clarity, credibility and polish.',
  builds: [
    ['Company profiles', 'Print and PDF profiles that tell your story, strengths, clients and credentials.'],
    ['Corporate presentations', 'Boardroom, client and partner decks with a clear narrative and consistent design.'],
    ['Pitch and investor decks', 'Persuasive structure, data visualisation and design for fundraising and sales.'],
    ['Brochures and catalogues', 'Product and service brochures ready for print and digital sharing.'],
    ['Tender and credential documents', 'Structured, professional submissions that make shortlists.'],
    ['Templates for your team', 'Editable PowerPoint and Word templates so every document stays on brand.']
  ],
  tech: ['PowerPoint', 'Keynote', 'InDesign', 'Illustrator', 'Figma', 'Print production'],
  deliver: ['Content outline and storyline', 'Copywriting and editing support', 'Custom layouts and infographics', 'Print-ready and screen-ready files', 'Editable master templates', 'Revisions until you are happy'],
  faqs: [['Do you write the content too?', 'Yes. You can send rough notes or an old document and we will structure, write and design it, or we can work from your finished text.'], ['Can you redesign our existing profile or deck?', 'Yes. We keep your content and rebuild the design, structure and visuals so it reads faster and looks more credible.'], ['Will we be able to edit it later?', 'Yes. We deliver editable PowerPoint or Word masters along with the final PDFs.']]
});
cases.push({
  slug: 'company-profile-deck', cat: 'des', kind: 'Design · Company Profile', title: 'Company profile and investor deck', sector: 'Manufacturing', client: 'Industrial manufacturer (sample)',
  summary: 'A 40-page company profile and a 20-slide investor deck that helped win a major supply contract.', mock: 'm5',
  mockHtml: '<div class="sd" style="left:12%;top:16%"></div><div class="sd" style="left:24%;top:26%"></div><div class="sd top" style="left:36%;top:36%"><b></b><i></i><i></i></div>',
  results: [['40', 'Page profile'], ['20', 'Slide deck'], ['3 wks', 'Delivery']],
  challenge: 'A well-established manufacturer was losing credibility in tenders because its profile was dated, inconsistent and buried its strengths. Leadership had no investor-ready deck.',
  solution: ['We rebuilt the company story around its proof points: capacity, certifications, clients and track record.', 'A new profile was designed for print and PDF, with infographics that made plant capability easy to scan.', 'A matching investor deck and editable templates let the team keep every future document consistent.'],
  stack: ['InDesign', 'PowerPoint', 'Illustrator', 'Print production'], timeline: '3 weeks', services: ['company-profiles', 'brand-identity', 'marketing-collateral'],
  quote: 'Our profile now opens doors instead of needing an explanation.'
});
const order = ['brand-identity', 'web-development', 'company-profiles', 'ui-ux-design', 'marketing-collateral', 'custom-software'];
services.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
const roman = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.'];
services.forEach((s, i) => { s.no = roman[i]; });
const corder = ['food-beverage-rebrand', 'retail-storefront', 'company-profile-deck', 'logistics-platform', 'field-workforce-app'];
cases.sort((a, b) => corder.indexOf(a.slug) - corder.indexOf(b.slug));

module.exports = { services, cases, posts };
