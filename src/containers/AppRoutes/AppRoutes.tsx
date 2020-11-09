import * as React from 'react'
import {Route} from 'react-router-dom'

import {PrivateRoute} from './PrivateRoute'
import IntentionPage from 'src/pages/IntentionPage'
import IntentionList from 'src/pages/IntentionList'
import LoginPage from 'src/pages/LoginPage'
import {AddIntentionPage} from 'src/pages/AddIntentionPage'
import {HowItWorks} from 'src/pages/HowItWorks'
import {About} from 'src/pages/About'

export const AppRoutes = () => {
  // TODO: #37 Add "how it works" on homepage
  return (
    <>
      <Route path="/" exact={true} component={IntentionList} />
      <Route path="/policy" exact={true} component={About} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Route path="/how-it-works" exact={true} component={HowItWorks} />
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
