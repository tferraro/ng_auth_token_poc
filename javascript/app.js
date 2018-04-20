'use strict';

// Declare app level module which depends on views, and components
angular
.module('tokenAuthPoc', ['ng-token-auth'])
.config(function ($authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000',
      signOutUrl: '/api/v1/users/sign_out',
      omniauthWindowType: 'newWindow',
      authProviderPaths: { github: '/api/v1/users/github'   }
    });
});