# Home Page Consistency Improvements

## Overview
Improve the visual consistency of the FAQ and Available Conversions sections on the home page to match the sophisticated styling of the "Why Choose Convert Case?" section.

## Current State Analysis

### Why Choose Convert Case? Section
- Uses [`InfoGrid`](components/shared/info-grid.tsx) and [`InfoCard`](components/shared/info-card.tsx) components
- Has icons for each item
- Sophisticated styling with gradients and animations
- Consistent visual hierarchy

### FAQ Section
- Uses new [`FAQSection`](components/shared/faq-section.tsx) component
- Simple expandable details/summary
- No icons or visual enhancements
- Looks plain compared to other sections

### Available Text Case Conversions Section
- Uses simple divs with basic styling
- No icons
- Inconsistent with other sections
- Lacks visual appeal

## Proposed Improvements

### 1. Enhance FAQ Section Styling

**Options:**
- Add icons to FAQ items
- Improve visual hierarchy
- Add subtle animations
- Better color scheme matching the theme

**Implementation:**
- Update [`FAQItem`](components/shared/faq-item.tsx) to support optional icons
- Add visual enhancements like:
  - Gradient borders
  - Subtle hover effects
  - Better spacing and typography
  - Icon support for each FAQ

### 2. Create Conversion Card Component

**New Component:** `components/case-converter/conversion-card.tsx`

**Purpose:** Display a single conversion option with icon and description

**Features:**
- Icon for each conversion type
- Consistent styling with InfoCard
- Hover effects
- Gradient accents
- Responsive design

**Props:**
```typescript
interface ConversionCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}
```

### 3. Create Conversion Grid Component

**New Component:** `components/case-converter/conversion-grid.tsx`

**Purpose:** Display conversion options in a grid layout

**Features:**
- Responsive grid (1-3 columns)
- Consistent spacing
- Supports different card sizes
- Matches InfoGrid styling

**Props:**
```typescript
interface ConversionGridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3;
  className?: string;
}
```

## Implementation Steps

1. Create `ConversionCard` component with icon support
2. Create `ConversionGrid` component
3. Update home page to use new components for Available Conversions section
4. Optionally enhance FAQ section with icons and better styling
5. Test visual consistency across all sections
6. Run TypeScript type check
7. Run build to verify

## Benefits

- **Visual Consistency**: All sections will have a cohesive design
- **Better UX**: Icons make content more scannable
- **Professional Look**: Enhanced styling improves perceived quality
- **Maintainability**: Reusable components for future use
- **Accessibility**: Better visual hierarchy and structure

## Icon Mapping for Conversions

| Conversion Type | Icon |
|----------------|-------|
| Sentence case | `FileText` |
| lower case | `Type` |
| UPPER CASE | `Type` |
| Capitalized Case | `Type` |
| Title Case | `FileText` |
| aLtErNaTiNg cAsE | `Zap` |
| InVeRsE CaSe | `RefreshCw` |
