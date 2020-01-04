import * as React from 'react'
import {Route} from 'react-router-dom'

import IntentionPage from '../../components/Intention'
import IntentionList from '../IntentionList'
import LoginForm from '../../components/LoginForm'

const AppRoutes = () => {
  return (
    <>
      <Route path="/" exact={true} component={IntentionList} />
      <Route path="/login" exact={true} component={LoginForm} />
      <Route
        path="/intention/:id/(prayers)?/:prayerId?"
        component={IntentionPage}
      />
    </>
  )
}

export default AppRoutes
