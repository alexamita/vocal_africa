/**
 * Content Data
 *
 * This file contains mock data for news articles, publications, reports, and media content (podcasts, videos, photos).
 * It is used to populate the application with example content for development and demonstration purposes.
 */
export const newsArticles = [
  {
    id: 1,
    type: "Article",
    title: "Community Voices Drive Policy Change in Rural Development",
    excerpt:
      "A comprehensive analysis of how grassroots activism has influenced legislative reforms across three African nations.",
    date: "January 28, 2026",
    category: "Human Rights",
    imageUrl:
      "https://images.unsplash.com/photo-1764337427684-64fd414f85ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYXJ0aWNsZSUyMG5ld3NwYXBlciUyMHJlYWRpbmd8ZW58MXx8fHwxNzY5NzkyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    type: "Press Statement",
    title: "VOCAL Condemns Recent Restrictions on Freedom of Assembly",
    excerpt:
      "Organization calls for immediate reversal of policies limiting civic participation and peaceful protests.",
    date: "January 25, 2026",
    category: "Advocacy",
    imageUrl:
      "https://images.unsplash.com/photo-1543926648-bb1ade2f4dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwbWFyY2glMjBqdXN0aWNlJTIwYWZyaWNhfGVufDF8fHx8MTc2OTc5Mjc2NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    type: "Report",
    title: "Annual Impact Report 2025: Empowering Communities Across Africa",
    excerpt:
      "Our latest annual report highlights key achievements, challenges, and the path forward for civic engagement.",
    date: "January 20, 2026",
    category: "Reports",
    imageUrl:
      "https://images.unsplash.com/photo-1626695436755-3e288720849c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFwJTIwd29ybGR8ZW58MXx8fHwxNzY5NzkyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: `
      <h2>Executive Summary</h2>
      <p>In 2025, VOCAL Africa reached unprecedented heights in its mission to empower grassroots communities. This report details our journey across 12 African nations, where we supported over 500 local organizations in their quest for social justice and democratic accountability.</p>

      <h2>Key Achievements</h2>
      <ul>
        <li><strong>Legislative Influence:</strong> Successfully advocated for the passage of three community-led development bills in West Africa.</li>
        <li><strong>Digital Empowerment:</strong> Trained 10,000+ youth activists in digital safety and strategic communication.</li>
        <li><strong>Institutional Strengthening:</strong> Provided technical assistance to 50 national-level NGOs, enhancing their financial sustainability and governance frameworks.</li>
      </ul>

      <h2>Challenges and Resilience</h2>
      <p>Despite significant progress, the narrowing of civic space remains a critical concern. We faced several instances where our partners' freedom of assembly was restricted. However, our rapid response legal fund provided support to 45 activists, ensuring their rights were protected.</p>

      <h2>The Road Ahead</h2>
      <p>Looking toward 2026, we are expanding our focus to climate justice and its intersection with rural development. We believe that empowering communities to lead their own climate adaptation strategies is essential for sustainable progress.</p>
    `,
  },
  {
    id: 4,
    type: "Publication",
    title: "Youth Activism and Digital Democracy: A New Era of Engagement",
    excerpt:
      "Exploring how young activists are leveraging technology to amplify their voices and demand accountability.",
    date: "January 15, 2026",
    category: "Research",
    imageUrl:
      "https://images.unsplash.com/photo-1764337427684-64fd414f85ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYXJ0aWNsZSUyMG5ld3NwYXBlciUyMHJlYWRpbmd8ZW58MXx8fHwxNzY5NzkyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: `
      <p>The digital landscape has fundamentally transformed the nature of youth activism in Africa. This publication explores the shift from traditional street-level mobilization to sophisticated, tech-enabled advocacy movements that transcend borders.</p>

      <h2>The Rise of Digital Sovereignty</h2>
      <p>Young Africans are no longer just consumers of technology; they are architects of digital tools designed for civic engagement. From secure messaging platforms to blockchain-based accountability systems, the toolkit for democracy is expanding rapidly.</p>

      <h2>Case Studies in Engagement</h2>
      <p>We analyze three recent movements where digital coordination was pivotal:</p>
      <ol>
        <li><strong>#DigitalDemocracyNigeria:</strong> A youth-led campaign for electoral transparency.</li>
        <li><strong>Kenya's Tech-Enabled Town Halls:</strong> Bridging the gap between parliamentarians and their constituents.</li>
        <li><strong>The Pan-African Climate Strike:</strong> Coordinating regional action through decentralized digital networks.</li>
      </ol>

      <h2>Risks and Opportunities</h2>
      <p>While technology offers immense potential, it also brings risks such as state-sponsored surveillance and digital misinformation. Our research underscores the need for comprehensive digital literacy programs to safeguard activists.</p>

      <h2>Conclusion</h2>
      <p>The future of African democracy is digital, decentralized, and driven by youth. For advocacy organizations, the challenge lies in adapting to this fast-paced environment while maintaining the core principles of grassroots organizing.</p>
    `,
  },
  {
    id: 5,
    type: "Article",
    title:
      "State-Backed Repression: How Kenya’s Anti-Terror Laws Are Targeting Activists",
    excerpt:
      "VOCAL Africa calls for an immediate review and amendment of all counter-terror provisions that can be misapplied against citizens exercising their constitutional freedoms.",
    date: "July 23, 2023",
    category: "Human Rights",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2025/11/image-gen-5-1.webp",
  },
  {
    id: 6,
    type: "Article",
    title: "Blogger’s death sparks protest and police crackdown in Kenya",
    excerpt:
      '"Justice for Albert": The Blogger Who Died in Custody, and the Fire He Sparked. Albert Ojwang was more than a blogger; he was a voice for the voiceless.',
    date: "July 23, 2023",
    category: "Accountability",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2025/02/ALBERT-2.webp",
  },
  {
    id: 7,
    type: "Article",
    title: "The Death of Jack: Questions Unanswered, Justice Demanded",
    excerpt:
      "Over 15 people have died in police custody this year alone, one such case is the death of Jack, a death surrounded by confusion and unanswered questions.",
    date: "July 23, 2023",
    category: "Access to Justice",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2025/12/IMG-20251215-WA0011-1.jpg",
  },
  {
    id: 8,
    type: "Press Statement",
    title:
      "The Abduction of Kizza Besigye: A Cross-Border Violation of Human Rights and Asylum Protections",
    excerpt:
      "Dr. Kizza Besigye, a longtime opponent of President Yoweri Museveni, was reportedly kidnapped by unidentified individuals in Kenya and secretly transported to Uganda.",
    date: "July 23, 2023",
    category: "Human Rights",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2024/01/000_36MU8N4-2.jpg",
  },
  {
    id: 9,
    type: "Article",
    title: "‘Enforced disappearances’ send a chill through Kenya’s protests",
    excerpt:
      "Since June 2024, Kenya has experienced a concerning surge in enforced disappearances, particularly targeting individuals involved in anti-government protests.",
    date: "July 23, 2023",
    category: "Human Rights",
    imageUrl: "https://vocalafrica.org/wp-content/uploads/2024/01/th-1-2.jpeg",
  },
  {
    id: 10,
    type: "Report",
    title:
      "Police Brutality in Uganda, Nigeria and Kenya: Shocking Statistics, Human Rights Violations, and the Fight for Justice",
    excerpt:
      "Nigeria has witnessed significant civil unrest due to police misconduct. In August 2024, protests against economic hardship resulted in at least 24 deaths.",
    date: "July 23, 2023",
    category: "Human Rights",
    imageUrl: "https://vocalafrica.org/wp-content/uploads/2024/01/th-2-2.jpeg",
  },
  {
    id: 11,
    type: "Article",
    title:
      "Femicide in Kenya: Rising Cases, Shocking Statistics and the Urgent Call for Action",
    excerpt:
      "On January 27, 2024, thousands marched in Nairobi and other major cities, demanding an end to femicide and gender-based violence.",
    date: "July 12, 2023",
    category: "Human Rights",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2024/01/AA-20240127-33545305-33545303-PROTEST_AGAINST_VIOLENCE_AGAINST_WOMEN_IN_NAIROBI-1706370485-2.webp",
  },
  {
    id: 12,
    type: "Article",
    title:
      "The Disappearance of Nakuru Fisherman Brian Odhiambo: A Quest for Justice",
    excerpt:
      "The mysterious disappearance of 31-year-old fisherman Brian Odhiambo from Nakuru, Kenya, has ignited widespread concern and calls for justice.",
    date: "July 11, 2023",
    category: "Accountability",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2024/01/brian-og_image-2.webp",
  },
  {
    id: 13,
    type: "Article",
    title:
      "The Mlolongo Four: A Tragic Tale of Abduction and Unresolved Disappearances",
    excerpt:
      "In December 2024, the mysterious abduction of four men from Mlolongo, Machakos County, Kenya, sent shockwaves through the nation.",
    date: "July 09, 2023",
    category: "Human Rights",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2024/01/image-126-2-1024x606.png",
  },
  {
    id: 14,
    type: "Article",
    title:
      "Kenya’s Missing Five: The Shocking Abductions, Release and the Fight for Justice",
    excerpt:
      "In December 2024, Kenya experienced a series of alarming abductions targeting young men known for their critical stance against the government.",
    date: "July 05, 2023",
    category: "Human Rights",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2024/01/IMG-20240625-WA0004-1170x710-1-2-1024x621.jpg",
  },
  {
    id: 15,
    type: "Article",
    title: "Internet Shutdowns as Collective Punishment—The Digital Siege",
    excerpt:
      "Internet shutdowns and throttling have become a standard weapon in the East African government playbook for managing dissent.",
    date: "July 23, 2023",
    category: "Access to Justice",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/07/image-gen-4.webp",
  },
  {
    id: 16,
    type: "Article",
    title:
      "Youth-Led Art and Protest in Kenya: The Power of Murals, Music and Spoken Word",
    excerpt:
      "The Gen Z movement has placed cultural expression at the centre of activism. Murals have emerged as living memorials to victims of extrajudicial killings.",
    date: "July 23, 2023",
    category: "Movements",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/07/00kenya-flag-5-wptc-articleLarge.webp",
  },
  {
    id: 17,
    type: "Article",
    title: "The Shrinking Civic Space in East Africa: Decriminalising Dissent",
    excerpt:
      "East African governments have increasingly focused on decriminalising dissent and shrinking the space for civic engagement and activism.",
    date: "July 20, 2023",
    category: "Access to Justice",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/07/envato-labs-image-edit.webp",
  },
  {
    id: 18,
    type: "Article",
    title:
      "When Your SIM Card Becomes a Surveillance Weapon: The Hidden Threat to Activists in East Africa",
    excerpt:
      "Telecom infrastructure is dual-use: it connects communities but also becomes a vector for repression through data access and surveillance.",
    date: "July 18, 2023",
    category: "Safety",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/07/image-gen-2.jpg",
  },
  {
    id: 19,
    type: "Report",
    title: "The Weaponization of “Anti-Terrorism” Laws Against Youth Activists",
    excerpt:
      "East African governments have constructed a sophisticated legal framework that provides a veneer of legitimacy to political repression.",
    date: "July 17, 2023",
    category: "Activists",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/07/download-2.webp",
  },
  {
    id: 20,
    type: "Article",
    title:
      "What Does Justice Look Like for Families Living in Uncertainty and Surveillance?",
    excerpt:
      "At VOCAL Africa, we work with families navigating the impossible terrain of seeking accountability while living under ongoing surveillance.",
    date: "July 16, 2023",
    category: "Activists",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/07/image-gen-6.webp",
  },
  {
    id: 21,
    type: "Press Statement",
    title: "STATEMENT ON THE ABDUCTION OF KENYANS BOB NJAGI AND NICHOLAS OYOO",
    excerpt:
      "The Law Society of Kenya and Vocal Africa express deep concern over the incommunicado detention of human rights defenders in Kampala.",
    date: "July 16, 2023",
    category: "Movements",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/07/573864353_17940555258093216_8147369768561398803_n.jpg",
  },
  {
    id: 22,
    type: "Article",
    title:
      "Why Have Disappearances Become Such an Effective Mechanism of Repression?",
    excerpt:
      "Disappearances create no paper trail, maintaining plausible deniability while sowing terror within activist communities.",
    date: "July 13, 2023",
    category: "Movements",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/07/download.webp",
  },
  {
    id: 23,
    type: "Publication",
    title: "Enforced Disappearances Across Kenya, Tanzania, Uganda",
    excerpt:
      "VOCAL Africa has documented dozens of cases since 2023, revealing a calculated system of terror designed to silence dissent.",
    date: "June 09, 2023",
    category: "Movements",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2023/06/WhatsApp-Image-2025-01-06-at-10.08.46-1024x710-1.webp",
  },
  {
    id: 24,
    type: "Article",
    title:
      "What Makes Gen Z Activism Fundamentally Different from Previous Movements",
    excerpt:
      "Something fundamentally new is happening in East African activism, reshaping the entire landscape of political accountability.",
    date: "June 09, 2023",
    category: "Movements",
    imageUrl:
      "https://vocalafrica.org/wp-content/uploads/2025/11/placeholder-blog-archive-1-1.jpg",
  },
  {
    id: 25,
    type: "Article",
    title:
      "Video: Red Cross buries 18 bodies in mass grave amid Bukavu clashes",
    excerpt:
      "The Democratic Republic of Congo (DRC) is currently facing a severe humanitarian crisis, marked by escalating armed conflicts and mass displacement.",
    date: "January 16, 2024",
    category: "Human Rights",
    imageUrl: "https://vocalafrica.org/wp-content/uploads/2024/01/th-4.jpeg",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const mediaContent = [
  {
    id: 1,
    type: "Podcast",
    title: "Voices of Change: Stories from the Frontlines",
    description:
      "Activists share their personal journeys in fighting for justice and equality in their communities.",
    duration: "42 min",
    date: "January 27, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHJlYWRpbmd8ZW58MXx8fHwxNzY5NzYzODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    embedUrl: "https://open.spotify.com/embed/episode/7m76MhpSBY98I9X8S7tTf6",
  },
  {
    id: 2,
    type: "YouTube",
    title: "Community Organizing Workshop: Building Grassroots Movements",
    description:
      "A comprehensive guide on mobilizing communities and creating lasting impact through collective action.",
    duration: "28 min",
    date: "January 24, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1664277497091-d4919922b55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdmlkZW8lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2OTc5Mjc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    type: "Photo",
    title: "Regional Summit on Civic Space",
    description:
      "Leaders from across the region gather to discuss the protection of civic space and human rights defenders.",
    date: "January 22, 2026",
    location: "Nairobi, Kenya",
    imageUrl:
      "https://images.unsplash.com/photo-1655102718560-19dd4971f87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaHVtYW4lMjBjb21tdW5pdHklMjBsZWFkZXJzJTIwYWR2b2NhY3l8ZW58MXx8fHwxNzY5Nzk5ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    type: "Photo",
    title: "Community Engagement in Rural Districts",
    description:
      "Our field teams conducting outreach and educational sessions on community rights and governance.",
    date: "January 19, 2026",
    location: "Dakar, Senegal",
    imageUrl:
      "https://images.unsplash.com/photo-1759521528494-fd6ceb6049e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwbWVkaWF8ZW58MXx8fHwxNzY5ODAwMjg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    type: "Photo",
    title: "Grassroots Activism Meeting",
    description:
      "Local community members organizing to demand better infrastructure and public services.",
    date: "January 15, 2026",
    location: "Accra, Ghana",
    imageUrl:
      "https://images.unsplash.com/photo-1660847161150-cca5d0a9ffbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwYWN0aXZpc20lMjBncmFzc3Jvb3RzJTIwbWVtdGluZ3xlbnwxfHx8fDE3Njk4MDU3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    type: "Photo",
    title: "Youth Justice Rally",
    description:
      "Young leaders rallying for climate justice and economic opportunities in urban centers.",
    date: "January 12, 2026",
    location: "Lagos, Nigeria",
    imageUrl:
      "https://images.unsplash.com/photo-1605651967204-94492d26f22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIweW91dGglMjBwcm90ZXN0JTIwanVzdGljZSUyMHJhbGx5fGVufDF8fHx8MTc2OTgwNTc4NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    type: "Photo",
    title: "Women Leaders Roundtable",
    description:
      "Empowering women to take lead roles in local governance and decision-making processes.",
    date: "January 10, 2026",
    location: "Johannesburg, South Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1737649507334-92c9fa4beb7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBsZWFkZXJzJTIwcm91bmR0YWJsZXxlbnwxfHx8fDE3Njk4MDU3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 10,
    type: "Photo",
    title: "Rural Education Workshop",
    description:
      "Training community educators on human rights awareness and civic duties.",
    date: "January 05, 2026",
    location: "Kampala, Uganda",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcnVyYWwlMjBlZHVjYXRpb24lMjBjb21tdW5pdHklMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njk4MDU3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    type: "Podcast",
    title: "Legal Advocacy in Action: Defending Human Rights",
    description:
      "Legal experts discuss landmark cases and strategies for using the law as a tool for social change.",
    duration: "35 min",
    date: "January 21, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHJlYWRpbmd8ZW58MXx8fHwxNzY5NzYzODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    embedUrl: "https://open.spotify.com/embed/episode/7m76MhpSBY98I9X8S7tTf6",
  },
  {
    id: 6,
    type: "YouTube",
    title: "The Power of Peaceful Protest: Lessons from History",
    description:
      "Examining successful nonviolent movements and their enduring impact on social justice worldwide.",
    duration: "45 min",
    date: "January 18, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1664277497091-d4919922b55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdmlkZW8lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2OTc5Mjc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
