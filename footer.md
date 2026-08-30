## Frontend Product Requirements Document (PRD): Contact & Footer Section

**Document Purpose:** Define frontend component architecture, layout specifications, and UI/UX requirements for the cohesive Contact and Footer section of the portfolio.

### 1. Architecture & Tech Stack

* **Core Framework:** ReactJS / Next.js.
* **Styling:** Tailwind CSS for managing the dark theme (`bg-[#111111]` or `bg-black`), complex grid alignments, and fluid typography.
* **Form Handling (Optional/Recommended):** React Hook Form for managing state and validation if the contact grid functions as a functional submission form.
* **Icons:** Native SVG assets for social media icons to ensure crisp rendering and accurate brand colors.

### 2. Global Layout Structure (Desktop)

This section occupies the bottom of the page and is split into three primary vertical zones, forming a cohesive closing experience.

* **Zone 1 (Header):** Large, centralized typography introducing the contact section.
* **Zone 2 (Contact Grid & Form):** A structured, 3-column CSS Grid layout displaying contact methods and minimalist input fields, capped by a full-width submit button.
* **Zone 3 (Footer Strip):** A standard bottom bar utilizing Flexbox (`justify-between`) to spread copyright, social, and direct contact details across three columns.

### 3. Component Specifications

#### 3.1 Contact Header (Zone 1)

| Component | UI/Tailwind Specifications | Content Details |
| --- | --- | --- |
| **Main Headline** | Massive display typography (`text-6xl` or `text-7xl`), sans-serif, white, regular to light font weight. | "Your message means a lot!" |
| **Sub-headline** | Medium typography (`text-lg` or `text-xl`), regular weight, standard line height. Margin top to separate from the headline. | "We'd love to hear from you! Whether you want to collaborate, need assistance with your projects." |

#### 3.2 Contact Grid & Form (Zone 2)

This section uses a multi-row, 3-column layout (`grid-cols-3`). Based on the presence of a "SUBMIT" button, the text values (e.g., "hello@dummy.com") function as minimal, borderless input fields with placeholder text.

| Row | Column 1 (Category Label) | Column 2 (Input/Data 1) | Column 3 (Input/Data 2) |
| --- | --- | --- | --- |
| **1: Email** | **"LET'S TALK"**<br>

<br>`text-xl uppercase` | **Label:** "Say Hello" (`text-xs text-gray-400`)<br>

<br>**Input/Value:** "hello@dummy.com" (`text-2xl text-white`) | **Label:** "For Enquiries" (`text-xs text-gray-400`)<br>

<br>**Input/Value:** "contact@dummy.com" (`text-2xl text-white`) |
| **2: Location** | **"LOCATION"**<br>

<br>`text-xl uppercase` | **Label:** "Address (optional)" (`text-xs text-gray-400`)<br>

<br>**Input/Value:** "Jakarta, Indonesia" (`text-2xl text-white`) | *(Empty)* |
| **3: Details** | **"CONTACT"**<br>

<br>`text-xl uppercase` | **Label:** "Phone" (`text-xs text-gray-400`)<br>

<br>**Input/Value:** "+XX XXXX XXXX" (`text-2xl text-white`) | **Label:** "Social" (`text-xs text-gray-400`)<br>

<br>**Input/Value:** "Fluffy_" (`text-2xl text-white`) |

#### 3.3 Submit Button

| Component | UI/Tailwind Specifications | Content Details |
| --- | --- | --- |
| **Action Button** | Full width (`w-full`), pill-shaped (`rounded-full`), light gray/white background (`bg-gray-200`), black text (`text-black`), centered text (`text-center`). Significant top margin to separate from the grid. | "SUBMIT" |

#### 3.4 Footer Strip (Zone 3)

A lower boundary strip separated from the form by vertical whitespace. Uses `flex flex-row justify-between items-end`.

| Component | UI/Tailwind Specifications | Content Details |
| --- | --- | --- |
| **Left Block (Direct Contact)** | Stacked vertically (`flex-col`), extremely small typography (`text-xs`), white text. | "ahmadakbarfauzani08@gmail.com"<br>

<br>"0813-8921-3295" |
| **Center Block (Socials)** | Horizontal row (`flex-row gap-3`), centered. Full-color, rounded-square brand SVGs. | Instagram, Behance, LinkedIn Icons. |
| **Right Block (Copyright)** | Stacked vertically (`flex-col`), right-aligned (`text-right`), extremely small typography (`text-xs`), uppercase. | "AHMADAKBARFAUZANI © 2026"<br>

<br>"ALL RIGHT RESERVED" |

### 4. Responsive & Interactive Requirements

* **Mobile Breakpoint Strategy (Max-width: 768px):**
* **Contact Grid:** The 3-column layout collapses to a 1-column vertical stack (`grid-cols-1`). Category labels ("LET'S TALK") act as section headers, with Input 1 and Input 2 stacking beneath them with adequate vertical spacing (`gap-y-6`).
* **Footer Strip:** Transforms from a horizontal spread to a vertical stack (`flex-col items-center gap-6`). Center alignment for all text and icons is recommended for the mobile view.


* **Input Interactivity:** If functioning as a form, clicking the large text (e.g., "hello@dummy.com") should focus an invisible or minimally styled `<input>` field, allowing the user to type over the placeholder.
* **Hover States (Desktop):**
* **Submit Button:** Slight opacity reduction (`hover:opacity-90`) or slight scale effect (`hover:scale-[1.01]`).
* **Footer Links:** The email and phone number in the bottom left should have an underline effect on hover. Social icons should have a slight upward translation (`hover:-translate-y-1`).