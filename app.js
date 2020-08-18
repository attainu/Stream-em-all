const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const stripe = require('stripe')(
  'sk_test_51HFF8bFYHbXxM4QybwCTJuBKfaKAlCsgQq0clswJC1ZXWwbziZtkl5cqmbWSYeTYWG8Ml2UALHJBYumzqjsyOCma00PsFAoFSi'
);
const { v4: uuidv4 } = require('uuid');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// initializing nodemailer
const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'be9929b70dd679',
      pass: '892ff6656bb4a9',
    },
  }
  // {
  //   service: 'SendGrid',
  //   auth: {
  //     api_user: 'akashdutta93@gmail.com',
  //     api_key: 'akashmaroon5',
  //   },
  // }
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.post('/paymemt', (req, res) => {
  const { product, token } = req.body;
  const idempotencyKey = uuidv4();
  return stripe.charges
    .create(
      {
        amount: product.price * 100,
        currency: 'INR',
        source: token.id,
        receipt_email: token.email,
        description: product.name,
      },
      { idempotencyKey }
    )
    .then((result) => {
      res.status(200).json({
        result,
      });
      const mailOptions = {
        from: 'Subscription <admin@netflixv2.com>',
        to: token.email,
        subject: 'Netflix-V2 subscription!',
        text: ` You have purchased a subscription! 🚀
        to Download your Payment Reciept click below =>
        ${result.receipt_url}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        }
      });
    })
    .catch((err) => console.log(err));
});

// server

const server_port = process.env.PORT || 80;
const server_host = '0.0.0.0';
app.listen(server_port, server_host, () => {
  console.log(`Server started on port ${server_port}`);
});
