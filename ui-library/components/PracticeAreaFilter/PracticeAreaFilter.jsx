import React from 'react';
import { systemColors } from '../../tokens/colors';
import { typography } from '../../tokens/typography';

/**
 * PracticeAreaFilter Component
 * Dropdown filter for practice areas
 */
const PracticeAreaFilter = ({ 
  value = 'Transactional',
  onChange = () => {},
  className = ''
}) => {
  const styles = {
    container: {
      padding: '0 16px 12px 16px',
    },
    button: {
      ...typography.labelText.default.sm.strong.compact,
      width: '100%',
      padding: '8px 12px',
      backgroundColor: systemColors.background.white,
      border: `1px solid ${systemColors.border.subtle}`,
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      color: systemColors.text.heavy,
      transition: 'all 0.2s ease',
      height: '38px',
    },
    buttonHover: {
      backgroundColor: systemColors.interactive.tertiary.background.hover,
      borderColor: systemColors.interactive.primary.border.default,
    },
    chevron: {
      fontSize: '12px',
      color: systemColors.interactive.primary.border.default,
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.container} className={className}>
      <button
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
        }}
        onClick={onChange}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{value}</span>
        <span style={styles.chevron}>▼</span>
      </button>
    </div>
  );
};

export default PracticeAreaFilter;
