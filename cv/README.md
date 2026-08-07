# CV as Code with Typst (neat-cv)

Your CV is written directly in Typst using the [`neat-cv`](https://typst.app/universe/package/neat-cv) package, in both English and German.

## Source Files

- `neat-cv/cv_en.typ` - English CV source
- `neat-cv/cv_de.typ` - German CV source
- `neat-cv/shahrooz.jpeg` - Profile picture used by both

## Generated Files

- `Shahrooz_Aghili_CV_EN.pdf` - Your CV in English (PDF)
- `Shahrooz_Aghili_CV_DE.pdf` - Your CV in German (PDF)

These are also copied into `../public/cv.pdf` and `../public/cv-de.pdf` so the site's `/cv` download links resolve to the latest version.

## How to Update Your CV

1. Edit `neat-cv/cv_en.typ` and/or `neat-cv/cv_de.typ` directly (experience entries use `#entry(...)`, skills use `#item-with-level("Name", level)` where level is 1-5)
2. Compile to PDF:
   ```bash
   typst compile neat-cv/cv_en.typ neat-cv/Shahrooz_Aghili_CV_EN.pdf
   typst compile neat-cv/cv_de.typ neat-cv/Shahrooz_Aghili_CV_DE.pdf
   ```
   (or via the Python `typst` package: `python -m typst compile ...`, available in `.venv`)
3. Copy the resulting PDFs into `cv/` and `../public/` (`cv.pdf`, `cv-de.pdf`)

### Fonts required

Compiling requires these fonts installed system-wide, or the contact icons and body text silently fall back to substitutes:

```bash
brew install --cask font-noto-sans font-roboto font-fira-sans font-fontawesome
```

### Keeping it to 2 pages

Both files set `body-font-size: 9.5pt` in the `cv.with(...)` call specifically to keep the CV at 2 pages. If you add enough content to overflow again, reduce this further before letting it spill onto a near-empty 3rd page.

## Legacy: RenderCV

`Shahrooz_Aghili_CV_EN.yaml` / `_DE.yaml` and `.venv/` are left over from a prior RenderCV-based pipeline and are **no longer the source of truth**. They're kept for reference but are not used to generate the CVs above.

## Resources

- [neat-cv on Typst Universe](https://typst.app/universe/package/neat-cv)
- [Typst Documentation](https://typst.app/docs)
