<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design Compliance (MANDATORY)

- ALWAYS follow `design.md` — it is the single source of truth for this site's design (colors, spacing, radii, typography, component specs, layout structure).
- NEVER introduce colors, styles, or components not covered by `design.md`.
- When the user approves a design change: update the site AND update `design.md` in the same change so the doc never goes stale.
- For any new section/component/page: extend `design.md` with its spec first, then build to match it.
