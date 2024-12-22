// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// import { BrowserRouter as Router } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import {store, persistor} from './store/store';

// import { PersistGate } from 'redux-persist/integration/react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <Provider store={store}>
//      <PersistGate loading={null} persistor={persistor}>
//         <Router>
//           <React.StrictMode>
//             <App />
//           </React.StrictMode>
//         </Router>
//       </PersistGate>  
//   </Provider>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <React.StrictMode>
          {/* Wrap your app with Elements for Stripe */}
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </React.StrictMode>
      </Router>
    </PersistGate>
  </Provider>
);
