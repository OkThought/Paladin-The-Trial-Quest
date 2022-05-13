import React, {useEffect} from 'react'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Paper from '@mui/material/Paper'
import Layout from '../components/Layout'
import PaladinAppBar from '../components/PaladinAppBar'
import TabPanel from '../components/TabPanel'
import PoolContainer from '../components/PoolContainer'
import RootStore, {RootStoreContext} from '../stores/RootStore'
import WalletContainer from '../components/WalletContainer'
import {observer} from 'mobx-react'
import Box from '@mui/material/Box'

function a11yProps(index: number) {
  return {
    id: `app-tab-${index}`,
    'aria-controls': `app-tabpanel-${index}`,
  }
}

export default observer(function App() {
  const [rootStore] = React.useState(() => new RootStore())

  useEffect(() => rootStore.init(), [rootStore])

  const [tab, setTab] = React.useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  return (
    <RootStoreContext.Provider value={rootStore}>
      <Layout
        sx={{
          minHeight: '100vh',
          background:
            'radial-gradient(163.62% 163.62% at 50% -45.31%, #EF8171 0%, #F9DD56 99.87%)',
        }}
      >
        <PaladinAppBar>
          <WalletContainer />
        </PaladinAppBar>
        <Box component="section" sx={{paddingY: 6}}>
          <Container sx={{maxWidth: 544}}>
            <Tabs value={tab} onChange={handleTabChange} sx={{mb: 2}}>
              <Tab label="Pool" {...a11yProps(0)} />
              <Tab label="Dashboard" {...a11yProps(1)} />
            </Tabs>
            <Paper sx={{p: 3}}>
              <TabPanel value={tab} index={0}>
                <PoolContainer />
              </TabPanel>
              <TabPanel value={tab} index={1}>
                dashboard content
              </TabPanel>
            </Paper>
          </Container>
        </Box>
      </Layout>
    </RootStoreContext.Provider>
  )
})
