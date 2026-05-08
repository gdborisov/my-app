export type Performer = {
  id: number
  name: string
  title: string
  score: number
  label: string
  rank: number
  badge: string
  highlight: string
  category: string
  quarter: string
  year: string
}

export const leaderboardData: Performer[] = [
  { id: 1, name: 'Elena Frost', title: 'Principal Software Engineer', score: 650, label: 'Top contributor', rank: 1, badge: 'EF', highlight: 'Consistently exceeded delivery expectations across multiple teams.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 2, name: 'Marcus Hill', title: 'Growth Product Manager', score: 622, label: 'Impact leader', rank: 2, badge: 'MH', highlight: 'Led cross-functional initiatives with measurable business impact.', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 3, name: 'Nina Reed', title: 'Lead UX Designer', score: 594, label: 'Experience expert', rank: 3, badge: 'NR', highlight: 'Improved user engagement with high-value design decisions.', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 4, name: 'Owen Lake', title: 'Data Engineering Lead', score: 568, label: 'Data champion', rank: 4, badge: 'OL', highlight: 'Delivered a scalable reporting pipeline ahead of schedule.', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 5, name: 'Maya Pierce', title: 'Senior Product Designer', score: 542, label: 'Design driver', rank: 5, badge: 'MP', highlight: 'Refined the product experience for faster user tasks.', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 6, name: 'Lucas Byrne', title: 'Backend Systems Engineer', score: 524, label: 'Reliability lead', rank: 6, badge: 'LB', highlight: 'Improved system stability with new observability tools.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 7, name: 'Chloe Grant', title: 'Analytics Manager', score: 506, label: 'Insight driver', rank: 7, badge: 'CG', highlight: 'Delivered actionable analytics that guided product decisions.', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 8, name: 'Ethan Ford', title: 'Platform Operations Lead', score: 488, label: 'Ops excellence', rank: 8, badge: 'EF', highlight: 'Streamlined release processes across multiple teams.', category: 'Management', quarter: 'Q1 2026', year: '2026' },
  { id: 9, name: 'Serena Cole', title: 'Frontend Architect', score: 472, label: 'UI strategist', rank: 9, badge: 'SC', highlight: 'Designed a reusable interface system for faster launches.', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 10, name: 'Caleb Novak', title: 'Senior Data Analyst', score: 458, label: 'Insight specialist', rank: 10, badge: 'CN', highlight: 'Turned complex datasets into clear executive insights.', category: 'Data', quarter: 'Q1 2026', year: '2026' },
  { id: 11, name: 'Priya Shah', title: 'Customer Success Manager', score: 444, label: 'Customer advocate', rank: 11, badge: 'PS', highlight: 'Improved retention metrics with proactive outreach.', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 12, name: 'Noah Quinn', title: 'Security Engineering Manager', score: 430, label: 'Security lead', rank: 12, badge: 'NQ', highlight: 'Strengthened platform security across the entire stack.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 13, name: 'Zoe Fields', title: 'Lead Content Strategist', score: 416, label: 'Story builder', rank: 13, badge: 'ZF', highlight: 'Clarified product messaging with cross-channel content.', category: 'Management', quarter: 'Q1 2026', year: '2026' },
  { id: 14, name: 'Ryan Vega', title: 'DevOps Specialist', score: 402, label: 'Automation expert', rank: 14, badge: 'RV', highlight: 'Cut deployment time with new CI/CD workflows.', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 15, name: 'Lila Brooks', title: 'Product Operations', score: 388, label: 'Process champion', rank: 15, badge: 'LB', highlight: 'Created alignment across product and delivery teams.', category: 'Leadership', quarter: 'Q2 2026', year: '2026' },
  { id: 16, name: 'Aaron Chen', title: 'Mobile Experience Lead', score: 374, label: 'App innovator', rank: 16, badge: 'AC', highlight: 'Launched mobile improvements that delighted users.', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 17, name: 'Iris Stone', title: 'Product Manager', score: 360, label: 'Roadmap owner', rank: 17, badge: 'IS', highlight: 'Guided a major release from discovery through launch.', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 18, name: 'Liam Park', title: 'Data Scientist', score: 347, label: 'Predictive leader', rank: 18, badge: 'LP', highlight: 'Built models that improved forecast accuracy.', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 19, name: 'Ivy Wells', title: 'UX Research Lead', score: 334, label: 'User advocate', rank: 19, badge: 'IW', highlight: 'Uncovered critical user needs with new research studies.', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 20, name: 'Joel Hart', title: 'Senior Software Engineer', score: 322, label: 'Feature driver', rank: 20, badge: 'JH', highlight: 'Delivered a key feature that boosted team velocity.', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 21, name: 'Mira Patel', title: 'Strategy Lead', score: 310, label: 'Vision keeper', rank: 21, badge: 'MP', highlight: 'Connected product goals to measurable outcomes.', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 22, name: 'Sam Kim', title: 'Site Reliability Engineer', score: 298, label: 'Availability expert', rank: 22, badge: 'SK', highlight: 'Reduced system downtime through automation.', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 23, name: 'Jade Morris', title: 'Creative Director', score: 286, label: 'Design leader', rank: 23, badge: 'JM', highlight: 'Elevated visual storytelling for the new campaign.', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 24, name: 'Elias Ross', title: 'QA Automation Lead', score: 274, label: 'Quality driver', rank: 24, badge: 'ER', highlight: 'Improved test coverage with scalable automation.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 25, name: 'Nora Hale', title: 'Research Operations', score: 262, label: 'Insight enabler', rank: 25, badge: 'NH', highlight: 'Streamlined research processes for faster results.', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 26, name: 'Ben Taylor', title: 'Business Analyst', score: 250, label: 'Data storyteller', rank: 26, badge: 'BT', highlight: 'Created dashboards that improved executive decisions.', category: 'Data', quarter: 'Q1 2026', year: '2026' },
  { id: 27, name: 'Tess Romero', title: 'Service Design Lead', score: 238, label: 'Flow optimizer', rank: 27, badge: 'TR', highlight: 'Optimized user journeys across product touchpoints.', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 28, name: 'Dylan Drake', title: 'Cloud Platform Engineer', score: 226, label: 'Infrastructure ace', rank: 28, badge: 'DD', highlight: 'Improved platform cost efficiency and scalability.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 29, name: 'Sasha Bryant', title: 'Growth Marketing Lead', score: 214, label: 'Acquisition driver', rank: 29, badge: 'SB', highlight: 'Launched campaigns with strong ROI and retention.', category: 'Management', quarter: 'Q1 2026', year: '2026' },
  { id: 30, name: 'Colin Archer', title: 'Design Systems Manager', score: 202, label: 'Component steward', rank: 30, badge: 'CA', highlight: 'Maintained consistency across the design system.', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 31, name: 'Farah Lane', title: 'Product Analyst', score: 190, label: 'Performance lead', rank: 31, badge: 'FL', highlight: 'Helped teams prioritize high-impact product work.', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 32, name: 'Jalen Cole', title: 'Technical Program Manager', score: 178, label: 'Delivery owner', rank: 32, badge: 'JC', highlight: 'Kept multiple projects on track with clear coordination.', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 33, name: 'Becca Nash', title: 'Customer Experience Lead', score: 166, label: 'Service champion', rank: 33, badge: 'BN', highlight: 'Improved customer satisfaction with targeted support.', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 34, name: 'Kian Price', title: 'Mobile Engineer', score: 154, label: 'App innovator', rank: 34, badge: 'KP', highlight: 'Released performance upgrades for mobile users.', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 35, name: 'Naomi Burke', title: 'Brand Designer', score: 142, label: 'Visual storyteller', rank: 35, badge: 'NB', highlight: 'Created brand assets used across launch campaigns.', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 36, name: 'Jude Lang', title: 'Data Infrastructure Lead', score: 130, label: 'Pipeline expert', rank: 36, badge: 'JL', highlight: 'Built reliable data flows for analytics teams.', category: 'Data', quarter: 'Q1 2026', year: '2026' },
  { id: 37, name: 'Ariel Fox', title: 'Experience Researcher', score: 118, label: 'User advocate', rank: 37, badge: 'AF', highlight: 'Delivered research that shaped roadmap choices.', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 38, name: 'Theo West', title: 'Senior Information Architect', score: 106, label: 'Navigation lead', rank: 38, badge: 'TW', highlight: 'Simplified complex information flows for users.', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 39, name: 'Lena Snow', title: 'Technical Support Lead', score: 94, label: 'Support champion', rank: 39, badge: 'LS', highlight: 'Resolved critical escalations with strong ownership.', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 40, name: 'Kai Monroe', title: 'Frontend Developer', score: 82, label: 'Interaction specialist', rank: 40, badge: 'KM', highlight: 'Refined interactive components for better usability.', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 41, name: 'Grace Mills', title: 'People Operations Partner', score: 70, label: 'Talent partner', rank: 41, badge: 'GM', highlight: 'Strengthened hiring and onboarding workflows.', category: 'Leadership', quarter: 'Q2 2026', year: '2026' },
  { id: 42, name: 'Ivan Holt', title: 'Accessibility Engineer', score: 58, label: 'Inclusion leader', rank: 42, badge: 'IH', highlight: 'Improved accessibility compliance across products.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 43, name: 'Quinn Paige', title: 'Revenue Operations', score: 46, label: 'Ops driver', rank: 43, badge: 'QP', highlight: 'Aligned commercial processes to growth goals.', category: 'Management', quarter: 'Q1 2026', year: '2026' },
  { id: 44, name: 'Sienna Miles', title: 'Visual Design Lead', score: 34, label: 'Creative lead', rank: 44, badge: 'SM', highlight: 'Created polished visuals for new seat campaigns.', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 45, name: 'Hugo Dale', title: 'Infrastructure Engineer', score: 22, label: 'Platform builder', rank: 45, badge: 'HD', highlight: 'Built foundational infrastructure for new services.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 46, name: 'Pippa Lee', title: 'Learning & Development Lead', score: 18, label: 'Growth coach', rank: 46, badge: 'PL', highlight: 'Created training pathways for team development.', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 47, name: 'Miles Trent', title: 'Quality Assurance Engineer', score: 14, label: 'Test lead', rank: 47, badge: 'MT', highlight: 'Caught edge-case regressions before release.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 48, name: 'Rhea Stone', title: 'Product Operations Analyst', score: 12, label: 'Launch coordinator', rank: 48, badge: 'RS', highlight: 'Coordinated team launches with precision.', category: 'Management', quarter: 'Q1 2026', year: '2026' },
  { id: 49, name: 'Victor Eaton', title: 'Systems Integration Engineer', score: 10, label: 'Integration specialist', rank: 49, badge: 'VE', highlight: 'Connected complex services for smoother workflows.', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 50, name: 'Lydia Chase', title: 'Market Insights Analyst', score: 8, label: 'Trends analyst', rank: 50, badge: 'LC', highlight: 'Identified competitive market opportunities.', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 51, name: 'Alan Green', title: 'Compliance Operations', score: 7, label: 'Policy driver', rank: 51, badge: 'AG', highlight: 'Ensured compliance readiness for new releases.', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 52, name: 'Eva Grant', title: 'Customer Researcher', score: 6, label: 'Voice of customer', rank: 52, badge: 'EG', highlight: 'Captured user feedback that influenced product changes.', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 53, name: 'Felix Dean', title: 'Finance Business Partner', score: 5, label: 'Budget steward', rank: 53, badge: 'FD', highlight: 'Managed resource planning for key initiatives.', category: 'Leadership', quarter: 'Q2 2026', year: '2026' },
  { id: 54, name: 'Willa Hart', title: 'Community Engagement Lead', score: 4, label: 'Community builder', rank: 54, badge: 'WH', highlight: 'Fostered strong engagement with external users.', category: 'Management', quarter: 'Q1 2026', year: '2026' },
  { id: 55, name: 'Omar Young', title: 'Performance Optimization Engineer', score: 3, label: 'Speed specialist', rank: 55, badge: 'OY', highlight: 'Optimized page performance across core screens.', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 56, name: 'Petra Rhodes', title: 'Process Improvement Lead', score: 2, label: 'Efficiency driver', rank: 56, badge: 'PR', highlight: 'Simplified workflows to reduce team handoffs.', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 57, name: 'Amir Lowe', title: 'Design Operations Manager', score: 1, label: 'Ops enabler', rank: 57, badge: 'AL', highlight: 'Kept design delivery running smoothly day to day.', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 58, name: 'Kyla Wynn', title: 'Operations Analyst', score: 0, label: 'Process support', rank: 58, badge: 'KW', highlight: 'Helped maintain operational rhythms across teams.', category: 'Management', quarter: 'Q1 2026', year: '2026' },
]

export const yearOptions = ['All Years', '2026']
export const quarterOptions = ['All Quarters', 'Q1 2026', 'Q2 2026']
export const categoryOptions = ['All Categories', 'Engineering', 'Management', 'Design', 'Data', 'Leadership']
