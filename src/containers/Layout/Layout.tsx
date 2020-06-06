import * as React from 'react'
import Footer from '../../components/Footer'
import AppRoutes from '../AppRoutes'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from 'src/components/Header'
import {makeStyles} from '@material-ui/core/styles'
import {Container} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(6),
  },
}))

export const Layout = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Container className={classes.mainContainer} maxWidth="lg">
          <AppRoutes />
        </Container>
        <Footer />
      </Router>
    </React.Fragment>
  )
}

export default Layout
