export type SkillGroup = {
  group: string
  chips: string[]
}

export const skills: SkillGroup[] = [
  {
    group: 'Frontend',
    chips: ['Angular', 'React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind', 'RxJS', 'Storybook'],
  },
  {
    group: 'Backend & APIs',
    chips: ['Node.js', 'Fastify', 'Nest.js', 'Java / Spring Boot', 'Laravel', 'GraphQL', 'Apollo'],
  },
  {
    group: 'Data & ORM',
    chips: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Prisma', 'TypeORM', 'Supabase'],
  },
  {
    group: 'Architecture',
    chips: ['Nx', 'Turborepo', 'pnpm Workspaces', 'Monorepos', 'Docker', 'ESM'],
  },
  {
    group: 'Testing & Quality',
    chips: ['Jest', 'Vitest', 'Cypress', 'Testing Library', 'ESLint', 'Zod'],
  },
  {
    group: 'DevOps & Auth',
    chips: ['GitHub Actions', 'Azure DevOps', 'GitLab CI/CD', 'AWS S3', 'MSAL', 'Auth0'],
  },
]
