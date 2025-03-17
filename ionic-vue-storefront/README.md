# Ionic Vue Storefront

This project is a storefront application built using Node.js, Vue.js, and Ionic. It provides a seamless shopping experience for users, allowing them to browse products, add items to their cart, and complete purchases.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client-side of the application is built with Vue.js and Ionic. It includes the following key components:

- **public/**: Contains static assets such as the favicon and the main HTML file.
- **src/**: Contains the source code for the Vue application.
  - **components/**: Reusable Vue components like `ProductCard`, `ShoppingCart`, and `NavBar`.
  - **views/**: Vue components representing different pages of the application, including `HomePage`, `ProductPage`, `CartPage`, and `CheckoutPage`.
  - **router/**: Configures the Vue Router for navigation between pages.
  - **store/**: Sets up Vuex for state management.
  - **theme/**: Contains CSS variables for theming the application.

### Server

The server-side of the application is built with Node.js and handles API requests. It includes:

- **src/**: Contains the source code for the server application.
  - **controllers/**: Contains logic for handling requests related to products, orders, and users.
  - **models/**: Defines the data models for products, orders, and users.
  - **routes/**: Sets up API routes for handling requests.
  - **config/**: Contains database configuration and connection logic.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd ionic-vue-storefront
   ```

2. **Install dependencies for the client**:
   ```
   cd client
   npm install
   ```

3. **Install dependencies for the server**:
   ```
   cd server
   npm install
   ```

4. **Set up the database**:
   Configure your database connection in the `server/.env` file.

5. **Run the server**:
   ```
   cd server
   npm start
   ```

6. **Run the client**:
   ```
   cd client
   npm run serve
   ```

## Features

- Browse products and view details on the product page.
- Add products to the shopping cart.
- Checkout process for completing purchases.
- Responsive design for mobile and desktop views.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.