# Accessibility Validation Checklist

This document provides a checklist to validate the accessibility improvements implemented for the Quote page layout.

## Manual Testing Checklist

### 1. Keyboard Navigation
- [ ] **Tab Order**: Press Tab key to navigate through all interactive elements
  - Form elements (file upload, page count input, service checkboxes) should come first
  - Calculate button should be accessible after form elements
  - Cards should be navigable in logical order: Estimated Cost → What's Included → Project Timeline → FAQ → Next Steps
- [ ] **Focus Visibility**: All focused elements should have clear visual focus indicators
- [ ] **Skip Navigation**: Ensure all interactive elements can be reached via keyboard
- [ ] **Enter/Space Keys**: File upload area should respond to Enter and Space keys

### 2. Screen Reader Compatibility
- [ ] **Semantic Structure**: Use screen reader to verify proper heading hierarchy
- [ ] **ARIA Labels**: Verify all dynamic content areas have appropriate labels
- [ ] **Role Attributes**: Check that cards are properly identified as regions
- [ ] **Live Regions**: Status messages (PDF processing, errors) should be announced
- [ ] **Form Labels**: All form inputs should have associated labels

### 3. Visual Accessibility
- [ ] **Focus Indicators**: All interactive elements show clear focus outlines
- [ ] **Color Contrast**: Text maintains adequate contrast ratios
- [ ] **High Contrast Mode**: Layout works properly in high contrast mode
- [ ] **Reduced Motion**: Animations respect prefers-reduced-motion setting

### 4. Dynamic Content
- [ ] **Quote Calculation**: Screen reader announces when quote is calculated
- [ ] **Error Messages**: Error messages are properly announced as alerts
- [ ] **File Upload Status**: PDF processing status is communicated to screen readers
- [ ] **Service Selection**: Service descriptions are available to assistive technology

## Automated Testing Tools

### Browser Extensions
1. **axe DevTools** - Install and run accessibility audit
2. **WAVE** - Web Accessibility Evaluation Tool
3. **Lighthouse** - Run accessibility audit in Chrome DevTools

### Screen Reader Testing
- **Windows**: NVDA (free) or JAWS
- **macOS**: VoiceOver (built-in)
- **Linux**: Orca

## Expected Behavior

### Tab Order Sequence
1. File upload area (with keyboard activation)
2. Manual page count input
3. Service checkboxes (in order)
4. Calculate button
5. Estimated Cost card (if quote exists)
6. What's Included card
7. Project Timeline card
8. FAQ card
9. Next Steps card (if quote exists)

### ARIA Labels and Roles
- Form section: `role="form"` with `aria-label="Quote Calculator Form"`
- Results section: `role="region"` with `aria-label="Quote Results and Information"`
- Each card: `role="region"` with appropriate `aria-labelledby`
- Lists: Proper `role="list"` and `role="listitem"`
- Status messages: `role="status"` or `role="alert"` with `aria-live`

### Focus Management
- Cards are focusable with `tabIndex={0}`
- Focus indicators are clearly visible
- Focus order follows logical content flow
- No focus traps or inaccessible content

## Common Issues to Check

1. **Missing Labels**: Ensure all form controls have labels
2. **Poor Focus Visibility**: Focus indicators should be clearly visible
3. **Incorrect Tab Order**: Tab order should follow visual layout logic
4. **Missing Status Updates**: Dynamic content changes should be announced
5. **Inaccessible Interactive Elements**: All clickable elements should be keyboard accessible

## Testing Commands

```bash
# Build the project
npm run build

# Start development server for testing
npm run dev

# Run linting (includes accessibility rules if configured)
npm run lint
```

## Validation Results

After testing, document any issues found and their resolutions:

- [ ] All keyboard navigation works correctly
- [ ] Screen reader compatibility verified
- [ ] Focus management is proper
- [ ] Dynamic content is accessible
- [ ] No accessibility violations found in automated tools