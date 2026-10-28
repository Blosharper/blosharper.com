# Blosharper

Source for [blosharper.com](https://blosharper.com). Deployable files live in `teaser/`.

The deployment workflow runs on hosted Ubuntu when `main` changes under the site,
its deploy script or the workflow. It uploads to Cloudflare Pages project
`blosharper-teaser` using Wrangler `4.118.0` and refreshes the asset cache version.

Required repository secret names:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

For a manual deploy, export those variables (or set them in an ignored `.env`)
and run `bash scripts/deploy-teaser.sh` with Bun installed.

Card artwork, icons, logos and guide files under `teaser/public/` and
`teaser/docs/manuals/` are committed deployment inputs. No build or source
repository access is needed during deployment. Update those inputs together
with the pages that consume them.
