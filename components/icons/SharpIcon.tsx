'use client';

/**
 * SharpIcon Component
 * 
 * Renders Font Awesome 6 Sharp Light icons using unicode characters.
 * These icons match the Figma design which uses "Font Awesome 6 Sharp" Light (300 weight).
 * 
 * Usage:
 * <SharpIcon name="paperclip" size={14} color="#404040" />
 * <SharpIcon name="star" size={16} color="green" solid />
 */

import { CSSProperties } from 'react';

// Icon unicode mapping for Font Awesome 6 Sharp
const iconUnicodeMap: Record<string, string> = {
  // Navigation & Arrows
  'arrow-left-from-line': '\uf33e',
  'arrow-right-to-line': '\uf340',
  'arrow-left': '\uf060',
  'arrow-right': '\uf061',
  'arrow-up': '\uf062',
  'arrow-down': '\uf063',
  'angles-left': '\uf100',
  'chevron-down': '\uf078',
  'chevron-up': '\uf077',
  'chevron-left': '\uf053',
  'chevron-right': '\uf054',
  
  // Actions
  'plus': '\u002b',
  'minus': '\uf068',
  'xmark': '\uf00d',
  'xmark-large': '\uf2d3',
  'check': '\uf00c',
  'circle-check': '\uf058',
  'triangle-exclamation': '\uf071',
  'message-question': '\ue417',
  'paperclip': '\uf0c6',
  'link': '\uf0c1',
  'at': '\uf1fa',
  'upload': '\ue09a',
  
  // Files & Documents
  'file': '\uf15b',
  'file-lines': '\uf15c',
  'file-doc': '\uf316',
  'file-circle-plus': '\uf319',
  'folder': '\uf07b',
  'folder-open': '\uf07c',
  'folder-plus': '\uf65e',
  'folders': '\uf660',
  'book': '\uf02d',
  'book-sparkles': '\uf6b8',
  'book-bookmark': '\ue0bb',
  'book-open': '\uf518',
  'rectangle-list': '\uf022',
  
  // Tables & Grids
  'table': '\uf0ce',
  'table-cells': '\uf00a',
  'table-cells-large': '\uf009',
  'grid': '\ue195',
  'grid-2': '\ue196',
  'th-large': '\uf009',
  
  // Library/Misc symbols
  'slash-forward': '\uf715',
  'pipes': '\uf7c5',
  'lines-leaning': '\ue51e',
  'bars-staggered': '\uf550',
  
  // Communication
  'message': '\uf27a',
  'message-plus': '\uf4a8',
  'comment': '\uf075',
  'comment-dots': '\uf4ad',
  'envelope': '\uf0e0',
  
  // User & Account
  'user': '\uf007',
  'circle-user': '\uf2bd',
  'circle-nodes': '\ue4e2',
  'users': '\uf0c0',
  
  // Time & History
  'clock': '\uf017',
  'clock-rotate-left': '\uf1da',
  'history': '\uf1da',
  
  // Search & Filter
  'magnifying-glass': '\uf002',
  'search': '\uf002',
  'filter': '\uf0b0',
  'sliders': '\uf1de',
  'sort': '\uf883',
  
  // Media
  'play': '\uf04b',
  'circle-play': '\uf144',
  'pause': '\uf04c',
  'stop': '\uf04d',
  
  // Settings & Tools
  'gear': '\uf013',
  'cog': '\uf013',
  'wrench': '\uf0ad',
  'puzzle-piece': '\uf12e',
  'diagram-project': '\uf542',
  'share-nodes': '\uf1e0',
  'sitemap': '\uf0e8',
  'sliders-simple': '\ue253',
  
  // Status
  'circle-xmark': '\uf057',
  'circle-info': '\uf05a',
  'spinner': '\uf110',
  
  // Misc
  'star': '\uf005',
  'heart': '\uf004',
  'bars': '\uf0c9',
  'ellipsis': '\uf141',
  'ellipsis-vertical': '\uf142',
  'grip-vertical': '\uf58e',
  'arrows-left-right': '\uf07e',
  
  // Actions
  'pen-to-square': '\uf303',
  'trash': '\uf1f8',
};

interface SharpIconProps {
  name: keyof typeof iconUnicodeMap | string;
  size?: number;
  color?: string;
  solid?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function SharpIcon({ 
  name, 
  size = 16, 
  color, 
  solid = false,
  className = '',
  style = {} 
}: SharpIconProps) {
  const unicode = iconUnicodeMap[name] || '\uf128';
  
  return (
    <span
      className={className}
      style={{
        fontFamily: "'Font Awesome 6 Sharp'",
        fontWeight: solid ? 900 : 300,
        fontStyle: 'normal',
        fontSize: size,
        color: color,
        display: 'inline-block',
        lineHeight: 1,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'auto',
        ...style,
      }}
      aria-hidden="true"
    >
      {unicode}
    </span>
  );
}

export { iconUnicodeMap };
