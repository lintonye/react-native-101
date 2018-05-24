import React, { Component } from "react";
import hoistStatics from "hoist-non-react-statics";

import { UIManager, findNodeHandle } from "react-native";

const measure = nativeHandle => {
  return new Promise((resolve, reject) => {
    UIManager.measureInWindow(nativeHandle, (x, y, width, height) => {
      resolve({ left: x, top: y, width, height });
    });
  });
};

export const withViewBounds = C => {
  class ComponentWithViewBounds extends Component {
    state = {
      viewBounds: undefined
    };
    onLayout = async () => {
      const bounds = await measure(this._nativeHandle);
      this.setState({ viewBounds: bounds });
    };
    bindNativeHandle = view => {
      this._nativeHandle = findNodeHandle(view);
    };
    render() {
      return (
        <C
          {...this.props}
          viewBounds={this.state.viewBounds}
          ref={this.bindNativeHandle}
          onLayout={this.onLayout}
        />
      );
    }
  }

  // Copies non-react specific statics
  return hoistStatics(ComponentWithViewBounds, C);
};
