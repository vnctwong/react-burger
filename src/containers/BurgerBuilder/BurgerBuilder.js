import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <aux>
        <Burger />
        <div>Build Controls</div>
      </aux>
    );
  }
}

export default BurgerBuilder;
