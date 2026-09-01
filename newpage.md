# Product Requirements Document: "Fibra" Project Introduction Component

**Author:** Ahmad Akbar Fauzani
**Role:** UI/UX Designer & Frontend Developer
**Date:** September 1, 2026
**Status:** Draft

## 1. Executive Summary

The objective is to develop a minimalist, typography-focused project introduction component for a web portfolio. This section will serve as the narrative entry point for the "Fibra" case study—a modern pottery brand based in Jogjakarta. The design emphasizes a dark-mode aesthetic, clean visual hierarchy, and structural simplicity to draw focus entirely to the project's background story.

## 2. Scope & Exclusions

* **In Scope:** Project title, categorized metadata tags (pills), subtle divider lines, and narrative body text. Responsive layout ensuring readability across devices.
* **Out of Scope (Explicitly Excluded):** All external navigation links (e.g., Dribbble, Behance icons or text links) and interactive calls-to-action.

## 3. UI/UX & Design System Guidelines

To replicate the provided visual aesthetic, the component must adhere to the following design rules:

* **Theme:** Strictly Dark Mode (Background: `#0F1012` or similar deep charcoal/black, Text: Off-white/Light Gray for reduced eye strain).
* **Typography:** A clean, modern sans-serif typeface (e.g., Inter, Roboto, or SF Pro).
* **Heading:** Large, lightweight or regular weight, left-aligned.
* **Body Text:** Regular weight, slightly muted color compared to the heading, generous line height (e.g., `leading-relaxed`) for readability.


* **Layout Constraint:** The content container should have a maximum width (e.g., `max-w-3xl` or `max-w-4xl`) to maintain optimal line-length for reading, centered on the page but with left-aligned text.
* **Dividers:** Thin, low-opacity horizontal rules separating the title, tags, and body text.

## 4. Functional Requirements

### 4.1. Header Section

* **Title Display:** The component must render the project title "Fibra" dynamically or statically at the top of the container.
* **Top Divider:** A full-width (relative to the container) horizontal line immediately below the title.

### 4.2. Metadata Tags (Badges)

* **Tag Grouping:** A horizontal flex container holding the project categories.
* **Visual Style:** Badges must be rendered as rounded pills (e.g., `rounded-full`). They must have a thin solid border, transparent background, and small uppercase text.
* **Content:** Display the tags: "BRAND", "GRAPHIC", and "PRINT".
* **Bottom Divider:** A full-width horizontal line separating the tag section from the narrative text.

### 4.3. Narrative Body Content

* **Paragraph Structure:** The component must render three distinct paragraphs with consistent bottom margins.
* **Content Breakdown:**
* *Paragraph 1:* Contextual introduction to Southern Jogjakarta and its history as a sightseeing destination since 1971.
* *Paragraph 2:* Historical background on Kasongan's transition from paddy fields to a renowned pottery art center.
* *Paragraph 3:* The core brand ethos of "Fibra"—filtering and collecting modern, minimalist, functional, and eco-friendly pottery.



## 5. Technical Stack Recommendations

To build this efficiently for a live web portfolio, the following frontend stack is recommended:

* **Framework:** Next.js (React) for component-based architecture.
* **Styling:** Tailwind CSS to quickly implement the dark theme and typography constraints.

**Example Tailwind Architecture for the Container:**

```jsx
<section className="bg-[#111111] text-[#EAEAEA] min-h-screen py-20 px-6 font-sans">
  <div className="max-w-4xl mx-auto flex flex-col gap-6">
    {/* Content goes here */}
  </div>
</section>

```