# Webflow Variables Mapped from Project CSS

This document lists **colors** and **fonts** extracted from `src/styles/theme.css` (and component usage) for creating Webflow design variables. Your site **MIS 2025** was detected; variables must be created with the **Webflow Designer** open and the **MCP Companion App** running.

---

## 1. Designer setup (required to create variables)

Variables are created via the Designer (not the Data API). To let the assistant create them for you:

1. Open your site in the Webflow Designer.
2. Launch the MCP Companion App by opening this link (Designer tab must be active):
   **[Open MIS 2025 in Designer with MCP](https://mis-2025-3de4ed.design.webflow.com?app=dc8209c65e3ec02254d15275ca056539c89f6d15741893a0adf29ad6f381eb99)**
3. Return to Cursor and ask to create the Webflow variables again.

---

## 2. Color variables (from `theme.css`)

Values are from `:root` in `src/styles/theme.css`. `oklch()` and `rgba()` are converted to hex where needed for Webflow.

| Webflow variable name | CSS source | Hex value | Notes |
|-----------------------|------------|-----------|--------|
| **Background** | `--background` | `#ffffff` | Page/card background |
| **Foreground** | `--foreground` | `#252525` | From oklch(0.145 0 0) |
| **Card** | `--card` | `#ffffff` | |
| **Card-foreground** | `--card-foreground` | `#252525` | |
| **Popover** | `--popover` | `#ffffff` | |
| **Popover-foreground** | `--popover-foreground` | `#252525` | |
| **Primary** | `--primary` | `#030213` | Brand dark |
| **Primary-foreground** | `--primary-foreground` | `#ffffff` | |
| **Secondary** | `--secondary` | `#e8e9f2` | From oklch(0.95 0.0058 264.53) |
| **Secondary-foreground** | `--secondary-foreground` | `#030213` | |
| **Muted** | `--muted` | `#ececf0` | |
| **Muted-foreground** | `--muted-foreground` | `#717182` | |
| **Accent** | `--accent` | `#e9ebef` | |
| **Accent-foreground** | `--accent-foreground` | `#030213` | |
| **Destructive** | `--destructive` | `#d4183d` | |
| **Destructive-foreground** | `--destructive-foreground` | `#ffffff` | |
| **Border** | `--border` | `#e6e6e6` | Approx. for rgba(0,0,0,0.1) on white |
| **Input-background** | `--input-background` | `#f3f3f5` | |
| **Switch-background** | `--switch-background` | `#cbced4` | |
| **Ring** | `--ring` | `#b5b5b5` | From oklch(0.708 0 0) |
| **Chart-1** | `--chart-1` | `#d4832d` | From oklch(0.646 0.222 41.116) |
| **Chart-2** | `--chart-2` | `#4a9b8a` | From oklch(0.6 0.118 184.704) |
| **Chart-3** | `--chart-3` | `#4a5a7a` | From oklch(0.398 0.07 227.392) |
| **Chart-4** | `--chart-4` | `#d4a84a` | From oklch(0.828 0.189 84.429) |
| **Chart-5** | `--chart-5` | `#c99b3d` | From oklch(0.769 0.188 70.08) |
| **Sidebar** | `--sidebar` | `#fafafa` | From oklch(0.985 0 0) |
| **Sidebar-foreground** | `--sidebar-foreground` | `#252525` | |
| **Sidebar-primary** | `--sidebar-primary` | `#030213` | |
| **Sidebar-primary-foreground** | `--sidebar-primary-foreground` | `#fafafa` | |
| **Sidebar-accent** | `--sidebar-accent` | `#f7f7f7` | From oklch(0.97 0 0) |
| **Sidebar-accent-foreground** | `--sidebar-accent-foreground` | `#353535` | From oklch(0.205 0 0) |
| **Sidebar-border** | `--sidebar-border` | `#ebebeb` | From oklch(0.922 0 0) |
| **Sidebar-ring** | `--sidebar-ring` | `#b5b5b5` | |

---

## 3. Font variables (from theme + components)

From `theme.css`: `--font-size: 16px`, `--font-weight-medium: 500`, `--font-weight-normal: 400`.  
From `Components.tsx` / `Blog.tsx` / `Frontpage.tsx`: **Inter** and **Manrope** are used (Light, Regular, Medium).

| Webflow variable name | CSS / usage | Value |
|-----------------------|-------------|--------|
| **Font size base** | `--font-size` | `16px` (use as **Size** variable) |
| **Font weight normal** | `--font-weight-normal` | `400` (use as **Number** variable) |
| **Font weight medium** | `--font-weight-medium` | `500` (use as **Number** variable) |
| **Font family heading / UI** | Component usage | `Manrope, sans-serif` |
| **Font family body / display** | Component usage | `Inter, sans-serif` |

If you use only one font stack in Webflow, use **Manrope, sans-serif** as the primary and **Inter, sans-serif** as secondary (or vice versa depending on your design).

---

## 4. Optional: dark mode (from `.dark` in theme.css)

If you use a **Dark** variable mode in Webflow, these hex values approximate the `.dark` overrides:

| Variable | Dark hex |
|----------|----------|
| Background | `#252525` |
| Foreground | `#fafafa` |
| Primary | `#fafafa` |
| Primary-foreground | `#353535` |
| Muted | `#454545` |
| Muted-foreground | `#b5b5b5` |
| Border | `#454545` |
| Destructive | `#8b2a2a` (approx.) |
| Sidebar | `#353535` |
| Sidebar-foreground | `#fafafa` |
| Chart-1 | `#2d4a9e` (blue) |
| Chart-2 | `#5db89a` (teal) |
| Chart-3 | `#c99b3d` (orange) |
| Chart-4 | `#a84ad4` (purple) |
| Chart-5 | `#d46a4a` (red-orange) |

---

## 5. Summary

- **Colors:** 32 light-theme color variables (plus optional dark mode set).
- **Fonts:** 2 font-family variables (Manrope, Inter), 1 base font-size (16px), 2 font-weight numbers (400, 500).

After the Designer and MCP app are open, you can say: *“Create the Webflow variables from docs/WEBFLOW_VARIABLES_FROM_CSS.md”* and the assistant can create the variable collection and variables for you.
