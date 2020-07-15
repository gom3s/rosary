import * as React from 'react'
import {Route} from 'react-router-dom'

import {PrivateRoute} from './PrivateRoute'
import IntentionPage from '../IntentionPage'
import IntentionList from '../IntentionList'
import LoginPage from '../LoginPage'
import {AddIntentionPage} from '../AddIntentionPage'

export const AppRoutes = () => {
  return (
    <>
      <Route path="/" exact={true} component={IntentionList} />
      <Route path="/login" exact={true} component={LoginPage} />
      <PrivateRoute path="/add-intention">
        <AddIntentionPage />
      </PrivateRoute>
      <Route
        path="/intention/:id/(prayers)?/:prayerId?"
        component={IntentionPage}
      />
    </>
  )
}

export default AppRoutes
