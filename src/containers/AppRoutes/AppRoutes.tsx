import * as React from 'react'
import {Route} from 'react-router-dom'

import {PrivateRoute} from './PrivateRoute'
import IntentionPage from '../IntentionPage'
import IntentionList from '../IntentionList'
import LoginPage from '../LoginPage'
import {AddIntentionPage} from '../AddIntentionPage'
import {HowItWorks} from 'src/components/HowItWorks'

export const AppRoutes = () => {
  // TODO: #37 Add "how it works" on homepage
  return (
    <>
      <Route path="/" exact={true} component={IntentionList} />
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
