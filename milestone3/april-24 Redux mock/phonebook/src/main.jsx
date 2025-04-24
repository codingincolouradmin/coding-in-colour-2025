import ReactDOM from 'react-dom/client'
import App from './App'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import phoneBookSlice from './slices/phoneBookSlice'

const store = configureStore({
  reducer: {
    phonebook: phoneBookSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)