import * as React from 'react'
import {Route} from 'react-router-dom'

import IntentionPage from '../IntentionPage'
import IntentionList from '../IntentionList'
import LoginPage from '../LoginPage'

export const AppRoutes = () => {
  return (
    <>
      <Route path="/" exact={true} component={IntentionList} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Route
        path="/intention/:id/(prayers)?/:prayerId?"
        component={IntentionPage}
      />
    </>
  )
}

export default AppRoutes
