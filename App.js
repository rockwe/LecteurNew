import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './Navigation/Navigation'
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    let persistor = persistStore(Store)
    return (
        <Provider store={Store}>
          <PersistGate persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
    )
  }
}
