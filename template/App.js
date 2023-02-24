import React from 'react';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import '~core/i18n'; // init I18n
import store from '~core/redux/store';
import AppRouter from '~router';

const App = () => {
  return (
    <Provider store={store}>
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
        <AppRouter />
      {/* </GestureHandlerRootView> */}
    </Provider>
  );
};

export default App;
