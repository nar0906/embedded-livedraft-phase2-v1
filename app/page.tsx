'use client';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CoCounselHome from '@/components/core/CoCounselHome';
import LibraryView from '@/components/core/LibraryView';

const PageContainer = styled(Box)({
  width: '100%',
  height: '100vh',
  maxWidth: 1440,
  maxHeight: 1024,
  margin: '0 auto',
  boxShadow: '0 0 40px rgba(0,0,0,0.1)',
  overflow: 'hidden',
});

export default function Home() {
  const [activeScreen, setActiveScreen] = useState<string>('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (screen: string) => {
    setActiveScreen(screen);
  };

  return (
    <PageContainer>
      <CoCounselHome 
        userName="Jane"
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        sidebarCollapsed={sidebarCollapsed}
        onExpandSidebar={() => setSidebarCollapsed(false)}
        onCollapseSidebar={() => setSidebarCollapsed(true)}
      >
        {activeScreen === 'library' && (
          <LibraryView 
            onImportPlaybook={() => console.log('Import playbook')}
            onBack={() => setActiveScreen('home')}
          />
        )}
      </CoCounselHome>
    </PageContainer>
  );
}
