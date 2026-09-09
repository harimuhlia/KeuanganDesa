---
name: Sistem Tata Kelola Keuangan Desa
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#006c4c'
  on-secondary: '#ffffff'
  secondary-container: '#95f2c7'
  on-secondary-container: '#00714f'
  tertiary: '#361900'
  on-tertiary: '#ffffff'
  tertiary-container: '#552b00'
  on-tertiary-container: '#eb851c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#98f5ca'
  secondary-fixed-dim: '#7cd8af'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005138'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  display-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  numeric-table:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-base: 1rem
  space-lg: 1.25rem
  space-xl: 1.5rem
  space-2xl: 2rem
  gutter: 1rem
  ledger-cell-padding-y: 0.5rem
  ledger-cell-padding-x: 0.75rem
---

## Brand & Style

The design system establishes an authoritative, dependable, and audit-ready digital environment engineered specifically for Indonesian village governance (GovTech / SISKEUDES Modern). Serving village treasurers (*Kaur Keuangan*), village heads (*Kepala Desa*), regional auditors (*Inspektorat Daerah*), and ministry overseers, the interface projects procedural integrity, fiscal precision, and unshakeable institutional clarity.

The visual style blends **Corporate / Modern enterprise architecture** with **data-dense administrative utility**. It eliminates ornamental fluff in favor of structured financial ledgers, unambiguous validation states, and strict visual hierarchy. The emotional baseline is one of institutional assurance: every rupiah accounted for, every transaction traced, and every regulatory status visible at a glance.

## Colors

The color palette is derived directly from Indonesian civic institutions and rigorous accounting frameworks:

- **Primary (`#1a365d` - Deep Navy Blue):** Establishes institutional gravity, formal governance, structural navigation, and primary administrative actions.
- **Secondary (`#0d7a57` - Forest Emerald Green):** Signals fiscal realization (*Realisasi*), verified expenditures, balanced ledgers, and positive approval workflows.
- **Tertiary (`#d97706` - Warm Gold / Amber):** Highlights pending verifications (*Menunggu Verifikasi*), budget adjustments (*Perubahan*), fiscal threshold alerts, and compliance caveats.
- **Neutral (`#64748b` - Slate Gray):** Governs structural borders, secondary labels, disabled states, and metadata counters.

### Semantic & Ledger Color Tokens
- **Canvas / App Background:** `#f8fafc` (Cool Slate 50)
- **Surface / Card Background:** `#ffffff` (Pure White)
- **Structural Border:** `#e2e8f0` (Slate 200)
- **Ledger Row Hover:** `#f1f5f9` (Slate 100)
- **Fiscal Deficit / Error:** `#dc2626` (Red 600)
- **Fiscal Allocation / Pagu:** `#2563eb` (Blue 600)

## Typography

Typography prioritizes high scannability, rapid comprehension of bureaucratic codifications (e.g., Kode Rekening `1.2.01.01`), and exact numerical alignment in financial spreadsheets.

- **Headlines (`Plus Jakarta Sans`):** Selected for clean geometric authority. Used for top-level module headings, regional governance titling, modal dialog titles, and KPI metric labels.
- **Body & Data Grid (`Inter`):** Applied across transaction ledgers, form inputs, status chips, and metadata notes. Crucially, all monetary figures and account codes must enforce tabular numbers (`tnum`) to maintain vertical decimal alignment across multi-row balance sheets.

## Layout & Spacing

The layout model is a **fluid, high-density dashboard grid** paired with a fixed 260px administrative sidebar on desktop. Village administrators work with wide, multi-column budgetary spreadsheets requiring maximum horizontal screen real estate.

- **Desktop (1280px+):** Fixed left navigation rail, dynamic main workspace with 16px to 24px outer margins, and customizable multi-column layout cards.
- **Tablet (768px - 1024px):** Collapsible sidebar, horizontal scroll enabled for fiscal tables with sticky row headers and sticky account code columns.
- **Data Density Standard:** Table rows adhere to a compact 36px–40px height standard, with vertical padding restricted to `0.5rem` (`ledger-cell-padding-y`) to maximize information display without requiring excessive scrolling during reconciliation.

## Elevation & Depth

To maintain enterprise sobriety and prevent visual clutter, this design system relies primarily on **low-contrast outlines and crisp structural borders** rather than dramatic drop shadows.

- **Level 0 (Canvas Base):** `#f8fafc` background with no elevation.
- **Level 1 (Cards, Ledger Containers):** Pure `#ffffff` surface bounded by a continuous 1px solid border in `#e2e8f0`. Shadow is faint and diffuse: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
- **Level 2 (Popovers, Filter Menus, Verification Drawers):** `#ffffff` surface, 1px `#cbd5e1` border, backed by an ambient shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Modal Confirmation / Audit Sign-off):** Centered `#ffffff` overlay box, 1px `#94a3b8` border, deep backdrop scrim: `rgba(15, 23, 42, 0.5)`.

## Shapes

The design system enforces a **Level 1 (Soft)** shape profile (`0.25rem` / `4px` default radius). 

- **Form controls, table cells, and ledger cards** use precise 4px corners (`rounded`), reflecting the rigorous structure of accounting software.
- **Status Pills and Badges** uniquely employ full capsule rounding (`9999px`) to immediately distinguish workflow states (e.g., *Disetujui*, *Pagu*) from square interactive inputs and rectangular data containers.
- Larger spatial wrappers (main dashboard cards, verification sheets) limit their corner radius to `0.5rem` (`8px` / `rounded-lg`).

## Components

### 1. Budgetary Ledger Tables (*Tabel Buku Kas Umum & Rencana Anggaran*)
- **Header:** Background `#f1f5f9`, border-bottom 2px solid `#cbd5e1`. Column labels in `label-sm`, uppercase, color `#475569`.
- **Numeric Alignment:** Debit, Kredit, Pagu, and Realisasi columns strictly align right with `numeric-table` typography.
- **Alternating Rows:** White primary rows with subtle `#f8fafc` zebra striping on sub-accounts. Hover state shifts row to `#e2e8f0` at 50% opacity.

### 2. Status Pills & Verification Badges
Used for immediate bureaucratic classification:
- **Disetujui (Approved):** Background `#ecfdf5`, border `#a7f3d0`, text `#065f46`.
- **Menunggu Verifikasi (Pending):** Background `#fffbeb`, border `#fde68a`, text `#92400e`.
- **Ditolak / Selisih (Rejected/Deficit):** Background `#fef2f2`, border `#fecaca`, text `#991b1b`.
- **Murni (Original APBDes):** Background `#eff6ff`, border `#bfdbfe`, text `#1e40af`.
- **Perubahan (Amended APBDes):** Background `#f5f3ff`, border `#ddd6fe`, text `#5b21b6`.

### 3. Action Buttons
- **Primary (Approve / Simpan SPP):** Deep navy `#1a365d` background, white text, 4px border-radius, height 36px. Hover state shifts to `#0f2a4a`.
- **Secondary (Cetak Laporan / Export PDF):** White background, 1px border `#cbd5e1`, text `#1e293b`. Hover `#f8fafc`.
- **Success Action (Pencairan Dana):** Forest emerald `#0d7a57` background, white text. Hover `#0a6245`.

### 4. Input Fields & Account Code Pickers
- Border 1px solid `#cbd5e1`, height 36px, padding 8px 12px.
- Focus state: border-color `#1a365d`, box-shadow `0 0 0 2px rgba(26, 54, 93, 0.15)`.
- Currency Input: Prefixed with an un-editable, muted `Rp` block with right-aligned numeric font.

### 5. Fiscal Summary Cards (*Ringkasan Realisasi APBDes*)
- White card container with 1px `#e2e8f0` border.
- Features a top 3px accent line indicating fiscal category: Navy for *Total Pendapatan*, Emerald for *Total Realisasi Belanja*, Amber for *Sisa Lebih Perhitungan Anggaran (SiLPA)*.
- Integrated mini progress-bar depicting percentage of realized budget versus target ceiling.