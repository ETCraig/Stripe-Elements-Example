import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './Components/CheckoutForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey='pk_live'>
        <div className='example'>
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
