# NTCPWC Website Revamp — UI Prototype

A responsive Next.js App Router prototype inspired by the NTCPWC maritime research website concept. Includes a public information homepage and an admin dashboard.

## Stack
- Next.js + React + TypeScript
- Tailwind CSS
- Recharts for the dashboard analytics chart
- Lucide React icons

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000 for the public homepage and http://localhost:3000/admin for the admin dashboard.

## Notes
- This is a frontend prototype with sample content and metrics, not a production-ready CMS.
- Search filters the sample publication list; the Add Publication modal is a UI-only demo.
- The login button is a navigation placeholder. Authentication, authorization, API integration, upload handling, database persistence, audit logs and security controls still need to be implemented.
- Images are loaded from Unsplash URLs; replace these with institution-approved media or a configured image CDN before production.
- Verify institutional naming, logos, statistics, publications, contact details and all sample content before publishing.
- For production, connect the Next.js UI to the planned NestJS REST API and PostgreSQL database, implement role-based access control, validate uploads, and deploy behind Nginx/HTTPS on approved infrastructure.
