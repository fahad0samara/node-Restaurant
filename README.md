
# My Restaurant API

This is the backend API for My Restaurant application. It allows users to manage their restaurant, create orders, and more.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Cloudinary
- Stripe

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your environment variables by creating a `.env` file and adding the following variables:

```
# MongoDB Connection String
MONGODB_CONNECTION_STRING=mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>?retryWrites=true&w=majority

# Auth0 Configuration
AUTH0_AUDIENCE=<your-auth0-audience>
AUTH0_ISSUER_BASE_URL=<your-auth0-issuer-base-url>

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

# Stripe Configuration
FRONTEND_URL=<your-frontend-url>
STRIPE_API_KEY=<your-stripe-api-key>
STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>

```

4. Start the server using `npm start`.
5. Access the API at `http://localhost:8000`.

## API Endpoints

### User Routes

- `GET /api/my/user`: Get current user
- `POST /api/my/user`: Create new user
- `PUT /api/my/user`: Update current user

### Restaurant Routes

- `GET /api/my/restaurant`: Get current user's restaurant
- `POST /api/my/restaurant`: Create new restaurant
- `PUT /api/my/restaurant`: Update current user's restaurant

- `GET /api/restaurant/:restaurantId`: Get restaurant by ID
- `GET /api/restaurant/search/:city`: Search restaurants by city

### Order Routes

- `GET /api/order`: Get current user's orders
- `POST /api/order/checkout/create-checkout-session`: Create checkout session
- `POST /api/order/checkout/webhook`: Stripe webhook handler

## License

This project is licensed under the [MIT License](LICENSE).


