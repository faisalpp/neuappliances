import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './store'

import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {GetStripePublishKey} from './api/order.js'
 
document.addEventListener('DOMContentLoaded',async function(){
  // Redux Stor Persistor
   const getPublicKey = await GetStripePublishKey()
   const SPK = getPublicKey.data.stripePublishKey;
   const STRIPE_PROMISE = await loadStripe(SPK)

  let persistor = persistStore(store);
   ReactDOM.createRoot(document.getElementById('root')).render(
     // <React.StrictMode>
     <Provider store={store} >
       <PersistGate loading={null} persistor={persistor} >
         <BrowserRouter>
         <Elements stripe={STRIPE_PROMISE} >
           <App />
         </Elements>
         </BrowserRouter>
       </PersistGate>
     </Provider>
   // {/* </React.StrictMode> */}
 );
})