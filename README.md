# Resume

I had my resume on Overleaf using Latex, and for years I had no issues. Recently I went to update my resume and it was just so bad as a free user. My resume would keep hitting the timeout limit for the PDF render. What was worst is that I could not download my resume as the render would hit the timeout and would block the download.

## Tech

- React
- TailwindCSS

I just created a page `h-[11in] w-[8.5in]` that matches the dimentions of letter paper.

## CI/CD

Created a workflow for generating the PDF in light and dark mode

## Bugs/Imp 

- [ ] Need to move away from system fonts, printing a PDF with custom font makes the PDF text non selectable (bad for ATS).
- [ ] Figure out how to add embed sections, my latex pdf had sections and I want them for this resume aswell.
- [ ] Auto semantic version increase and auto create of release with the PDF (Just for fun).