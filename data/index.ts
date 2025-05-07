export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Experiences', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
]

export interface Project {
  name: string
  description: string
  tags: {
    name: string
    color: string
  }[]
  image: string
  source_code_link: string
  demo_link: string
  user?: string
  password?: string
}

export const projects: Project[] = [
  {
    name: 'AI Doprava',
    description:
      'AI Doprava is Next.js project, to provide real-time information from the Czech police api with implemented chatbot. AI Doprava aims to make road information interactive.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-blue-500',
      },
      {
        name: 'openai',
        color: 'text-green-500',
      },
      {
        name: 'tailwind',
        color: 'text-pink-500',
      },
    ],
    image: '/projects/ai_doprava.png',
    source_code_link: 'https://github.com/ViktorSivek/ai_chat_demo',
    demo_link: 'https://ai-chat-demo-delta.vercel.app/',
    user: 'demouser',
    password: 'demopassword',
  },
  {
    name: 'Bezrealitky Analysis',
    description:
      "Bezrealitky Analysis is my bachelor's thesis focusing on a machine learning analysis of real estate data. The data is scraped from the online platform Bezrealitky.cz.",
    tags: [
      {
        name: 'python',
        color: 'text-blue-500',
      },
      {
        name: 'selenium',
        color: 'text-green-500',
      },
      {
        name: 'scikit-learn',
        color: 'text-pink-500',
      },
    ],
    image: '/projects/bezrealitky.png',
    source_code_link: 'https://github.com/ViktorSivek/Bezrealitky_analysis_app',
    demo_link:
      'https://colab.research.google.com/drive/1O2qQCN4eIV-nNOV7UG9vyc8XvXUYcrFh?usp=sharing',
    user: '-',
    password: '-',
  },
  {
    name: 'Ecommerce Store',
    description:
      'E-commerce store is a modern web application designed for online shopping and efficient management through an admin dashboard.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-blue-500',
      },
      {
        name: 'prisma',
        color: 'text-green-500',
      },
      {
        name: 'shadcn/ui',
        color: 'text-pink-500',
      },
    ],
    image: '/projects/store.png',
    source_code_link: 'https://github.com/ViktorSivek/ecommerce_project_store',
    demo_link: 'https://ecommerce-project-store-zeta.vercel.app/',
    user: 'demouser',
    password: 'demopassword',
  },
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
