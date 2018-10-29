import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SeeMore extends Component {
   render() {
       const {to, text} = this.props;
       return(
           <Link to={to}className="seeMore">
               {text}
           </Link>
       )
   }
}
export default SeeMore;

