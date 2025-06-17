# 🚗 Car Rental System - side client

An advanced system for managing and renting cars, with an emphasis on a convenient user interface, clean design, and advanced use of React components and ready-made libraries. Includes permissions for a regular user and a system administrator, and allows full management of cars, rentals, returns, pricing, and more.

## 🛠 Main technologies
- React
- Redux
- React Router
- useState / useRef / navigate as child
- Dynamic CSS by status
- Local data storage

## 👤 User types

### Regular user
- View a list of available cars.
- Filter by: city, location.
- Make a rental:
- Automatically fill in fields according to car selection.
- Calculate price by time.
- Return a car:
- Fill in car details, return date and time.
- Calculate final price.
- Payment:
- Option for immediate payment with credit.
- Fill in credit details (dummy only).

### System Administrator
- View all rentals.
- View all questions (rental history).
- Add new vehicles.
- Edit and delete existing vehicles.
- Manage images, categories and vehicle types.
- Set prices for each vehicle type or category.

## 🔒 Data security and integrity checks
- Validation of forms.
- Sensitive fields (credit) integrity check for a real number used by the library.
- Access permissions (user / administrator).
