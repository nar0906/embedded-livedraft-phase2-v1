'use client';
/**
 * ResumeTaskCard Component
 * Card component for resuming tasks with icon, title, metadata, and action button
 */

import React from 'react';
import { Box, styled } from '@mui/material';
import { ChevronRight20Regular } from '@fluentui/react-icons';
import { systemColors } from '../../tokens/colors';
import spacing from '../../tokens/spacing';
import borders from '../../tokens/borders';
import typography from '../../tokens/typography';

// Main card container
const CardContainer = styled(Box)(({ disabled }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[3],
  padding: spacing[3],
  backgroundColor: systemColors.background.white,
  border: `${borders.width.thin}px solid ${systemColors.border.subtle}`,
  borderRadius: borders.radius.md,
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.2s ease-in-out',
  
  '&:hover': disabled ? {} : {
    backgroundColor: systemColors.background.subtle,
    borderColor: systemColors.border.strong,
  },
  
  '&:active': disabled ? {} : {
    backgroundColor: systemColors.interactive.tertiary.background.active,
  },
  
  '&:focus-visible': disabled ? {} : {
    outline: 'none',
    boxShadow: `0 0 0 2px ${systemColors.interactive.focus}`,
  },
}));

// Top row with icon and chevron
const TopRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

// Icon container
const IconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
});

// Chevron icon
const ChevronIcon = styled(Box)(({ disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  color: disabled
    ? systemColors.text.subtler
    : systemColors.text.subtle,
  fontSize: '16px',
}));

// Content area
const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[1],
});

// Title text
const Title = styled(Box)(({ disabled }) => ({
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.md,
  fontWeight: typography.fontWeight.semibold,
  lineHeight: typography.lineHeight.snug,
  color: disabled
    ? systemColors.text.subtler
    : systemColors.text.heavy,
}));

// Metadata text
const Metadata = styled(Box)(({ disabled }) => ({
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.regular,
  lineHeight: typography.lineHeight.normal,
  color: disabled
    ? systemColors.text.subtler
    : systemColors.text.subtle,
}));

const ResumeTaskCard = ({
  icon,
  title = 'Task',
  metadata = '',
  onClick = () => {},
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <CardContainer
      as="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      role="button"
      aria-disabled={disabled}
      {...props}
    >
      <TopRow>
        <IconContainer>
          {icon}
        </IconContainer>
        
        <ChevronIcon disabled={disabled}>
          <ChevronRight20Regular />
        </ChevronIcon>
      </TopRow>
      
      <Content>
        <Title disabled={disabled}>
          {title}
        </Title>
        
        {metadata && (
          <Metadata disabled={disabled}>
            {metadata}
          </Metadata>
        )}
      </Content>
    </CardContainer>
  );
};

export default ResumeTaskCard;
