export default {

    oidc: {
        clientId: 'your_okta_client_ID',
        issuer: 'your_okta_domain/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}