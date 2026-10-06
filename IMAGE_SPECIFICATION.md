# SPS Generators — Image Asset Specification Guide

This guide provides the exact specifications, aspect ratios, target resolutions, and directory paths for every image used in the SPS Generators website.

---

## 📁 Target Directory Structure
All images must be placed in:
```
public/images/
├── hero/
├── products/
├── banner/
├── about/
├── applications/
├── clients/
└── cta/
```
*(For static HTML builds, the corresponding path is `assets/images/`)*

---

## 🖼️ Complete Image Manifest

### 1. Hero Section
| File Name | Target Path | Aspect Ratio | Recommended Resolution | Description & Visual Details |
|---|---|---|---|---|
| `hero-generator.jpg` / `hero-generator.webp` | `public/images/hero/` | **16:9** | **1920 × 1080 px** | Industrial warehouse or modern factory floor at night/dusk with warm ambient overhead lights. In the foreground/midground, a high-power industrial portable generator (Honda EU70is or Alpha Red/Black series) mounted on heavy-duty wheels with tow handles and control panel facing front/3-quarter angle. |

---

### 2. Product Range ("Choose Your Power")
| File Name | Target Path | Aspect Ratio | Recommended Resolution | Description & Visual Details |
|---|---|---|---|---|
| `petrol-generator.jpg` / `petrol-generator.webp` | `public/images/products/` | **4:3** | **1200 × 900 px** | Portable Petrol Generator (1 kVA – 13 kVA). Heavy-duty tubular red steel frame, black engine block, pull start, dual AC outlets, digital display meter, and rugged rubber wheels. Studio shot on light grey/white background. |
| `diesel-generator.jpg` / `diesel-generator.webp` | `public/images/products/` | **4:3** | **1200 × 900 px** | Industrial Diesel Generator (5 kVA – 1500 kVA). Acoustic soundproof weather-resistant canopy enclosure in industrial metallic grey or white with ventilation louvers, yellow caution labels, and digital micro-controller panel. |
| `inverter-generator.jpg` / `inverter-generator.webp` | `public/images/products/` | **4:3** | **1200 × 900 px** | Silent Inverter Generator (Portable Power). Compact suitcase-style enclosure in sleek red and matte black with integrated ergonomic top handle, USB ports, silent exhaust, and digital load meter. |

---

### 3. Power Range Showcase Banner
| File Name | Target Path | Aspect Ratio | Recommended Resolution | Description & Visual Details |
|---|---|---|---|---|
| `wide-range-generators.jpg` / `wide-range-generators.webp` | `public/images/banner/` | **16:9** (or **21:9**) | **1920 × 1080 px** (or **2560 × 1080 px**) | Wide cinematic panoramic view of industrial diesel generators aligned in a row in a power yard or industrial facility at sunset/twilight. Multiple soundproof canopy gensets of escalating sizes with factory chimneys or towers in the background. |

---

### 4. About Section — Managing Director
| File Name | Target Path | Aspect Ratio | Recommended Resolution | Description & Visual Details |
|---|---|---|---|---|
| `R. Nikil Kumar.png` | `public/images/` & `assets/images/` | **~2:3** | **1012 × 1555 px** | Official portrait of Mr. **R. Nikil Kumar** (Managing Director). Professional executive in black tailored suit and black shirt with hands in pockets. Clean transparent/isolated background. |
| `signature.svg` / `signature.png` | `public/images/about/` | **3:1** | **600 × 200 px** | Authentic handwritten cursive signature of "R. Nikil Kumar" in dark ink with transparent background. |

---

### 5. Applications ("Power For Every Environment")
All application cards follow a uniform **3:4** vertical aspect ratio:

| File Name | Target Path | Aspect Ratio | Recommended Resolution | Description & Visual Details |
|---|---|---|---|---|
| `app-commercial.jpg` | `public/images/applications/` | **3:4** | **750 × 1000 px** | **Commercial**: High-rise corporate office towers and luxury hotel building brightly illuminated at dusk with city traffic light trails. |
| `app-construction.jpg` | `public/images/applications/` | **3:4** | **750 × 1000 px** | **Construction**: Active civil infrastructure site with tall tower cranes, scaffolding, and steel beams against an intense orange sunset. |
| `app-industrial.jpg` | `public/images/applications/` | **3:4** | **750 × 1000 px** | **Industrial**: Heavy manufacturing factory or oil/chemical refinery illuminated at night with glowing pipes and chimneys. |
| `app-healthcare.jpg` | `public/images/applications/` | **3:4** | **750 × 1000 px** | **Healthcare**: Modern multi-story hospital medical center with illuminated "EMERGENCY 24/7" entrance and medical bay lighting. |
| `app-events.jpg` | `public/images/applications/` | **3:4** | **750 × 1000 px** | **Events**: Grand outdoor concert festival stage with vibrant purple/magenta laser lights, spotlight arrays, and crowd. |
| `app-residential.jpg` | `public/images/applications/` | **3:4** | **750 × 1000 px** | **Residential**: Luxury modern architectural villa with panoramic glass walls, glowing interior lights, and outdoor pool at twilight. |

---

### 6. Lead Generation & Consultation Form
| File Name | Target Path | Aspect Ratio | Recommended Resolution | Description & Visual Details |
|---|---|---|---|---|
| `cta-technician.jpg` / `cta-technician.webp` | `public/images/cta/` | **16:9** | **1920 × 1080 px** | Certified electrical power technician wearing white hardhat and fluorescent high-vis safety vest standing inside a generator plant control room inspecting instrument panels at dusk. |

---

### 7. Brand & Client Logos (Vector Preferred)
| Brand / Client | Format | Recommended Dimensions | Color Notes |
|---|---|---|---|
| **SPS Generators (Main Logo)** | SVG / PNG | 300 × 80 px | White circle badge, Red (#ea1d24) accent arc, White text |
| **Brands**: Honda, Alpha, X-NT, Hawk, Premium King, TMTL, Powerol by Mahindra, Kirloskar | SVG / PNG | 240 × 80 px each | Clean transparent background, original brand colors |
| **Clients**: Burger Man, US Pizza, Zudio, Grow Hair, Dhanarathna, VRC, Addin, Go Rural, TN Cricket Assoc, Icon Engineer, Black Forest, FB Cake, SIET, Wright Energy | SVG / PNG | 200 × 60 px each | Monochrome or dark slate (#334155) on transparent background |

---

### 💡 Format & Performance Best Practices
1. **WebP Format**: Use `.webp` for photos (reduces file weight by 60–80% without perceptible loss of clarity).
2. **SVG Format**: Always use `.svg` for logos, badges, and icons for crisp rendering on Retina/4K displays.
3. **Compression**: Compress JPEGs to ~85% quality to maintain sub-second LCP (Largest Contentful Paint) for Google Core Web Vitals.
