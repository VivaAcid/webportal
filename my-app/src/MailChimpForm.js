import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

import MailchimpSubscribe from "react-mailchimp-subscribe"

console.log(MailchimpSubscribe);

class MailChimpForm extends Component {
  render() {
    return (
      
        <Mailchimp
        action='https://vivaacid.us1.list-manage.com/subscribe/post?u=5ee853d04398bdc9145d39487&id=9c3c38cf55'
  //Adding multiple fields:
  fields={[
    {
      name: 'EMAIL',
      placeholder: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'FNAME',
      placeholder: 'name',
      type: 'text',
      required: true
    }
  ]}
  // Change predetermined language
  messages = {
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "Too many subscribe attempts for this email address",
      button: "LEARN MORE"
    }
  }
  // Add a personalized class
  className='h-full flex flex-col space-y-6 p-6'
  />
    );
  }
}

export default MailChimpForm;