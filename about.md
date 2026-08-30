## Frontend Product Requirements Document (PRD): About Section

### 1. Architecture & Tech Stack Continuity

Maintain the existing portfolio architecture to ensure seamless routing and performance.

* **Core Framework:** ReactJS with Next.js.
* **Styling:** Tailwind CSS for responsive grids, fluid typography, and maintaining the global dark theme (`#000000` background, `#FFFFFF` text).
* **Media Handling:** `next/image` for optimizing the complex nested profile picture to prevent layout shift and ensure fast loading.

### 2. Global Layout Structure

The desktop viewport utilizes a split-screen CSS Grid layout (`grid-cols-1 md:grid-cols-2`).

* **Theme:** Continuous Global Dark Mode.
* **Left Column (Narrative & Visual):** Contains the section identifier, the primary biography text, and the stylized profile image. Elements are stacked vertically with left alignment.
* **Right Column (Milestones & Data):** A staggered, asymmetrical layout displaying key statistics and career milestones. This requires absolute positioning within a relative container or a complex CSS grid to achieve the floating, non-linear visual arrangement.

### 3. Component Specifications

#### 3.1 Left Column Components (Narrative & Media)

| Component | UI/UX Specifications | Content Details |
| --- | --- | --- |
| **Section Label** | Small, uppercase sans-serif typography (`text-sm uppercase tracking-wider`). Left-aligned. | "ABOUT ME" |
| **Biography Paragraph** | Medium-large typography (`text-xl` or `text-2xl`), regular font weight, moderate line-height (`leading-relaxed`) for readability. | "I'm Ahmad Akbar Fauzani, a Graphic Designer crafting clean, purposeful visuals. I design for clarity and impact, ensuring every project looks exceptional and functions perfectly. Let's build something great together." |
| **Stylized Profile Image** | Requires a composite container. The outer wrapper acts as the "camera body" with dark gray/black tones and rounded corners (`rounded-2xl`). The inner image uses a digital camera UI overlay (Sony Cyber-shot interface details: ISO, battery, focus brackets) mapped over the actual portrait photograph. | Portrait image of the user framed within a retro digital camera UI aesthetic. |

#### 3.2 Right Column Components (Milestones & Statistics)

*Note: All items in this column utilize a two-tier typographic hierarchy: A large, semi-bold value (`text-4xl` or `text-5xl`) paired with a smaller, regular-weight label (`text-sm`).*

| Component | UI/UX Specifications | Content Details |
| --- | --- | --- |
| **Stat Block 1 (Top Right)** | Positioned in the upper right quadrant of the container. | Value: "3 Years"<br>

<br>Label: "Of Learning" |
| **Stat Block 2 (Center Left)** | Positioned slightly below Block 1, shifted towards the left. | Value: "2 Years"<br>

<br>Label: "Freelancer" |
| **Stat Block 3 (Mid Right)** | Positioned below Block 2, shifted back towards the right edge. Connects to the Visual Communication Design credentials from Dewantara Vocational School. | Value: "Fresh Graduate"<br>

<br>Label: "Visual Communication Design" |
| **Stat Block 4 (Bottom Left)** | Positioned in the lower left quadrant of the container. | Value: "20+"<br>

<br>Label: "Projects" |

### 4. Responsive & Interactive Requirements

* **Mobile Breakpoint Strategy (Max-width: 768px):**
* The two-column grid must collapse into a single vertical stack (`flex-col`).
* The Left Column (Bio and Profile Image) renders first.
* The Right Column (Milestones) renders below the image. The staggered, floating layout of the statistics should reflow into a standard 2x2 symmetrical grid (`grid-cols-2 gap-4`) or a centered vertical list to ensure readability on narrow screens.


* **Entrance Animations:** Implement scroll-triggered animations (e.g., using Framer Motion or Intersection Observer).
* **Text & Image:** Fade-in with a slight upward translation (`translate-y-4` to `translate-y-0`) when scrolling into view.
* **Milestone Stats:** Staggered fade-in delays for the statistics (e.g., Block 1 appears, then 100ms later Block 2, etc.) to emphasize the floating layout on desktop.


* **Image Hover State:** The stylized digital camera profile picture can feature a subtle brightness shift or a slight scale effect (`scale-[1.02]`) on hover to indicate interactivity or simply add polish.