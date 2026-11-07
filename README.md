# alltiessevered.com

Static studio site for **All Ties Severed Productions, LLC**. It is ready for GitHub Pages and the custom domain `alltiessevered.com`.

Pages:

- `/` — studio home
- `/black-splatter/` — Black Splatter! game page
- `/music/` — All Ties Severed band page
- `/contact/` — email
- `/privacy/` — Privacy Policy for Black Splatter! (use this URL in Google Play)
- `/app-ads.txt` — AdMob publisher file (placeholder until you add your real ID)
- `/404.html` — custom not-found page

There is no build step and no framework. Open the HTML as-is.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080/](http://localhost:8080/) in a browser. Root-relative links (`/css/site.css`, `/black-splatter/`, and so on) need a local server; double-clicking an HTML file will not load the styles correctly.

## Publish on GitHub Pages

1. Create a GitHub account if you do not have one, then create a **public** repository (for example `alltiessevered.github.io` or `website`).
2. Upload every file in this folder to the repository, keeping the same structure. The `CNAME` file must stay at the repo root and contain `alltiessevered.com`.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set the branch to `main` (or `master`, if that is what you use) and the folder to `/ (root)`. Save.
6. Still on the Pages settings screen, set the custom domain to `alltiessevered.com`. GitHub should pick up the `CNAME` file. Check **Enforce HTTPS** once it becomes available (it can take a few minutes to a few hours after DNS works).

GitHub Pages on a free account needs a public repository.

## Point alltiessevered.com at GitHub (Squarespace Domains)

Your domain registration can stay at Squarespace and keep auto-renewing. You only change DNS so the domain stops pointing at Squarespace *hosting* and starts pointing at GitHub Pages.

In Squarespace: **Domains → alltiessevered.com → DNS settings**. Remove the old Squarespace website A / WWW records so they do not fight the new ones. Then add:

**A records** for the apex domain `@` / `alltiessevered.com`:

| Type | Host | Data |
|------|------|------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**CNAME** for `www`:

| Type | Host | Data |
|------|------|------|
| CNAME | `www` | `YOUR_GITHUB_USERNAME.github.io` |

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username (for example `jcastaneda.github.io`). Do not point `www` at Squarespace.

DNS can take anywhere from a few minutes to 48 hours. After it works:

- [https://alltiessevered.com/](https://alltiessevered.com/) should show this site
- [https://alltiessevered.com/privacy/](https://alltiessevered.com/privacy/) is the URL to paste into Play Console → App content → Privacy policy
- [https://alltiessevered.com/app-ads.txt](https://alltiessevered.com/app-ads.txt) is what AdMob will check

If you later verify the domain in Google Search Console, use a **URL prefix** property for `https://alltiessevered.com/` or a **Domain** property with a DNS TXT record. A Domain property will now work, because you own `alltiessevered.com`.

## Replace the AdMob placeholder

`app-ads.txt` currently contains `pub-PLACEHOLDER`. After you create your AdMob account and app:

1. In AdMob, open **Apps → app-ads.txt** (or **Settings**) and copy the exact line AdMob shows you. It looks like:

   `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`

2. Replace the placeholder line in `app-ads.txt`. Keep the file at the **site root** so it is served at `https://alltiessevered.com/app-ads.txt` — not in a subfolder.
3. Commit and push. AdMob can take up to 24 hours to see the update.

Do not invent a publisher ID. Use only the `pub-` value AdMob gives you.

## File notes

- `CNAME` tells GitHub Pages which domain to serve.
- `.nojekyll` tells GitHub not to process the site with Jekyll.
- Screenshots are compressed JPEGs of the real store shots. The logo is the in-game Black Splatter! mark. The favicon is icon option A (the violet rift).
