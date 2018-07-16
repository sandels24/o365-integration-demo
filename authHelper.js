const clientId = '1fec376c-3083-4494-96d4-b6e0def223d6';
const clientSecret = 'crosoLELU154[=hcMQV68=-';
const redirectUri = 'http://localhost:3000/authorize';
var auth_code = ''
const scopes = [
    'openid',
    'profile',
    'offline_access',
    'https://outlook.office.com/calendars.readwrite'
];

const credentials = {
    client: {
        id: clientId,
        secret: clientSecret
    },
    auth: {
        tokenHost: 'https://login.microsoftonline.com',
        tokenPath:  '/common/oauth2/token',
        authorizePath: '/common/oauth2/authorize'
    }
}

async function xx(){

}

var oauth2 = require('simple-oauth2').create(credentials)

module.exports = {
    getAuthUrl: function() {
        var returnVal = oauth2.authorizationCode.authorizeURL( {
            redirect_uri: redirectUri,
            scope: scopes.join(' ')
        });
        console.log('');
        //console.log('Generated auth url: ' + returnVal);
        return returnVal;
    },


    getTokenFromCode: async function (auth_code, callback, request, response) {

        const tokenconfig = {
            code: auth_code,
            redirect_uri: redirectUri,
            scope: scopes.join(' ')
        }
        console.log('1 \n');
        try{
            var result = await oauth2.authorizationCode.getToken(tokenconfig);
            var token = oauth2.accessToken.create(result);
            callback(request, response, null, token);
        }
        catch (error){
            console.log('Access Token Error', error.message);
        }
    },

    getEmailFromIdToken: function(id_token) {
        // JWT is in three parts, separated by a '.'
        var token_parts = id_token.split('.');

        // Token content is in the second part, in urlsafe base64
        var encoded_token = new Buffer(token_parts[1].replace('-', '+').replace('_', '/'), 'base64');

        var decoded_token = encoded_token.toString();

        var jwt = JSON.parse(decoded_token);
        // Email is in the upn or unique_name field
        return jwt.unique_name;
    },

    getTokenFromRefreshToken: async function(refresh_token,access_token,callback,req,res) {
        var token = oauth2.accessToken.create({'access_token':access_token, 'refresh_token': refresh_token, 'expires_in': '0'});
        try {
            token = await token.refresh();
            callback(req,res,token);

        } catch (error) {
            console.log('Refresh token error: ', error.message);
            callback(req,res,null);
        }
    }
};