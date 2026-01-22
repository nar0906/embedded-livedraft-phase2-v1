'use client';

import { styled } from '@mui/material/styles';
import { Box, Tooltip } from '@mui/material';
import { 
  PanelLeftClose, 
  MessageCircle, 
  History, 
  LayoutGrid, 
  GripVertical,
  User
} from 'lucide-react';
import { coreColors, systemColors } from '@/src/tokens/colors';
import spacing from '@/src/tokens/spacing';
import borders from '@/src/tokens/borders';

interface CoCounselSidebarProps {
  activeItem?: 'chat' | 'history' | 'projects' | 'library';
  onNavigate?: (item: string) => void;
}

const SidebarContainer = styled(Box)({
  width: 56,
  height: '100%',
  backgroundColor: coreColors.white,
  borderRight: `1px solid ${coreColors.gray[300]}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: spacing[3],
  paddingBottom: spacing[3],
});

const LogoContainer = styled(Box)({
  width: 32,
  height: 32,
  marginBottom: spacing[4],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Logo = styled('div')({
  width: 28,
  height: 28,
  borderRadius: '50%',
  border: `2px dotted ${coreColors.orange[500]}`,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: coreColors.orange[500],
  },
});

const NavSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing[1],
  flex: 1,
});

const NavButton = styled('button')<{ isActive?: boolean }>(({ isActive }) => ({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: borders.radius.xs,
  backgroundColor: isActive ? coreColors.racingGreen[200] : 'transparent',
  color: isActive ? coreColors.racingGreen[700] : coreColors.gray[700],
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  
  '&:hover': {
    backgroundColor: coreColors.racingGreen[100],
    color: coreColors.racingGreen[700],
  },
  
  '&:focus-visible': {
    outline: `2px solid ${systemColors.interactive.focus}`,
    outlineOffset: 2,
  },
}));

const UserSection = styled(Box)({
  marginTop: 'auto',
});

const UserButton = styled('button')({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  color: coreColors.gray[700],
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  
  '&:hover': {
    backgroundColor: coreColors.gray[200],
  },
});

export default function CoCounselSidebar({ activeItem = 'library', onNavigate }: CoCounselSidebarProps) {
  const handleNavClick = (item: string) => {
    onNavigate?.(item);
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      
      <NavSection>
        <Tooltip title="New chat" placement="right">
          <NavButton 
            isActive={activeItem === 'chat'}
            onClick={() => handleNavClick('chat')}
            aria-label="New chat"
          >
            <PanelLeftClose size={20} />
          </NavButton>
        </Tooltip>
        
        <Tooltip title="Chat" placement="right">
          <NavButton 
            isActive={false}
            onClick={() => handleNavClick('chat')}
            aria-label="Chat"
          >
            <MessageCircle size={20} />
          </NavButton>
        </Tooltip>
        
        <Tooltip title="History" placement="right">
          <NavButton 
            isActive={activeItem === 'history'}
            onClick={() => handleNavClick('history')}
            aria-label="History"
          >
            <History size={20} />
          </NavButton>
        </Tooltip>
        
        <Tooltip title="Projects" placement="right">
          <NavButton 
            isActive={activeItem === 'projects'}
            onClick={() => handleNavClick('projects')}
            aria-label="Projects"
          >
            <LayoutGrid size={20} />
          </NavButton>
        </Tooltip>
        
        <Tooltip title="Library" placement="right">
          <NavButton 
            isActive={activeItem === 'library'}
            onClick={() => handleNavClick('library')}
            aria-label="Library"
          >
            <GripVertical size={20} />
          </NavButton>
        </Tooltip>
      </NavSection>
      
      <UserSection>
        <Tooltip title="Jane Lawson" placement="right">
          <UserButton aria-label="User profile">
            <User size={20} />
          </UserButton>
        </Tooltip>
      </UserSection>
    </SidebarContainer>
  );
}
