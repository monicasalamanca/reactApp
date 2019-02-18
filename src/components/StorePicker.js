// Always import your dependencies
import React from 'react';
import { getFunName } from '../helpers';

// Every single component is created with a class
class StorePicker extends React.Component {
  render() {
    // You can only return ONE html element
    // you can NOT return sibling elements

    // The only way to return sibling elements is
    // using React.Fragment Tag
    // e.g. <React.Fragment>STUFF GOES HERE</React.Fragment> 
    return (
      <form className="store-selector">
        { /* comments must be like this */ }
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

// Now lets expose the element
export default StorePicker;