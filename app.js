const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
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

// routes=>
app.get('/', (req, res) => {
  res.send('i am working');
});

app.post('/paymemt', (req, res) => {
  const { product, token } = req.body;
  console.log('Product', product);
  console.log('Price', product.price);
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
    .then((charge) => {
      console.log('charge>', charge);
      const mailOptions = {
        from: 'Subscription <admin@netflixv2.com>',
        to: token.email,
        subject: 'Netflix-V2 subscription!',
        text: ' You have purchased a subscription!',
      };
      console.log('mailOptions>', mailOptions);
      transporter.sendMail(mailOptions, function (error, info) {
        console.log('error1>', error);
        console.log('info>', info);
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    })
    .catch((err) => console.log(err));
});

// server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
