import React, { Component } from "react";

import store from "./reducers/store";
import { Provider } from "react-redux";
import RootScreen from "./screens/RootScreen";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: ..."]);
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    );
  }
}
