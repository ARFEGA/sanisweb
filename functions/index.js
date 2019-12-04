const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin:true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/

let transporter = nodemailer.createTransport({
    
    service: 'gmail',//smtp.gmail.com  //in place of service use host...
    //host:'smtp.gmail.com',
    secure: false,//true
    port: 465,//25
    auth: {
        user: functions.config().gmail.email,
        pass: functions.config().gmail.password
    },
    tls: {
    rejectUnauthorized: false
  }
    
   
});

exports.sendMail = functions
.region('europe-west1')
.https.onRequest((req, res) => {
    cors(req, res, () => {
    if (req.method !== 'POST') {
        return;
    }
      
       
     
       // const momento = `${Date()} ${Date().toLocaleTimeString()}`;
        

        const mailOptions = {
            from: req.body.name,//'SANIS Fisioterapia <lalalalal@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: req.body.emailTo,
            subject: req.body.asunto,//'I\'M A PICKLE!!!', // email subject
            //text:msg,
            html: ` <h2>Enviado por: ${req.body.name} <br/>Desde: ${req.body.from}</h2>
                    <h3>${req.body.date}</h3>
                    <hr/>
                    <h3>Mensaje:<br/>
                    <p>${req.body.msg}</p>
                    <hr/>`

            //html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
            //    <br />
            //    <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
            //` // email content in HTML
        };
  
        // returning result
        transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send(true);
        });
    });    
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

