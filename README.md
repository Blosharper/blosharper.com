<p align="center">
  <a href="https://blosharper.com"><img src="https://raw.githubusercontent.com/Blosharper/.github/main/profile/banner.jpg" alt="Blosharper — Battle of Blossoms" width="100%" /></a>
</p>

# blosharper.com

The source of **[blosharper.com](https://blosharper.com)** — the official website of **Blosharper**.

**Blosharper is a card-shark noir roguelike deckbuilder: forge Korean Hwatu card combos to smash each round's target score.**
Don't rely on luck — use illicit "cheat" skills to rig the deck and survive a deadly underground gambling den. Pay off your debt, defeat the bosses, become the ultimate sharp!

『블로샤퍼(Blosharper)』는 화투 패로 족보를 짜 라운드 목표 점수를 돌파하는 타짜 느와르 로그라이크 덱빌딩 게임입니다. 순수한 운에 기대지 마세요. 무자비한 지하 도박판에서 은밀한 '꼼수' 스킬을 조합해 빚을 갚고, 사천왕 보스를 무너뜨려 전설의 타짜로 살아남으세요.


<p align="center">
  <a href="https://store.steampowered.com/app/4718270/"><b>Steam</b></a> ·
  <a href="https://store.onstove.com/ko/games/105719"><b>STOVE</b></a> ·
  <a href="https://www.youtube.com/watch?v=fRmHvBgpXbk">Trailer</a> ·
  <a href="https://blosharper.com/#/guide/how-to-play">How to play</a> ·
  <a href="https://discord.gg/aJNJypBjKD">Discord</a> ·
  <a href="https://x.com/blosharper">X</a> ·
  <a href="https://www.youtube.com/@blosharper">YouTube</a>
</p>

## What this repository is

A static site served on Cloudflare Pages: the landing page, the player guides (rendered from the game's in-game manuals), store links and support/privacy pages. The game itself lives in a private repository; more from the team is at [github.com/Blosharper](https://github.com/Blosharper).

## Maintaining

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

The platform logos (`teaser/public/assets/steam_logo_white.svg`,
`teaser/public/assets/stove_symbol.png`) are owned here: the game's teaser
sync no longer copies them (Blosharper/blosharper#1067). Edit them in this
repository.
