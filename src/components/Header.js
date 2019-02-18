import React from 'react';

// Stateless functional component
// We have props in parenthesis becasue we are refering to all props e.g. (props)
// We can reference only one prop by removing the parenthesis e.g. props
// const Header = props => (...
// We can also add a list of props e.g. ({tagline, age})
// const Header = ({tagline, age}) => (...
const Header = (props) => (
  <header className="top">
    <h1>
      Catch 
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      {/* Curly brackers { } is kinda saying */}
      {/* I'm just gonna go to JS for a second */}
      {/* this -> refers to THIS^ component */}
      {/* props is an object inside the component which contains our final properties */}
      <span>{props.tagline}</span>
    </h3>
  </header>
)


// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch 
//           <span className="ofThe">
//             <span className="of">of</span>
//             <span className="the">the</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           {/* Curly brackers { } is kinda saying */}
//           {/* I'm just gonna go to JS for a second */}
//           {/* this -> refers to THIS^ component */}
//           {/* props is an object inside the component which contains our final properties */}
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     )
//   }
// }

export default Header;