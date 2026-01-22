'use client';

/**
 * Font Awesome Icon Component
 * 
 * Usage:
 * import { Icon, faHouse, faUser } from '@/components/icons';
 * <Icon icon={faHouse} />
 * <Icon icon={faUser} size="lg" color="#1D4B34" />
 */

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties, forwardRef } from 'react';

// Re-export commonly used icons
export {
  // Navigation & UI
  faHouse,
  faArrowLeft,
  faArrowRight,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faXmark,
  faCheck,
  faPlus,
  faMinus,
  faEllipsis,
  faEllipsisVertical,
  faBars,
  faGripVertical,
  
  // Actions
  faEdit,
  faPen,
  faTrash,
  faTrashCan,
  faCopy,
  faPaste,
  faDownload,
  faUpload,
  faShare,
  faSave,
  faFloppyDisk,
  
  // Content
  faFile,
  faFileLines,
  faFolder,
  faFolderOpen,
  faImage,
  faLink,
  faBook,
  faBookOpen,
  
  // Communication
  faComment,
  faComments,
  faEnvelope,
  faBell,
  
  // User & People
  faUser,
  faUsers,
  faUserPlus,
  faCircleUser,
  
  // Status & Feedback
  faCircleCheck,
  faCircleXmark,
  faCircleInfo,
  faCircleExclamation,
  faTriangleExclamation,
  faSpinner,
  
  // Media
  faPlay,
  faPause,
  faStop,
  faVolumeHigh,
  faVolumeLow,
  faVolumeXmark,
  
  // Settings & Tools
  faGear,
  faCog,
  faSliders,
  faWrench,
  faFilter,
  faSort,
  faMagnifyingGlass,
  
  // Data & Documents
  faDatabase,
  faTable,
  faChartBar,
  faChartLine,
  faListCheck,
  faClipboard,
  faClipboardCheck,
  
  // Misc
  faStar,
  faHeart,
  faBookmark,
  faTag,
  faTags,
  faLock,
  faUnlock,
  faEye,
  faEyeSlash,
  faLightbulb,
  faRobot,
  faBrain,
} from '@fortawesome/free-solid-svg-icons';

export {
  faFile as faFileRegular,
  faFolder as faFolderRegular,
  faComment as faCommentRegular,
  faEnvelope as faEnvelopeRegular,
  faBell as faBellRegular,
  faUser as faUserRegular,
  faCircleCheck as faCircleCheckRegular,
  faCircleXmark as faCircleXmarkRegular,
  faStar as faStarRegular,
  faHeart as faHeartRegular,
  faBookmark as faBookmarkRegular,
  faEye as faEyeRegular,
  faLightbulb as faLightbulbRegular,
  faCopy as faCopyRegular,
  faClipboard as faClipboardRegular,
} from '@fortawesome/free-regular-svg-icons';

export {
  faGithub,
  faLinkedin,
  faTwitter,
  faGoogle,
  faMicrosoft,
  faApple,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';

interface IconProps extends Omit<FontAwesomeIconProps, 'icon' | 'style'> {
  icon: IconDefinition;
  className?: string;
  size?: SizeProp;
  color?: string;
  style?: CSSProperties;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon, className, size, color, style, ...props }, ref) => {
    return (
      <FontAwesomeIcon
        ref={ref}
        icon={icon}
        className={className}
        size={size}
        color={color}
        style={style as FontAwesomeIconProps['style']}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

// CSS-based icon component
interface CSSIconProps {
  name: string;
  style?: 'solid' | 'regular' | 'light' | 'sharp-solid' | 'sharp-light' | 'brands';
  className?: string;
  size?: number | string;
  color?: string;
}

export const CSSIcon = ({
  name,
  style = 'solid',
  className = '',
  size,
  color,
}: CSSIconProps) => {
  const styleClassMap = {
    solid: 'fa-solid',
    regular: 'fa-regular',
    light: 'fa-light',
    'sharp-solid': 'fa-sharp-solid',
    'sharp-light': 'fa-sharp-light',
    brands: 'fa-brands',
  };

  const styleClass = styleClassMap[style];
  const iconClass = `fa-${name}`;

  return (
    <i
      className={`${styleClass} ${iconClass} ${className}`}
      style={{
        fontSize: typeof size === 'number' ? `${size}px` : size,
        color,
      }}
      aria-hidden="true"
    />
  );
};

export default Icon;
