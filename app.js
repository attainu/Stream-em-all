const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HFaHGAbjDYuiy9ULXxDilWIzLFT8CHfhoXCeU3meDNFSTXERemsIEI2GZmA0yF5dckk4IESd2m5GQrxqyaB3PjI00nHBmIT9j'
);
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes=>
app.get('/', (req, res) => {
  res.send('i am working');
});
//=> serve static websites
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post('/paymemt', (req, res) => {
  const { product, token } = req.body;
  console.log('Product', product);
  console.log('Price', product.price);
  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100 * 75,
          currency: 'INR',
          customer: customer.id,
          receipt_email: token.email,
          description: product.name,
        },
        { idempotencyKey }
      );
    })
    .then((result) =>
      res.status(200).json({
        result,
      })
    )
    .catch((err) => console.log(err));
});

// server

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
