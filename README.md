# Pepper Table

A responsive, static restaurant website concept built around an illustrative Nigerian menu. This is a portfolio project, not a real restaurant. It has no orders, bookings, location, prices, opening hours, or allergen guarantees.

## Pages and interactions

- `index.html`: home, featured dishes, and links into the menu.
- `menu.html`: seven sample dishes, live text search, category filters, result count, and empty state.
- `story.html`: the idea behind the concept.
- `styles.css` and `script.js`: responsive design and menu/navigation behavior. No dependencies or build step.
- `assets/`: optimized WebP food imagery and SVG favicon. The food photographs are AI-generated illustrations of jollof with chicken and plantain, egusi with pounded yam, and grilled tilapia. They do not depict a real kitchen or product.

## Run and deploy

Open `index.html` in a browser or serve this folder with `python -m http.server 8000`. For Vercel, import the GitHub repository as an **Other** framework, leave the build command empty, and deploy the repository root as the output directory. The `.html` pages have direct URLs, such as `/menu.html`.

In Termux after downloading the zip into Downloads:

```sh
cd ~/projects
unzip -o ~/storage/downloads/pepper-table-site.zip
cd pepper-table-site
git init -b main
git add .
git commit -m "Build Pepper Table restaurant concept"
gh repo create SwiftDG/pepper-table-site --public --source=. --remote=origin --push
```

The `gh repo create` command requires GitHub CLI authentication. If this repository name is taken, choose another name. Then import that GitHub repository into Vercel. Each later edit can be deployed with `git add . && git commit -m "Describe change" && git push`.

## Turning this into a real restaurant site

Replace the fictional name, sample menu and generated images with approved business content; verify every price, ingredient and allergen statement. Add real contact, address, hours, ordering and reservation links only after the service exists and works. On the final domain, add canonical URLs, an accurate sitemap and `robots.txt`, relevant social preview images, and truthful Restaurant structured data. Submit the sitemap in Google Search Console and test real pages on mobile and with a keyboard. Search visibility depends on crawlability and relevance; indexing and ranking are not guaranteed.
