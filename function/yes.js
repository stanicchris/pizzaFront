import request from 'request';

export function handler(event, context, callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    //Return 200 to caller
    callback(null, {
        statusCode: 200,
        body: "Hello, World ca marche"
    });

    //Read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
    var body = 'cmd=_notify-validate&' + event.body;

    console.log('Verifying');
    console.log(body);

    var options = {
        url: 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr',
        method: 'POST',
        headers: {
        "https://lpa2sgadot.herokuapp.com" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"client_name\": \"robert Dupond\", \"client_adress\": \"3 rue des alouettes Trifouilly les oies\", \"pizzas\": [ 0 ]}"
        };
        body: body,
        strictSSL: true,
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
    };

    //POST IPN data back to PayPal to validate
    request(options, function callback(error, response, body) {
        if (!error && response.statusCode === 200) {

            //Inspect IPN validation result and act accordingly
            if (body.substring(0, 8) === 'VERIFIED') {

                //The IPN is verified
                console.log('Verified IPN!');
                console.log(JSON.parse(body))
            } else if (body.substring(0, 7) === 'INVALID') {

                //The IPN invalid
                console.log('Invalid IPN!');
            } else {
                //Unexpected response body
                console.log('Unexpected response body!');
                console.log(body);
            }
        }else{
            //Unexpected response
            console.log('Unexpected response!');
            console.log(response);
        }

    });

}