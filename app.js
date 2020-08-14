const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HFF8bFYHbXxM4QyhXHSfjXLTKZihRHuVQqDYXxBTNa0zIaJhAOAq2nQLLZZQX0egqDQ4ZLtxZMxbmq3eytLqdLe00QpB3KhFD'
);
const { v4: uuidv4 } = require('uuid');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
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
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
