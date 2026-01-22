'use client';
/**
 * TopNavigation Component
 * Mobile navigation bar with hamburger menu, tabs with bottom borders, and edit icon
 * Aligned with Tab component design patterns
 */

import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { Navigation24Regular, Edit24Regular } from '@fluentui/react-icons';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import typography from '../../tokens/typography';

// Container for the entire navigation
const NavContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  height: '48px',
  backgroundColor: systemColors.background.white,
  borderBottom: `${borders.width.thin}px solid ${systemColors.border.strong}`,
  padding: `0 ${spacing[3]}px`,
});

// Icon button (hamburger and edit icon)
const IconButton = styled(Box)(({ disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  marginBottom: spacing[2],
  cursor: disabled ? 'not-allowed' : 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: borders.radius.xs,
  transition: 'all 0.2s ease-in-out',
  color: systemColors.interactive.primary.background.default,
  
  '&:hover': disabled ? {} : {
    backgroundColor: systemColors.interactive.secondary.background.hover,
  },
  
  '&:focus-visible': disabled ? {} : {
    outline: 'none',
    boxShadow: `0 0 0 2px ${systemColors.interactive.focus}`,
  },
  
  '& svg': {
    fontSize: '20px',
  },
}));

// Tab list container
const TabList = styled(Box)({
  display: 'flex',
  gap: spacing[2],
  alignItems: 'flex-end',
  flex: 1,
  justifyContent: 'center',
  marginLeft: spacing[2],
  marginRight: spacing[2],
});

// Individual tab button matching Tab component design
const TabButton = styled(Box)(({ selected, disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${spacing[2]}px 12px`,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: `${borders.radius.xs}px ${borders.radius.xs}px 0 0`,
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  
  // Selected state border
  ...(selected && {
    borderBottom: `3px solid ${systemColors.interactive.primary.border.active}`,
  }),
  
  // Hover state
  '&:hover': disabled ? {} : {
    backgroundColor: systemColors.interactive.secondary.background.hover,
  },
  
  // Focus state
  '&:focus-visible': disabled ? {} : {
    outline: 'none',
    boxShadow: `0 0 0 2px ${systemColors.interactive.focus}`,
  },
}));

// Tab text
const TabText = styled(Box)(({ selected, disabled }) => ({
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.semibold,
  lineHeight: typography.lineHeight.snug,
  color: disabled
    ? systemColors.interactive.disabled.background.strong
    : selected
    ? systemColors.text.heavy
    : systemColors.text.subtle,
  whiteSpace: 'nowrap',
  
  'button:hover &': disabled ? {} : {
    color: systemColors.interactive.primary.background.default,
  },
}));

const TopNavigation = ({ 
  activeTab = 'Home',
  onTabChange = () => {},
  onMenuClick = () => {},
  onEditClick = () => {},
  disabled = false,
  className = ''
}) => {
  const tabs = ['Home', 'Live draft', 'Chat'];

  return (
    <NavContainer className={className}>
      {/* Hamburger Menu Icon */}
      <IconButton
        as="button"
        onClick={onMenuClick}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        aria-label="Menu"
        role="button"
      >
        <Navigation24Regular />
      </IconButton>

      {/* Tabs */}
      <TabList role="tablist">
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            as="button"
            selected={activeTab === tab}
            disabled={disabled}
            onClick={() => onTabChange(tab)}
            tabIndex={disabled ? -1 : 0}
            role="tab"
            aria-selected={activeTab === tab}
            aria-disabled={disabled}
          >
            <TabText selected={activeTab === tab} disabled={disabled}>
              {tab}
            </TabText>
          </TabButton>
        ))}
      </TabList>

      {/* Edit Icon */}
      <IconButton
        as="button"
        onClick={onEditClick}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        aria-label="Edit"
        role="button"
      >
        <Edit24Regular />
      </IconButton>
    </NavContainer>
  );
};

export default TopNavigation;
