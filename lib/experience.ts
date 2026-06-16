export type ExperienceEntry = {
  period: string
  role: string
  org: string
  bullets: string[]
  chips: string[]
}

export const experience: ExperienceEntry[] = [
  {
    period: 'Nov 2024–Present',
    role: 'Full-Stack Developer',
    org: 'VNDL Consulting',
    bullets: [
      'Built scalable Angular UI components, kept quality high with Jest, Storybook and Nx workspace practices.',
      'Delivered cross-platform desktop functionality with Electron and offline capabilities with SQLite.',
      'Improved developer productivity by 30% through internal tools and custom plugins.',
    ],
    chips: ['Angular', 'Electron', 'Node.js', 'Nx', 'Fastify'],
  },
  {
    period: 'Sep 2022–Nov 2024',
    role: 'Full-Stack Developer',
    org: 'WE+',
    bullets: [
      'Designed CI/CD workflows that accelerated deployments using Nx, GitHub Actions and Azure DevOps practices.',
      'Delivered responsive web applications with Angular and React based on customer requirements.',
      'Shipped full-stack features across Node.js and Java/Spring Boot services with GraphQL and SQL data stores.',
    ],
    chips: ['Angular', 'React', 'Spring Boot', 'GraphQL', 'CI/CD'],
  },
  {
    period: 'Jul 2021–Aug 2022',
    role: 'Full-Stack Developer',
    org: 'Tunity',
    bullets: [
      'Led implementation operations for large-scale software initiatives via automation and process optimization.',
      'Translated customer requirements into technical specifications and delivery plans.',
      'Developed and improved frontend layouts for usability and performance.',
    ],
    chips: ['Angular', 'Vue', 'Node.js', 'PostgreSQL'],
  },
  {
    period: 'Jul 2020–Jul 2021',
    role: 'Full-Stack Developer',
    org: 'Setle',
    bullets: [
      'Built interactive interfaces with React and Vue, backend features with Laravel, WebSockets and MySQL.',
      'Supported migrations from Vue.js to Next.js and from Laravel to Nest.js with GraphQL.',
    ],
    chips: ['React', 'Next.js', 'Laravel', 'WebSockets'],
  },
]
