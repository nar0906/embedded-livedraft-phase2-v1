'use client';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { systemColors } from '@/src/tokens/colors';
import borders from '@/src/tokens/borders';
import shadows from '@/src/tokens/shadows';
import spacing from '@/src/tokens/spacing';

interface HomeViewProps {
  userName?: string;
  onNavigate?: (item: string) => void;
}

const MainContainer = styled(Box)({
  flex: 1,
  height: '100%',
  backgroundColor: systemColors.background.default,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 0 80px 0',
  overflow: 'auto',
});

const ContentWrapper = styled(Box)({
  width: '100%',
  maxWidth: 750,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0,
  padding: '0 16px',
});

const Greeting = styled('h1')({
  fontFamily: '"Source Sans 3", sans-serif',
  fontWeight: 500,
  fontSize: 40,
  lineHeight: '44px',
  background: 'linear-gradient(90deg, #345343 0%, #236C48 84.62%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  margin: 0,
  marginBottom: 24,
});

const ChatInputWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: spacing[2],
});

const InputContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: systemColors.background.white,
  border: `${borders.width.thin}px solid ${systemColors.border.strong}`,
  borderRadius: 16,
  boxShadow: shadows.level1,
  overflow: 'hidden',
});

const ContentArea = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: spacing[3],
});

const StyledTextArea = styled('textarea')({
  width: '100%',
  minHeight: 48,
  padding: 0,
  border: 'none',
  outline: 'none',
  resize: 'none',
  fontFamily: '"Source Sans 3", sans-serif',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.5,
  color: systemColors.text.heavy,
  backgroundColor: 'transparent',
  '&::placeholder': {
    color: systemColors.text.subtle,
    opacity: 1,
  },
});

const DrawerRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${spacing[1]}px ${spacing[2]}px`,
  height: 39,
});

const LeftActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[1],
});

const RightActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
});

const IconButton = styled('button')({
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: systemColors.interactive.tertiary.background.default,
  border: `${borders.width.thin}px solid ${systemColors.interactive.tertiary.border.default}`,
  borderRadius: borders.radius.xs,
  color: systemColors.interactive.tertiary.on.default,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: systemColors.interactive.tertiary.background.hover,
    borderColor: systemColors.interactive.tertiary.border.hover,
    color: systemColors.interactive.tertiary.on.hover,
  },
  '& svg': {
    width: 16,
    height: 16,
  },
});

const VerticalDivider = styled(Box)({
  width: 1,
  height: 21,
  backgroundColor: systemColors.border.subtle,
  margin: `0 ${spacing[1]}px`,
});

const VersionButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[1],
  padding: `${spacing[1]}px ${spacing[2]}px`,
  height: 32,
  backgroundColor: systemColors.interactive.tertiary.background.default,
  border: `${borders.width.thin}px solid ${systemColors.interactive.tertiary.border.default}`,
  borderRadius: borders.radius.xs,
  fontFamily: '"Source Sans 3", sans-serif',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 1.2,
  color: systemColors.interactive.tertiary.on.default,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: systemColors.interactive.tertiary.background.hover,
    borderColor: systemColors.interactive.tertiary.border.hover,
    color: systemColors.interactive.tertiary.on.hover,
  },
});

const SendButton = styled('button')({
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: systemColors.interactive.primary.background.default,
  border: `${borders.width.thin}px solid ${systemColors.interactive.primary.border.default}`,
  borderRadius: '50%',
  color: systemColors.interactive.primary.on.default,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  '&:hover': {
    backgroundColor: systemColors.interactive.primary.background.hover,
    borderColor: systemColors.interactive.primary.border.hover,
  },
  '& svg': {
    width: 16,
    height: 16,
  },
});

const SecurityMessage = styled(Box)({
  fontFamily: '"Source Sans 3", sans-serif',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.35,
  color: systemColors.text.subtle,
  textAlign: 'left',
  paddingLeft: spacing[2],
  '& a': {
    color: 'inherit',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

// Icons
const AttachmentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 7.5L8.5 13C6.84315 14.6569 4.15685 14.6569 2.5 13C0.843146 11.3431 0.843146 8.65685 2.5 7L8 1.5C9.38071 0.119289 11.6193 0.119289 13 1.5C14.3807 2.88071 14.3807 5.11929 13 6.5L7.5 12C6.67157 12.8284 5.32843 12.8284 4.5 12C3.67157 11.1716 3.67157 9.82843 4.5 9L9.5 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
  </svg>
);

const AtIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.25"/>
    <path d="M10.5 8V9.25C10.5 10.2165 11.2835 11 12.25 11C12.9404 11 13.5 10.4404 13.5 9.75V8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5H10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
  </svg>
);

const LibrarySparklesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2V14M6 2V14M9.5 2L13.5 3V13L9.5 14V2Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 6L11.5 7.5L13 8L11.5 8.5L11 10L10.5 8.5L9 8L10.5 7.5L11 6Z" fill="currentColor"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.25"/>
    <path d="M13.5 8C13.5 8.34 13.47 8.67 13.42 9M2.5 8C2.5 7.66 2.53 7.33 2.58 7M8 2.5C8.34 2.5 8.67 2.53 9 2.58M8 13.5C7.66 13.5 7.33 13.47 7 13.42M11.89 4.11L12.6 3.4M4.11 11.89L3.4 12.6M11.89 11.89L12.6 12.6M4.11 4.11L3.4 3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HomeView({ userName = 'Jane', onNavigate }: HomeViewProps) {
  return (
    <MainContainer>
      <ContentWrapper>
        <Greeting>Hello, {userName}</Greeting>

        <ChatInputWrapper>
          <InputContainer>
            <ContentArea>
              <StyledTextArea placeholder="Ask CoCounsel to perform any legal task..." />
            </ContentArea>
            
            <DrawerRow>
              <LeftActions>
                <IconButton aria-label="Attach file">
                  <AttachmentIcon />
                </IconButton>
                <IconButton aria-label="Mention sources">
                  <AtIcon />
                </IconButton>
                <IconButton aria-label="Library" onClick={() => onNavigate?.('library')}>
                  <LibrarySparklesIcon />
                </IconButton>
                <VerticalDivider />
                <IconButton aria-label="Settings">
                  <SettingsIcon />
                </IconButton>
              </LeftActions>
              
              <RightActions>
                <VersionButton>
                  CoCounsel 3.0
                  <ChevronDownIcon />
                </VersionButton>
                <SendButton aria-label="Send">
                  <ArrowUpIcon />
                </SendButton>
              </RightActions>
            </DrawerRow>
          </InputContainer>

          <SecurityMessage>
            Your data is <a>private and secure</a>.
          </SecurityMessage>
        </ChatInputWrapper>
      </ContentWrapper>
    </MainContainer>
  );
}
