import React from "react";
import { connect } from "react-redux";

import AuthNavigator from "@navigations/AuthNavigator";
import AppNavigator from "@navigations/AppNavigator";

const AppRoot = ({ auth }) => {
  console.log(auth);
  return auth.isLogin ? <AppNavigator /> : <AuthNavigator />;
};

export const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(AppRoot);
