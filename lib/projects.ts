export type Project = {
  pkey: string
  index: string
  title: string
  client: string
  period: string
  description: string
}

export const projects: Project[] = [
  {
    pkey: 'order',
    index: '01',
    title: 'Order Entry Platform',
    client: 'Billiet',
    period: '2026–now',
    description: 'Turborepo monorepo serving web apps, REST + GraphQL APIs and a shared UI library. React 19, TanStack Start, Fastify and PostgreSQL/Prisma with legacy ERP compatibility.',
  },
  {
    pkey: 'smashly',
    index: '02',
    title: 'Smashly',
    client: 'VNDL Consulting',
    period: '2025–now',
    description: 'Full-stack padel match discovery app. Expo/React Native client with 40+ reusable components, Auth0 and Dutch/English i18n, backed by a Java 21 Spring Boot API with 35 REST endpoints.',
  },
  {
    pkey: 'nurse',
    index: '03',
    title: 'NURS-E Healthcare Platform',
    client: 'Wit-Gele Kruis',
    period: '2024–2026',
    description: 'Multi-platform healthcare solution built with Angular in an Nx monorepo: web, mobile and shared libraries. NgRx Signals workflows, offline-capable with SQLite.',
  },
  {
    pkey: 'wms',
    index: '04',
    title: 'Warehouse Management System',
    client: 'Ravago',
    period: '2023–2024',
    description: 'Enterprise warehouse applications for scanner, mobile and back-office usage, launched across five-plus countries with region-specific requirements.',
  },
]
