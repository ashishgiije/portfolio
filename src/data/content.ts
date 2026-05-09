export const personal = {
  name: 'Ashish Gije',
  role: 'Aspiring Python Developer | MCA Student',
  email: 'ashishgije0@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/ashish-gije-501659324',
  github: 'https://github.com/ashishgiije',
  resumeUrl:
    'https://drive.google.com/file/d/1Jx2W3IfzCDYjOPf6FBmzj-_Q78SGH2Gj/view?usp=sharing',
} as const

export const aboutText =
  'Aspiring Python Developer and MCA student with a strong foundation in programming and data analysis, and a growing interest in Data Science and AI/ML. With hands-on experience in building AI assistants and data-centric applications, I have developed proficiency in Python, Pandas, NumPy, PyTorch, Flask, and MySQL. Known for my curiosity-driven learning, adaptability, collaborative mindset, and focus on developing efficient, real-world solutions.'

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', level: 92 },
      { name: 'Java', level: 78 },
      { name: 'C++', level: 74 },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 86 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'PyTorch', level: 80 },
    ],
  },
  {
    title: 'Web',
    items: [
      { name: 'HTML / CSS', level: 85 },
      { name: 'PHP', level: 72 },
      { name: 'Flask', level: 84 },
      { name: 'Django', level: 82 },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', level: 86 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MongoDB', level: 72 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Jupyter', level: 88 },
      { name: 'VS Code', level: 92 },
    ],
  },
] as const

export type ProjectCategory =
  | 'All'
  | 'Computer Vision'
  | 'AI Assistant'
  | 'Web / ML'
  | 'Full-Stack Web'

export const projectCategories: ProjectCategory[] = [
  'All',
  'Computer Vision',
  'AI Assistant',
  'Web / ML',
  'Full-Stack Web',
]

export const projects = [
  {
    title: 'Dynamic Hand Gesture Mouse',
    description:
      'Real-time gesture-controlled virtual mouse achieving ~90% accuracy. Enables intuitive cursor control using computer vision and hand tracking.',
    tech: ['OpenCV', 'PyAutoGUI', 'Python'],
    highlights: ['~90% accuracy', 'Real-time CV pipeline', 'Hands-free control'],
    category: 'Computer Vision' as const,
    github: 'https://github.com/ashishgiije',
  },
  {
    title: 'Ultron AI Desktop Assistant',
    description:
      'Desktop AI assistant with voice commands for productivity. Streamlines music, browsing, and routine task automation from a single interface.',
    tech: ['Python', 'Tkinter', 'Speech APIs'],
    highlights: ['Voice commands', 'Music & web', 'Task automation'],
    category: 'AI Assistant' as const,
    github: 'https://github.com/ashishgiije/ultron-ai',
  },
  {
    title: 'FoodieAI – Restaurant Recommendation',
    description:
      'Content-based recommendation system (~96% accuracy) with an interactive web UI. Blends classical ML with deep learning for personalized suggestions.',
    tech: ['Python', 'Django', 'Scikit-learn', 'PyTorch', 'MySQL', 'Pandas', 'NumPy'],
    highlights: ['~96% accuracy', 'Full-stack Django app', 'Hybrid ML stack'],
    category: 'Web / ML' as const,
    github: 'https://github.com/ashishgiije',
  },
  {
    title: 'GreenGear',
    description:
      'Web-based agricultural equipment rental platform connecting farmers with owners: search, view, and book machinery; owners list and manage inventory via a dashboard. Improves access to modern tools and lowers costs for small and medium farmers.',
    tech: [
      'HTML5',
      'CSS3',
      'Bootstrap',
      'JavaScript',
      'Python',
      'Django',
      'PostgreSQL',
      'SQLite',
      'Django ORM',
    ],
    highlights: [
      'MVT architecture',
      'Auth & session management',
      'Farmer & owner workflows',
    ],
    category: 'Full-Stack Web' as const,
    github: 'https://github.com/ashishgiije/GreenGear',
  },
] as const

export const achievements = [
  '1st Prize in Web Development (Tech-War Competition)',
  '1st Prize in Hackathon (SNBP College, Pune)',
] as const

export const educationEntries = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Dnyan Prasad Global University, Pune',
    detail: 'Pursuing · Sem 1 SGPA: 8.86',
    years: 'Expected 2027',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'MGM College, Nanded',
    detail: 'GPA: 8.83',
    years: '2022 – 2025',
  },
] as const

export type CertificationAccent = 'simplilearn' | 'deloitte' | 'walmart'

export const certifications = [
  {
    id: 'simplilearn-applied-ds',
    title: 'Introduction to Applied Data Science with Python',
    issuer: 'Simplilearn SkillUp',
    completedOn: '19 July 2025',
    credentialId: '8653714',
    tags: ['Python', 'Data Science', 'Analytics'],
    imageSrc: '/certificates/simplilearn-applied-data-science.png',
    accent: 'simplilearn' satisfies CertificationAccent,
    verification: 'Certificate code 8653714 · Verified on Simplilearn SkillUp',
  },
  {
    id: 'simplilearn-fullstack',
    title: 'Full-Stack Development 101',
    issuer: 'Simplilearn SkillUp',
    completedOn: '9 July 2025',
    credentialId: '8600748',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
    imageSrc: '/certificates/simplilearn-fullstack-101.png',
    accent: 'simplilearn' satisfies CertificationAccent,
    verification: 'Certificate code 8600748 · Verified on Simplilearn SkillUp',
  },
  {
    id: 'deloitte-tech-forage',
    title: 'Technology Job Simulation',
    issuer: 'Deloitte · Forage',
    completedOn: '5 July 2025',
    credentialId: null,
    tags: ['Coding', 'Development', 'Simulation'],
    imageSrc: '/certificates/deloitte-technology-simulation.png',
    accent: 'deloitte' satisfies CertificationAccent,
    verification:
      'Forage · Enrolment verification mss2woTGfLRscXHrW · User verification ve3KeC9BRFEZEobT7',
  },
  {
    id: 'deloitte-cyber-forage',
    title: 'Cyber Job Simulation',
    issuer: 'Deloitte · Forage',
    completedOn: '6 July 2025',
    credentialId: null,
    tags: ['Cybersecurity', 'Risk', 'Simulation'],
    imageSrc: '/certificates/deloitte-cyber-simulation.png',
    accent: 'deloitte' satisfies CertificationAccent,
    verification:
      'Forage · Enrolment verification qtQQCZwXenh9JmmpZ · User verification ve3KeC9BRFEZEobT7',
  },
  {
    id: 'walmart-forage-ase',
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart Global Tech · Forage',
    completedOn: '21 December 2025',
    credentialId: null,
    tags: ['Data Structures', 'Architecture', 'SQL', 'Data munging'],
    imageSrc: '/certificates/walmart-forage-advanced-se.png',
    accent: 'walmart' satisfies CertificationAccent,
    verification:
      'Forage · Enrolment verification pb2BAmJd4bkeDAoBW · User verification ve3KeC9BRFEZEobT7',
  },
] as const

export const heroTypingPhrases = [
  'Python Developer',
  'AI / ML Enthusiast',
  'Data Science Explorer',
  'Builder of Intelligent Apps',
] as const
