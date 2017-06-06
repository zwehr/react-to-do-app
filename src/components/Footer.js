import React, { Component } from 'react';

class Footer extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (<p className="footer">&copy;{currentYear}, made by <a href="mailto:zwehrmeister@gmail.com">Zack</a></p>)
  }
}

export default Footer;
