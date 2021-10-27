import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
import { CoreSetup } from 'kibana/public';
 

export function test(core:CoreSetup) {
    console.log();
    const urlToADashboard = core.http.basePath.prepend(`/discover/my.html`);
     console.log(urlToADashboard);
     window.location.href = urlToADashboard
}