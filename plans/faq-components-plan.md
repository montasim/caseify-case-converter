# FAQ Components Plan

## Overview
Create reusable FAQ components to eliminate code duplication across the home, privacy, and terms pages.

## Current State
Three pages (home, privacy, terms) have nearly identical FAQ sections with only minor differences:
- Different heading IDs and text
- Different FAQ data sources
- Different bottom padding values

## Components to Create

### 1. FAQItem Component
**File:** `components/shared/faq-item.tsx`

**Purpose:** Display a single FAQ item with expandable details/summary

**Props:**
```typescript
interface FAQItemProps {
  question: string;
  answer: string;
  index?: number;
}
```

**Features:**
- Uses HTML `<details>` element for native expand/collapse
- Chevron icon that rotates when expanded
- Hover effects on summary
- Consistent styling across all pages

### 2. FAQSection Component
**File:** `components/shared/faq-section.tsx`

**Purpose:** Display a complete FAQ section with heading and multiple FAQ items

**Props:**
```typescript
interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
  headingId?: string;
  paddingBottom?: 'small' | 'large';
}
```

**Features:**
- Configurable heading text and ID
- Configurable bottom padding
- Renders all FAQ items
- Includes structured data support (optional)

## Type Updates

### Update `types/index.ts`
Add FAQ-related types for better type safety:

```typescript
/**
 * FAQ item interface
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Props for FAQ item component
 */
export interface FAQItemProps {
  question: string;
  answer: string;
  index?: number;
}

/**
 * Props for FAQ section component
 */
export interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
  headingId?: string;
  paddingBottom?: 'small' | 'large';
}
```

## Implementation Steps

1. Create `components/shared/faq-item.tsx`
2. Create `components/shared/faq-section.tsx`
3. Update `types/index.ts` with FAQ types
4. Update `app/page.tsx` to use new components
5. Update `app/privacy/page.tsx` to use new components
6. Update `app/terms/page.tsx` to use new components
7. Run TypeScript type check
8. Run build to verify

## Benefits

- **DRY Principle:** Eliminates duplicate FAQ code
- **Consistency:** Ensures all FAQ sections look and behave identically
- **Maintainability:** Changes to FAQ styling only need to be made in one place
- **Type Safety:** Proper TypeScript types for all props
- **Reusability:** Components can be used in future pages with FAQ sections

## Migration Notes

- All existing FAQ data (HOME_PAGE_FAQS, PRIVACY_PAGE_FAQS, TERMS_PAGE_FAQS) remain unchanged
- Structured data generation (generateFAQSchema) remains in lib/structured-data.ts
- No changes to SEO or accessibility features
