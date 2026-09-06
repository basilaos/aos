# BasilAOS Workbench Playbook

A Next.js site for the BasilAOS scenario co-creation page and Workbench
Playbook.

## Stack

- Next.js `16`
- React `19`
- App Router under `app/`
- Global styling in `app/globals.css`
- Playbook content generated from the uploaded Markdown into
  `app/playbook-data.ts`

## Pages

- `/` - dark scenario co-creation page
- `/bluebook` - Workbench Playbook reading page

## Commands

```bash
npm install
npm run dev
npm run build
npm test
```

`npm test` runs a production Next.js build and checks that the site uses the
Next CLI, keeps the scenario co-creation and playbook routes in the App Router, and does not
include copied reference images.
