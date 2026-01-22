'use client';
/**
 * ActionCard Component
 * Card component for starting new tasks with icon, title, and chevron
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
  alignItems: 'center',
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

// Icon container
const IconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
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
  flex: 1,
}));

// Chevron icon
const ChevronIcon = styled(Box)(({ disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  color: disabled
    ? systemColors.text.subtler
    : systemColors.text.subtle,
  fontSize: '16px',
}));

const ActionCard = ({
  icon,
  title = 'Action',
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
      <IconContainer>
        {icon}
      </IconContainer>
      
      <Title disabled={disabled}>
        {title}
      </Title>
      
      <ChevronIcon disabled={disabled}>
        <ChevronRight20Regular />
      </ChevronIcon>
    </CardContainer>
  );
};

export default ActionCard;
