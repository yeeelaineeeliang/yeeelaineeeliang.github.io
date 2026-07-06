export const experience = [
  {
    role: 'Research Assistant',
    org: 'University of Chicago',
    team: 'HRI Research Lab',
    teamUrl: 'https://hri.cs.uchicago.edu',
    dates: 'Jan 2026 – Present',
    location: 'Chicago, IL',
    tags: ['LLM Prompting', 'Jaccard Retrieval', 'Android / Kotlin', 'Human-Robot Interaction'],
    description:
      'Built the memory and conversation layer for a Temi social robot, connecting LLM prompt design, Jaccard-based retrieval, and Android/Kotlin deployment within a 2×2 factorial study design where every engineering decision had to be traceable and research-valid.',
    achievements: [
      'Reduced hallucinated self-disclosures by tightening prompt constraints and adding a pre-response validation step before any output reached the robot.',
      'Shipped the full system to support a 2-week longitudinal HRI study at UChicago.',
    ],
  },
  {
    role: 'Analyst Intern',
    org: 'Wells Fargo',
    team: 'CSBB Marketing Sciences',
    dates: 'Jun 2024 – Aug 2024',
    location: 'Charlotte, NC',
    tags: ['Python', 'SQL', 'Teradata', 'KMeans', 'PCA'],
    description:
      'Built data and ML workflows on Teradata to understand campaign performance and customer behavior across five acquisition channels.',
    achievements: [
      'Clustered 40k+ customer records into five behavioral groups using KMeans (K=5, chosen via elbow method and silhouette score), with PCA applied after clustering for 2D visualization. One cluster was consistently underserved across every channel, which shifted how the team thought about budget allocation.',
      'Cut mobile transaction completion time by 57% by mapping a legacy flow with four cross-functional teams and removing steps that existed only because they always had.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'Dawnrise Inc.',
    orgUrl: 'https://www.dawnrise.com',
    dates: 'May 2023 – Aug 2023',
    location: 'Diamond Bar, CA',
    tags: ['Python', 'Selenium', 'Async Scraping', 'PostgreSQL', 'GPT Parsing'],
    description:
      'Built an automated competitive intelligence pipeline using Python, Selenium, async scraping, and GPT-based parsing to replace a manual research process.',
    achievements: [
      'Reduced data collection from 40 hours to 2 per cycle, covering 10k+ SKU specs from e-commerce sources.',
      'Designed the database schema and prompt templates that structured GPT output into consistent, queryable fields. Built and handed off the full system in two weeks.',
    ],
  },
]
