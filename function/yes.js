const request = require('request');

exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    //Return 200 to caller
    callback(null, {
        statusCode: '200'
    });

    //Read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
    var body = 'cmd=_notify-validate&' + event.body;

    console.log('Verifying');
    console.log(body);

    var options = {
        url: 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr',
        method: 'POST',
        headers: {
            'Connection': 'close'
        },
        body: body,
        strictSSL: true,
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
    };
};