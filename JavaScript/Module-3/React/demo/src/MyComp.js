// let MyComp = () =>{
//     return (
//         <div>
//            <h1>Hello welcome to Mayank`s First react App</h1>
//            <p>Lorem insum</p>
//            <ul>
//                <li>First</li>
//                <li>Second</li>
//            </ul>
//         </div>
//     );
// };

// export default MyComp;

/////////////////////////////// using class//////////////////////////

// import React from "react";

// class MyComp extends React.Component {
//   state = {
//     someNumber: 3,
//   };

//   render = () => {
//     return (
//       <div>
//         <h1> Somenumber is : {this.state.someNumber} Thank you</h1>
//       </div>
//     );
//   };
// }

// export default MyComp;

////////////////////////// Increment and Decrement using Setstate ///////////////////////

import React from "react";

class MyComp extends React.Component {
  state = {
    somenumber: 0,
  };

  render = () => {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ somenumber: this.state.somenumber + 1 });
          }}
        >
          Increment
        </button>

        <h1>{this.state.somenumber}</h1>
        <button
          onClick={() => {
            this.setState({ somenumber: this.state.somenumber - 1 });
          }}
        >
          Decrement
        </button>
      </div>
    );
  };
}

export default MyComp;
