import React, { Component } from 'react'
import AppNavBar from '@/_c/AppNavBar';
import SideBar from '@/_c/SideBar';

export default class AppLayout extends Component {
  render() {
    return (
      <div className="AppLayout">
        <AppNavBar/>
        <SideBar/>
        AppLayout
      </div>
    )
  }
}
