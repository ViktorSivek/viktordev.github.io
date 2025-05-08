export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Experiences', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
]

export interface TimelineExperience {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

export const timelineExperiences: TimelineExperience[] = [
  {
    title: 'BSc in Applied Informatics',
    company_name: 'University of Economics, Prague (VŠE)',
    icon: '/companies/vse.png',
    iconBg: '#383E56',
    date: '2020 - 2023',
    points: [
      'Focus on software development, data analysis, and business IT.',
      'Experience with Python. Java, databases, web apps, and team projects.',
      'Combined tech skills with management and real-world case studies.',
      'Bachelor’s Thesis: Data Analysis of the Czech Real Estate Market scraping, analysis, visualization, and ML.',
    ],
  },
  {
    title: 'Cybersecurity Solutions Developer',
    company_name: 'PricewaterhouseCoopers',
    icon: '/companies/pwc.png',
    iconBg: '#E6DEDD',
    date: '2023 - 2024',
    points: [
      'Built a full-stack web app from concept to deployment.',
      'Integrated Microsoft Sentinel and Tanium for cybersecurity insights.',
      'Optimized app performance and reduced load times by 40%.',
      'Used Django, Python, React, Docker, and MS Azure.',
    ],
  },
  {
    title: 'MSc in Data and Analytics for Business',
    company_name: 'University of Economics, Prague (VŠE)',
    icon: '/companies/vse.png',
    iconBg: '#383E56',
    date: '2023 - current',
    points: [
      'Focused on data analysis, business intelligence, AI, and ML.',
      'Worked with SQL, Python, Power BI, Tableau, Jupyter, and Go.',
      'Team project with Raiffeisenbank – solution design and presentation.',
      'School partnered with KPMG, Škoda Auto, ČSOB – courses led by industry experts.',
    ],
  },
  {
    title: 'AI Engineer',
    company_name: 'Raiffeisenbank',
    icon: '/companies/rb.png',
    iconBg: '#E6DEDD',
    date: '2024 - current',
    points: [
      'Built end-to-end AI automation for audio processing and NLP tasks.',
      'Fine-tuned and evaluated AI models for improved performance.',
      'Deployed solutions on AWS using Docker in private cloud setup.',
      'Worked with Python, Hugging Face, AWS, and Linux.',
    ],
  },
]
