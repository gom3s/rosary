import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {i18nSetup} from 'src/app/i18n/setup'
import App from './app/App'
import registerServiceWorker from './registerServiceWorker'

i18nSetup()

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
