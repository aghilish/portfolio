# CV as Code with RenderCV

This directory contains your CV in both English and German, using RenderCV - a modern CV-as-code tool.

## Generated Files

- `Shahrooz_Aghili_CV_EN.pdf` - Your CV in English (PDF)
- `Shahrooz_Aghili_CV_DE.pdf` - Your CV in German (PDF)
- `Shahrooz_Aghili_CV_EN.yaml` - English CV source file
- `Shahrooz_Aghili_CV_DE.yaml` - German CV source file

## How to Update Your CV

1. Edit the YAML file (`Shahrooz_Aghili_CV_EN.yaml` or `Shahrooz_Aghili_CV_DE.yaml`)
2. Run the render command:
   ```bash
   rendercv render Shahrooz_Aghili_CV_EN.yaml
   ```
3. The updated PDF will be generated in the `rendercv_output` directory

## Customization Options

### Changing Colors

Edit the `design.colors` section in the YAML file:

```yaml
design:
  colors:
    name: rgb(0, 79, 144)         # Your name color
    connections: rgb(0, 79, 144)   # Contact info color
    section_titles: rgb(0, 79, 144) # Section headers
    links: rgb(0, 79, 144)         # Hyperlinks
```

Color examples:
- Blue: `rgb(0, 79, 144)`
- Red: `rgb(200, 0, 0)`
- Green: `rgb(0, 128, 0)`
- Purple: `rgb(128, 0, 128)`
- Black: `rgb(0, 0, 0)`

### Changing Font Size

Edit the `design.text.font_size` value:

```yaml
design:
  text:
    font_size: 10pt  # Options: 9pt, 10pt, 11pt, 12pt
```

### Changing Page Size

Edit the `design.page.size` value:

```yaml
design:
  page:
    size: a4  # Options: a4, us-letter
```

### Changing Theme

RenderCV supports multiple themes. Edit the `design.theme` value:

```yaml
design:
  theme: classic  # Options: classic, moderncv, sb2nov, engineeringresumes
```

To see all available themes:
```bash
rendercv new --theme <theme-name> "Your Name"
```

### Modifying Content

#### Adding/Editing Experience

```yaml
Experience:
  - company: Company Name
    position: Your Position
    location: City, Country
    start_date: 2024-01
    end_date: present  # or a date like 2024-12
    highlights:
      - First achievement
      - Second achievement
```

#### Adding/Editing Skills

```yaml
Skills:
  - label: Category Name
    details: Skill1, Skill2, Skill3
```

#### Adding/Editing Education

```yaml
Education:
  - institution: University Name
    area: Field of Study
    degree: Degree Name
    start_date: 2020
    end_date: 2024
    highlights:
      - Notable achievement
```

## Advanced Customization

For advanced customization options, check the [RenderCV documentation](https://docs.rendercv.com).

### Available Entry Types

RenderCV supports 7 entry types:
1. **BulletEntry** - Simple bullet points
2. **TextEntry** - Plain text entries
3. **OneLineEntry** - Label: Details format
4. **EducationEntry** - For education history
5. **ExperienceEntry** - For work experience
6. **NormalEntry** - Generic entry with name, date, location
7. **PublicationEntry** - For academic publications

## Useful Commands

```bash
# Generate CV from YAML
rendercv render Shahrooz_Aghili_CV_EN.yaml

# Create a new sample CV
rendercv new "Your Name"

# Validate YAML without rendering
rendercv render --validate-only Shahrooz_Aghili_CV_EN.yaml
```

## Tips

1. Keep your YAML files in version control (Git) to track changes
2. Test changes by rendering to PDF before finalizing
3. Use Markdown formatting in highlights for bold (**text**) and links ([text](url))
4. Date format: YYYY-MM for start_date and end_date, or use "present"
5. The LinkedIn data is already fully incorporated into both CVs

## Resources

- [RenderCV Documentation](https://docs.rendercv.com)
- [RenderCV GitHub](https://github.com/rendercv/rendercv)
- [RenderCV Web App](https://rendercv.com)

## Workflow Integration

You can automate CV generation using GitHub Actions or other CI/CD tools. Check out the [RenderCV Pipeline](https://github.com/rendercv/rendercv-pipeline) for examples.
