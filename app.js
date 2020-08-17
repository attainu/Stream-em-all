const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HFF8bFYHbXxM4QybwCTJuBKfaKAlCsgQq0clswJC1ZXWwbziZtkl5cqmbWSYeTYWG8Ml2UALHJBYumzqjsyOCma00PsFAoFSi'
);
const { v4: uuidv4 } = require('uuid');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes=>
app.get('/', (req, res) => {
  res.send('i am working');
});

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
    .then((result) =>
      res.status(200).json({
        result,
      })
    )
    .catch((err) => console.log(err));
});

// server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
