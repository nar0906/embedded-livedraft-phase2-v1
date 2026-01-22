'use client';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Menu, MenuItem, Checkbox } from '@mui/material';
import { Search, ChevronDown } from 'lucide-react';
import SharpIcon from '@/components/icons/SharpIcon';
import { coreColors, systemColors } from '@/src/tokens/colors';
import spacing from '@/src/tokens/spacing';
import borders from '@/src/tokens/borders';
import typography from '@/src/tokens/typography';

interface LibraryViewProps {
  onImportPlaybook?: () => void;
  onBack?: () => void;
  defaultTab?: 'prompts' | 'models' | 'policies' | 'playbooks';
}

interface Prompt {
  id: string;
  title: string;
  description: string;
  isStarred?: boolean;
  badges?: ('Beta' | 'New')[];
}

const Container = styled(Box)({
  flex: 1,
  height: '100%',
  backgroundColor: coreColors.white,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const Header = styled(Box)({
  padding: `${spacing[6]}px ${spacing[8]}px ${spacing[4]}px`,
});

const TitleRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
  marginBottom: spacing[4],
});

const Title = styled('h1')({
  fontFamily: "'Clario', sans-serif",
  fontSize: 28,
  fontWeight: 500,
  lineHeight: 1.1,
  color: coreColors.racingGreen[600],
  margin: 0,
});

const InfoButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing[1],
  background: 'none',
  border: 'none',
  borderRadius: '50%',
  color: coreColors.gray[600],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: coreColors.gray[200],
  },
});

const TabsContainer = styled(Box)({
  display: 'flex',
  gap: 0,
  borderBottom: `1px solid ${coreColors.gray[400]}`,
});

const Tab = styled('button')<{ isActive?: boolean }>(({ isActive }) => ({
  fontFamily: typography.fontFamily.primary,
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.35,
  color: isActive ? '#212223' : '#666666',
  padding: `${spacing[2]}px 12px`,
  background: 'transparent',
  border: 'none',
  borderBottom: isActive ? `3px solid ${coreColors.racingGreen[600]}` : '3px solid transparent',
  borderRadius: '4px 4px 0 0',
  marginBottom: -1,
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    color: '#212223',
  },
}));

const ToolbarContainer = styled(Box)({
  padding: `${spacing[4]}px ${spacing[8]}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: spacing[4],
});

const SearchContainer = styled(Box)({
  position: 'relative',
  width: 280,
});

const SearchInput = styled('input')({
  width: '100%',
  height: 28,
  padding: `${spacing[1]}px ${spacing[2]}px ${spacing[1]}px ${spacing[7]}px`,
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.sm,
  border: `1px solid ${coreColors.gray[500]}`,
  borderRadius: borders.radius.xs,
  backgroundColor: coreColors.white,
  color: coreColors.graphite,
  outline: 'none',
  boxSizing: 'border-box',
  '&::placeholder': {
    color: coreColors.gray[600],
  },
  '&:hover': {
    borderColor: coreColors.gray[600],
  },
  '&:focus': {
    borderColor: coreColors.racingGreen[700],
    boxShadow: `0 0 0 1px ${coreColors.racingGreen[700]}`,
  },
});

const SearchIcon = styled(Box)({
  position: 'absolute',
  left: spacing[2],
  top: '50%',
  transform: 'translateY(-50%)',
  color: coreColors.gray[600],
  pointerEvents: 'none',
  display: 'flex',
});

const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: spacing[2],
});

const ActionButton = styled('button')<{ variant?: 'primary' | 'secondary' }>(({ variant = 'secondary' }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[1],
  padding: `${spacing[1]}px ${spacing[2]}px`,
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
  border: `1px solid ${variant === 'primary' ? coreColors.racingGreen[700] : coreColors.gray[500]}`,
  borderRadius: borders.radius.xs,
  backgroundColor: variant === 'primary' ? coreColors.racingGreen[700] : 'transparent',
  color: variant === 'primary' ? coreColors.white : coreColors.graphite,
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: variant === 'primary' ? coreColors.racingGreen[800] : coreColors.racingGreen[200],
    borderColor: variant === 'primary' ? coreColors.racingGreen[800] : systemColors.border.strong,
  },
}));

const PromptsGrid = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  padding: `0 ${spacing[8]}px ${spacing[6]}px`,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 340px)',
  gap: spacing[4],
  alignContent: 'start',
});

const PromptCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[2],
  padding: spacing[4],
  backgroundColor: coreColors.white,
  border: `1px solid ${coreColors.gray[400]}`,
  borderRadius: 8,
  cursor: 'pointer',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: coreColors.racingGreen[200],
    borderColor: systemColors.border.strong,
  },
});

const PromptCardHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: spacing[3],
  minHeight: 24,
});

const PromptTitleWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
  flex: 1,
  minWidth: 0,
  overflow: 'hidden',
});

const PromptTitle = styled('h3')({
  fontFamily: typography.fontFamily.heading,
  fontSize: 15,
  fontWeight: typography.fontWeight.medium,
  lineHeight: 1.3,
  color: '#212223',
  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const PromptBadge = styled('span')({
  padding: '2px 8px',
  fontFamily: typography.fontFamily.primary,
  fontSize: 12,
  fontWeight: typography.fontWeight.regular,
  borderRadius: 10,
  backgroundColor: coreColors.gray[300],
  color: coreColors.gray[700],
  whiteSpace: 'nowrap',
  flexShrink: 0,
});

const PromptDescription = styled('p')({
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.regular,
  lineHeight: 1.5,
  color: coreColors.gray[600],
  margin: 0,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

const ListContainer = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  padding: `0 ${spacing[8]}px ${spacing[6]}px`,
});

const ListRow = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: spacing[3],
  padding: `${spacing[3]}px 0`,
  borderBottom: `1px solid ${coreColors.gray[200]}`,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: coreColors.racingGreen[100],
    marginLeft: -spacing[3],
    marginRight: -spacing[3],
    paddingLeft: spacing[3],
    paddingRight: spacing[3],
  },
});

const ItemInfo = styled(Box)({
  flex: 1,
});

const ItemName = styled('h3')({
  fontFamily: "'Clario', sans-serif",
  fontSize: 15,
  fontWeight: 500,
  color: coreColors.graphite,
  margin: 0,
  marginBottom: spacing[1],
});

const ItemMeta = styled('p')({
  fontFamily: typography.fontFamily.primary,
  fontSize: 14,
  fontWeight: 400,
  color: coreColors.gray[600],
  margin: 0,
});

// Sample data
const samplePrompts: Prompt[] = [
  { id: '1', title: 'AI Jurisdiction Surveys', description: 'Get a survey of the law across jurisdictions based on a legal research question', badges: ['Beta'] },
  { id: '2', title: 'AI-Assisted Research US', description: 'Get relevant answers to legal research questions with links to Westlaw authority', badges: ['New'] },
  { id: '3', title: 'Allegation Summary Email', description: 'Compose email explaining allegations and defense steps to client', isStarred: true },
  { id: '4', title: 'Argument and Counterargument Table', description: 'Visualize arguments and corresponding counterarguments', isStarred: true },
  { id: '5', title: 'Argument Outline', description: 'Breakdown all arguments made within the provided documents', isStarred: true },
  { id: '6', title: 'Authority Analysis Table', description: 'Create a list of case law, statuses, and other precedent cited in a litigation document' },
  { id: '7', title: 'Bulk Opinion Summary', description: 'Summarize court holdings and their effects on cases' },
  { id: '8', title: 'Claim Identification and Analysis', description: 'Determine claims against defendants and outline supporting facts' },
  { id: '9', title: 'Claim Summary', description: "Create a formatted summary of a pleading's claims" },
];

const sampleItems = [
  { id: '1', name: 'Master Services Agreement Playbook', meta: '16 clauses • Modified January 14, 2026 by Jane Lawson' },
  { id: '2', name: 'Software Licensing Agreement Playbook', meta: '12 clauses • Modified January 12, 2026 by Michael Chen' },
  { id: '3', name: 'NDA & Confidentiality Playbook', meta: '8 clauses • Modified January 10, 2026 by Sarah Williams' },
  { id: '4', name: 'Vendor Procurement Playbook', meta: '14 clauses • Modified January 8, 2026 by Jane Lawson' },
];

export default function LibraryView({ onImportPlaybook, onBack, defaultTab = 'prompts' }: LibraryViewProps) {
  const [activeTab, setActiveTab] = useState<'prompts' | 'models' | 'policies' | 'playbooks'>(defaultTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  const handleUpload = () => {
    handleCloseMenu();
    onImportPlaybook?.();
  };

  return (
    <Container>
      <Header>
        <TitleRow>
          <Title>Library</Title>
          <InfoButton aria-label="Library information">
            <SharpIcon name="circle-info" size={20} color={coreColors.gray[600]} />
          </InfoButton>
        </TitleRow>
        
        <TabsContainer>
          <Tab isActive={activeTab === 'prompts'} onClick={() => setActiveTab('prompts')}>Prompts</Tab>
          <Tab isActive={activeTab === 'models'} onClick={() => setActiveTab('models')}>Model documents</Tab>
          <Tab isActive={activeTab === 'policies'} onClick={() => setActiveTab('policies')}>Policies</Tab>
          <Tab isActive={activeTab === 'playbooks'} onClick={() => setActiveTab('playbooks')}>Playbooks</Tab>
        </TabsContainer>
      </Header>
      
      <ToolbarContainer>
        <SearchContainer>
          <SearchIcon><Search size={14} /></SearchIcon>
          <SearchInput 
            type="text"
            placeholder={`Search ${activeTab}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
        
        <ButtonGroup>
          {activeTab === 'playbooks' && (
            <ActionButton variant="secondary" onClick={handleMenuClick}>
              <SharpIcon name="plus" size={14} color="currentColor" />
              New playbook
              <ChevronDown size={14} />
            </ActionButton>
          )}
          {activeTab === 'prompts' && (
            <ActionButton variant="secondary">
              <SharpIcon name="plus" size={14} color="currentColor" />
              New prompt
            </ActionButton>
          )}
          <ActionButton variant="secondary">
            <SharpIcon name="sliders" size={14} color="currentColor" />
            Filter
          </ActionButton>
          <ActionButton variant="secondary">
            <SharpIcon name="sort" size={14} color="currentColor" />
            Sort
          </ActionButton>
        </ButtonGroup>
      </ToolbarContainer>
      
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            borderRadius: '8px',
            border: `1px solid ${coreColors.gray[500]}`,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
            padding: '4px',
            minWidth: 180,
          },
        }}
      >
        <MenuItem onClick={handleCloseMenu} sx={{ fontSize: 14, borderRadius: '4px' }}>
          <SharpIcon name="file-circle-plus" size={14} color="currentColor" style={{ marginRight: 8 }} />
          Create from scratch
        </MenuItem>
        <MenuItem onClick={handleUpload} sx={{ fontSize: 14, borderRadius: '4px' }}>
          <SharpIcon name="upload" size={14} color="currentColor" style={{ marginRight: 8 }} />
          Upload playbook
        </MenuItem>
      </Menu>
      
      {activeTab === 'prompts' && (
        <PromptsGrid>
          {samplePrompts
            .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((prompt) => (
              <PromptCard key={prompt.id}>
                <PromptCardHeader>
                  <PromptTitleWrapper>
                    <PromptTitle>{prompt.title}</PromptTitle>
                    {prompt.badges?.map((badge) => (
                      <PromptBadge key={badge}>{badge}</PromptBadge>
                    ))}
                  </PromptTitleWrapper>
                </PromptCardHeader>
                <PromptDescription>{prompt.description}</PromptDescription>
              </PromptCard>
            ))}
        </PromptsGrid>
      )}

      {(activeTab === 'models' || activeTab === 'policies' || activeTab === 'playbooks') && (
        <ListContainer>
          {sampleItems
            .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((item) => (
              <ListRow key={item.id}>
                <Checkbox 
                  size="small"
                  sx={{
                    padding: 0,
                    marginTop: '-2px',
                    color: coreColors.gray[400],
                    '&.Mui-checked': { color: coreColors.racingGreen[700] },
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemMeta>{item.meta}</ItemMeta>
                </ItemInfo>
              </ListRow>
            ))}
        </ListContainer>
      )}
    </Container>
  );
}
