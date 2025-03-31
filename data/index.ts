export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
]

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
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
    title: 'Frontend Engineer Intern',
    company_name: 'Tech Startup',
    icon: '/companies/vse.png',
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
      'Collaborated with cross-functional teams to implement responsive design principles.',
      'Participated in code reviews and provided constructive feedback to other developers.',
    ],
  },
  {
    title: 'Mobile App Developer',
    company_name: 'JSM Tech',
    icon: '/companies/pwc.png',
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Designed and developed mobile apps for both iOS & Android platforms using React Native.',
      'Implemented user authentication and data synchronization features.',
      'Optimized app performance and reduced load times by 40%.',
      'Participated in client meetings to gather requirements and provide technical insights.',
    ],
  },
  {
    title: 'Freelance App Developer',
    company_name: 'Self-employed',
    icon: '/companies/vse.png',
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Led the development of a mobile app for a client, from initial concept to deployment on app stores.',
      'Managed project timelines and client expectations independently.',
      'Implemented complex features including real-time data synchronization and offline functionality.',
      'Provided ongoing maintenance and support after launch.',
    ],
  },
  {
    title: 'Lead Frontend Developer',
    company_name: 'Tech Corporation',
    icon: '/companies/rb.png',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developed and maintained user-facing features using modern frontend technologies.',
      'Led a team of 5 developers, providing mentorship and technical guidance.',
      'Implemented CI/CD pipelines to streamline the development process.',
      'Collaborated with designers to ensure pixel-perfect implementation of UI designs.',
    ],
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
]
