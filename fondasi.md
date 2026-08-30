## Frontend Product Requirements Document (PRD): Portfolio Home Page

### 1. Architecture & Tech Stack Recommendations

To achieve the high-performance, visually rich experience required for a graphic designer's portfolio, the recommended frontend architecture relies on component-based development and utility-first styling.

* **Core Framework:** ReactJS integrated with Next.js to handle optimized image loading and route pre-fetching for the navigation links.
* **Styling:** Tailwind CSS to efficiently manage the global dark theme, responsive grid layouts, and typography scaling.
* **Icons & Assets:** SVG-based icons (e.g., Lucide React or Heroicons) for the UI arrows, and native brand assets for the social links.

### 2. Global Layout Structure

The desktop viewport utilizes a two-column, asymmetrical split-screen layout.

* **Theme:** Global Dark Mode. Background color is solid black (`#000000` or equivalent dark hex like `#111111`), with primary text in white (`#FFFFFF`) to maximize contrast.
* **Left Column (Profile & Actions):** Designed to function as a sticky sidebar on desktop, anchoring the user's identity and primary calls to action while the right side scrolls.
* **Right Column (Navigation & Content):** A fluid, scrollable content area containing the site navigation and featured portfolio showcases.

### 3. Component Specifications

#### 3.1 Left Column Components (Sidebar)

| Component | UI/UX Specifications | Content Details |
| --- | --- | --- |
| **Identity Header** | Left-aligned, sans-serif typography. The name features a downward chevron icon (`v`), indicating an expandable accordion or dropdown menu for additional quick details. | Name ("AHMAD AKBAR FAUZANI"), Email, Phone Number. |
| **Divider** | Horizontal rule (`<hr>`), 1px solid, low opacity white/gray to separate contact info from actions. | N/A |
| **Action Buttons** | Pill-shaped (`rounded-full`), solid white background, black text. Requires an inline top-right directional arrow icon. | "BOOK A CALL", "MORE PROJECTS" |
| **Value Proposition** | Large-scale, responsive typography. High tracking/letter-spacing. Should use fluid typography (`clamp()`) to scale down gracefully on smaller viewports. | "Ensure 100% customer satisfaction - before closing the ticket." |
| **Social Container** | Block element anchored at the bottom. Small uppercase header. Full-color, rounded-square brand icons. | Header: "WHERE YOU CAN FIND ME". Icons: Instagram, Behance, LinkedIn. |

#### 3.2 Right Column Components (Content Area)

| Component | UI/UX Specifications | Content Details |
| --- | --- | --- |
| **Top Navigation** | Flexbox row, right-aligned, uppercase, small sans-serif font. The final link acts as a subtle CTA with a right chevron (`>`). | Links: ABOUT, SERVICES, SERTIFICATION, FAQS, GET IN TOUCH > |
| **Hero Introduction** | Medium-large typography, medium font weight. Acts as the primary page h1/h2 equivalent for SEO. | "Shaping a more beautiful and functional world through intentional design." |
| **Primary Project Feature** | Large, edge-to-edge container. Requires `next/image` for optimization of high-resolution graphic design mockups (e.g., magazine layouts). Includes a subtle caption below. | Image: Valorant-themed layout. Caption: "lorem ipsum" |
| **Secondary Project Strip** | Horizontal strip below the primary feature. Should be built as an overflow-x-scroll container (carousel) hiding the right edge to indicate scrollability. | Multiple cropped project thumbnails. |
| **Closing Statement** | Medium typography mirroring the styling of the Hero Introduction to create structural symmetry. | "Crafting meaningful, aesthetic, and impactful visual experiences." |

### 4. Responsive & Interactive Requirements

* **Mobile Breakpoint Strategy (Max-width: 768px):** The two-column split layout must collapse into a single-column vertical stack. The Left Column (Profile, CTAs, Big Text) should render first, followed by the Right Column (Projects, Closing Text). The Top Navigation should compress into a hamburger menu.
* **Hover States:**
* **Buttons:** The pill-shaped action buttons ("BOOK A CALL", "MORE PROJECTS") should feature a slight scale-up transformation (`scale-105`) and a subtle drop shadow on hover.
* **Navigation Links:** Text opacity shift (e.g., fading to 70% white) or an animated underline effect on hover.
* **Social Icons:** Slight upward translation (`-translate-y-1`) or brightness increase on hover.


* **Image Interactions:** The featured portfolio images should support click-to-expand (lightbox) functionality to allow users to inspect detailed UI/UX and layout work.