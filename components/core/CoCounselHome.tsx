'use client';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Divider } from '@mui/material';
import SharpIcon from '@/components/icons/SharpIcon';
import { coreColors, systemColors } from '@/src/tokens/colors';
import spacing from '@/src/tokens/spacing';
import borders from '@/src/tokens/borders';
import typography from '@/src/tokens/typography';

// ============================================================================
// Types
// ============================================================================

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface RecentChat {
  id: string;
  title: string;
}

interface FooterLink {
  id: string;
  label: string;
  icon: string;
}

// ============================================================================
// Data
// ============================================================================

const navItems = [
  { id: 'history', label: 'History', icon: 'clock-rotate-left' },
  { id: 'projects', label: 'Projects', icon: 'folders' },
  { id: 'document-review', label: 'Document Review', icon: 'table' },
  { id: 'knowledge-search', label: 'Knowledge Search', icon: 'magnifying-glass' },
  { id: 'library', label: 'Library', icon: 'lines-leaning' },
];

const recentChats: RecentChat[] = [
  { id: '1', title: 'NDA uploaded for doc complia...' },
  { id: '2', title: 'Limited liability in Florida' },
  { id: '3', title: 'Researching employee rights' },
  { id: '4', title: 'Limited liability in New York' },
  { id: '5', title: 'Researching human rights' },
];

const footerLinks = [
  { id: 'discover', label: 'Discover prompts', icon: 'book-sparkles' },
  { id: 'tutorials', label: 'Quick AI tutorials', icon: 'circle-play' },
  { id: 'integrations', label: 'Integrations', icon: 'share-nodes' },
  { id: 'personalization', label: 'Personalization', icon: 'sliders' },
];

// ============================================================================
// Styled Components - Container
// ============================================================================

const HomeContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor: coreColors.white,
});

// ============================================================================
// Styled Components - Sidebar
// ============================================================================

const Sidebar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<{ collapsed?: boolean }>(({ collapsed }) => ({
  width: collapsed ? 56 : 232,
  height: '100%',
  backgroundColor: coreColors.gray[200],
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  transition: 'width 0.2s ease-in-out',
}));

const CollapsedNavButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  padding: spacing[2],
  backgroundColor: active ? coreColors.white : 'transparent',
  border: active ? `1px solid ${coreColors.gray[400]}` : '1px solid transparent',
  borderRadius: borders.radius.xs,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: active ? coreColors.white : coreColors.gray[400],
  },
}));

const BrandHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${spacing[3]}px ${spacing[3]}px ${spacing[2]}px`,
});

const BrandText = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  paddingLeft: spacing[1],
});

const BrandTitle = styled('span')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1,
  color: coreColors.graphite,
});

const BrandSubtitle = styled('span')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1,
  color: coreColors.orange[500],
});

const CollapseButton = styled(IconButton)({
  padding: spacing[1],
  borderRadius: borders.radius.xs,
  color: coreColors.gray[700],
  border: '1px solid transparent',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: coreColors.racingGreen[200],
    borderColor: systemColors.border.strong,
  },
});

const SidebarContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: `${spacing[2]}px ${spacing[3]}px`,
  gap: spacing[2],
  overflow: 'hidden',
});

const MenuSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-between',
});

const TopMenu = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[2],
});

const NewChatButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing[2],
  width: '100%',
  height: 32,
  padding: `${spacing[1]}px ${spacing[2]}px`,
  backgroundColor: '#314B3E',
  border: '1px solid #314B3E',
  borderRadius: borders.radius.xs,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: '#263d32',
  },
});

const NewChatText = styled('span')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 14,
  fontWeight: 500,
  color: coreColors.gray[100],
  lineHeight: 1.2,
});

const NavList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[1],
  paddingTop: spacing[2],
});

const NavButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
  width: '100%',
  height: 32,
  padding: `${spacing[1]}px ${spacing[2]}px`,
  backgroundColor: active ? 'transparent' : 'transparent',
  border: active ? `1px solid ${systemColors.border.strong}` : '1px solid transparent',
  borderRadius: borders.radius.xs,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: active ? 'transparent' : coreColors.gray[400],
  },
}));

const NavLabel = styled('span')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 14,
  fontWeight: 400,
  color: coreColors.graphite,
  lineHeight: 1.2,
});

const SidebarDivider = styled(Divider)({
  borderColor: coreColors.gray[400],
  margin: `${spacing[2]}px 0`,
});

const RecentChatsSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[1],
});

const RecentChatsTitle = styled('span')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 14,
  fontWeight: 500,
  color: coreColors.black,
  padding: `${spacing[1]}px ${spacing[2]}px`,
  lineHeight: 1.35,
});

const RecentChatItem = styled('button')({
  display: 'flex',
  width: '100%',
  padding: `${spacing[1]}px 9px`,
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: borders.radius.xs,
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: coreColors.gray[400],
  },
});

const RecentChatText = styled('span')({
  fontFamily: typography.fontFamily.primary,
  fontSize: 14,
  fontWeight: 400,
  color: coreColors.graphite,
  lineHeight: 1.35,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const UserProfile = styled('button')({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
  width: '100%',
  height: 32,
  padding: `${spacing[1]}px ${spacing[2]}px`,
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: borders.radius.xs,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: coreColors.gray[400],
  },
});

const UserName = styled('span')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 14,
  fontWeight: 500,
  color: coreColors.black,
  lineHeight: 1.2,
});

// ============================================================================
// Styled Components - Main Content
// ============================================================================

const MainContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FCFCFC',
  position: 'relative',
  boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.03)',
});

const ChatThread = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing[4],
  width: '100%',
  height: '100%',
});

const Greeting = styled('h1')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 40,
  fontWeight: 500,
  lineHeight: 1.1,
  background: 'linear-gradient(to right, #345343, #236c48 84.619%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: spacing[4],
});

const ChatInputContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 750,
  gap: spacing[2],
});

const ChatInputWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.04)',
});

const TextAreaField = styled('textarea')({
  width: '100%',
  minHeight: 64,
  padding: `${spacing[2]}px ${spacing[3]}px`,
  backgroundColor: coreColors.white,
  border: `1px solid ${coreColors.gray[500]}`,
  borderBottom: 'none',
  borderRadius: '16px 16px 0 0',
  fontFamily: typography.fontFamily.primary,
  fontSize: 16,
  fontWeight: 400,
  color: coreColors.graphite,
  lineHeight: 1.5,
  resize: 'none',
  outline: 'none',
  '&::placeholder': {
    color: coreColors.gray[700],
  },
  '&:focus': {
    borderColor: coreColors.gray[600],
  },
});

const PromptDrawer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: 39,
  padding: `4px ${spacing[2]}px`,
  backgroundColor: coreColors.white,
  border: `1px solid ${coreColors.gray[500]}`,
  borderTop: 'none',
  borderRadius: '0 0 16px 16px',
});

const LeftActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

const ActionButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  padding: spacing[2],
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: borders.radius.xs,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: coreColors.racingGreen[200],
    borderColor: systemColors.border.strong,
  },
});

const ActionDivider = styled(Box)({
  width: 1,
  height: 21,
  backgroundColor: coreColors.gray[500],
});

const RightActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
});

const ModelSelector = styled('button')({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  height: 32,
  padding: `${spacing[1]}px ${spacing[2]}px`,
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: borders.radius.xs,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: coreColors.racingGreen[200],
    borderColor: systemColors.border.strong,
  },
});

const ModelText = styled('span')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 14,
  fontWeight: 500,
  color: coreColors.graphite,
  lineHeight: 1.2,
});

const SendButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
  padding: spacing[2],
  backgroundColor: '#314B3E',
  border: 'none',
  borderRadius: 100,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: '#263d32',
  },
});

const PrivacyText = styled('span')({
  fontFamily: typography.fontFamily.primary,
  fontSize: 12,
  fontWeight: 400,
  color: coreColors.gray[700],
  lineHeight: 1.35,
  alignSelf: 'flex-start',
  paddingLeft: spacing[2],
  '& a': {
    color: coreColors.gray[700],
    textDecoration: 'underline',
  },
});

const FooterLinksContainer = styled(Box)({
  position: 'absolute',
  bottom: 60,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: spacing[2],
  paddingTop: spacing[1],
});

const FooterLinkButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: `6px ${spacing[3]}px`,
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: 24,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: coreColors.racingGreen[200],
    borderColor: systemColors.border.strong,
  },
});

const FooterLinkText = styled('span')({
  fontFamily: typography.fontFamily.primary,
  fontSize: 14,
  fontWeight: 400,
  color: coreColors.graphite,
  lineHeight: 1.2,
});

// ============================================================================
// Component
// ============================================================================

interface CoCounselHomeProps {
  userName?: string;
  activeScreen?: string;
  onNavigate?: (screen: string) => void;
  children?: React.ReactNode;
  sidebarCollapsed?: boolean;
  onExpandSidebar?: () => void;
  onCollapseSidebar?: () => void;
}

export default function CoCounselHome({ 
  userName = 'Jane',
  activeScreen = 'home',
  onNavigate,
  children,
  sidebarCollapsed = false,
  onExpandSidebar,
  onCollapseSidebar,
}: CoCounselHomeProps) {
  const [activeNav, setActiveNav] = useState<string | null>(activeScreen === 'home' ? null : activeScreen);

  const handleNavClick = (itemId: string) => {
    setActiveNav(itemId);
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <HomeContainer>
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed}>
        {sidebarCollapsed ? (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            padding: `${spacing[3]}px ${spacing[2]}px`,
            gap: '4px',
            height: '100%',
          }}>
            <Box sx={{ marginBottom: '8px' }}>
              <img 
                src="/tr-logo.svg" 
                alt="Thomson Reuters" 
                style={{ width: 26, height: 26 }}
              />
            </Box>
            
            <CollapsedNavButton onClick={onExpandSidebar}>
              <SharpIcon name="arrow-right-to-line" size={16} color={coreColors.graphite} />
            </CollapsedNavButton>
            
            <CollapsedNavButton 
              onClick={() => handleNavClick('home')}
              style={{ 
                backgroundColor: coreColors.racingGreen[700], 
                border: 'none',
              }}
            >
              <SharpIcon name="message-plus" size={16} color={coreColors.white} />
            </CollapsedNavButton>
            
            {navItems.map((item) => (
              <CollapsedNavButton
                key={item.id}
                active={activeNav === item.id}
                onClick={() => handleNavClick(item.id)}
              >
                <SharpIcon name={item.icon} size={16} color={coreColors.graphite} />
              </CollapsedNavButton>
            ))}
            
            <Box sx={{ flex: 1 }} />
            
            <CollapsedNavButton>
              <SharpIcon name="circle-user" size={16} color={coreColors.graphite} />
            </CollapsedNavButton>
          </Box>
        ) : (
          <>
            <BrandHeader>
              <BrandText>
                <BrandTitle>Thomson Reuters®</BrandTitle>
                <BrandSubtitle>CoCounsel</BrandSubtitle>
              </BrandText>
              <CollapseButton size="small" onClick={onCollapseSidebar}>
                <SharpIcon name="arrow-left-from-line" size={16} color={coreColors.gray[700]} />
              </CollapseButton>
            </BrandHeader>

            <SidebarContent>
              <MenuSection>
                <TopMenu>
                  <NewChatButton>
                    <SharpIcon name="message-plus" size={16} color={coreColors.gray[100]} />
                    <NewChatText>New chat</NewChatText>
                  </NewChatButton>

                  <NavList>
                    {navItems.map((item) => (
                      <NavButton
                        key={item.id}
                        active={activeNav === item.id}
                        onClick={() => handleNavClick(item.id)}
                      >
                        <SharpIcon name={item.icon} size={16} color={coreColors.graphite} />
                        <NavLabel>{item.label}</NavLabel>
                      </NavButton>
                    ))}
                  </NavList>

                  <SidebarDivider />

                  <RecentChatsSection>
                    <RecentChatsTitle>Recent chats</RecentChatsTitle>
                    {recentChats.map((chat) => (
                      <RecentChatItem key={chat.id}>
                        <RecentChatText>{chat.title}</RecentChatText>
                      </RecentChatItem>
                    ))}
                  </RecentChatsSection>
                </TopMenu>

                <UserProfile>
                  <SharpIcon name="circle-user" size={16} color={coreColors.graphite} />
                  <UserName>Jane Lawson</UserName>
                </UserProfile>
              </MenuSection>
            </SidebarContent>
          </>
        )}
      </Sidebar>

      {children ? (
        children
      ) : (
        <MainContent>
          <ChatThread>
            <Greeting>Hello, {userName}</Greeting>

            <ChatInputContainer>
              <ChatInputWrapper>
                <TextAreaField 
                  placeholder="Ask CoCounsel to perform any legal task..."
                  rows={2}
                />
                <PromptDrawer>
                  <LeftActions>
                    <ActionButton title="Attach file">
                      <SharpIcon name="paperclip" size={14} color={coreColors.gray[800]} />
                    </ActionButton>
                    <ActionButton title="Mention">
                      <SharpIcon name="at" size={14} color={coreColors.gray[800]} />
                    </ActionButton>
                    <ActionButton title="Templates">
                      <SharpIcon name="book-sparkles" size={14} color={coreColors.graphite} />
                    </ActionButton>
                    <ActionDivider />
                    <ActionButton title="Settings">
                      <SharpIcon name="sliders" size={14} color={coreColors.gray[800]} />
                    </ActionButton>
                  </LeftActions>
                  <RightActions>
                    <ModelSelector>
                      <ModelText>CoCounsel 3.0</ModelText>
                      <SharpIcon name="chevron-down" size={14} color={coreColors.graphite} />
                    </ModelSelector>
                    <SendButton title="Send">
                      <SharpIcon name="arrow-up" size={16} color={coreColors.white} />
                    </SendButton>
                  </RightActions>
                </PromptDrawer>
              </ChatInputWrapper>
              <PrivacyText>
                Your data is <a href="#">private and secure</a>.
              </PrivacyText>
            </ChatInputContainer>

            <FooterLinksContainer>
              {footerLinks.map((link) => (
                <FooterLinkButton key={link.id}>
                  <SharpIcon name={link.icon} size={14} color={coreColors.gray[800]} />
                  <FooterLinkText>{link.label}</FooterLinkText>
                </FooterLinkButton>
              ))}
            </FooterLinksContainer>
          </ChatThread>
        </MainContent>
      )}
    </HomeContainer>
  );
}
