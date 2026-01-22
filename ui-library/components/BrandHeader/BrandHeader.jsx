import React from 'react';
import { systemColors, coreColors } from '../../tokens/colors';
import { typography } from '../../tokens/typography';

/**
 * BrandHeader Component
 * Thomson Reuters® CoCounsel branding header
 */
const BrandHeader = ({ className = '' }) => {
  const styles = {
    container: {
      padding: '12px 16px',
      backgroundColor: systemColors.background.white,
    },
    heading: {
      ...typography.displayText.default.xs.medium.default,
      margin: 0,
      color: systemColors.text.heavy,
      fontSize: '20px',
      lineHeight: '24px',
    },
    coCounsel: {
      color: coreColors.orange[500],
    },
  };

  return (
    <div style={styles.container} className={className}>
      <h1 style={styles.heading}>
        Thomson Reuters<sup style={{ fontSize: '10px' }}>®</sup>{' '}
        <span style={styles.coCounsel}>CoCounsel</span>
      </h1>
    </div>
  );
};

export default BrandHeader;
