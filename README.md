# Input Test Project

A React project with TypeScript, utilizing modern technology stack for creating user interfaces.

## Technologies

- React 19.1.0
- TypeScript 4.9.5
- Redux Toolkit for state management
- React Testing Library for testing
- Create React App as the project foundation

## Project Structure

```
src/
  ├── components/     # React components
  ├── store/         # Redux store and slices
  ├── helpers/       # Helper functions
  ├── types/         # TypeScript types
  ├── App.tsx        # Root component
  └── index.tsx      # Entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the project:
   ```bash
   npm run start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Run the project in development mode
- `npm test` - Run tests
- `npm run build` - Build the project for production
- `npm run eject` - Eject CRA configuration (irreversible operation)

## Testing

The project uses React Testing Library for component testing. Tests can be run using the command:

```bash
npm test
```

## Redux Store

The project uses Redux Toolkit for application state management. The store is located in the `src/store/` directory.

## Dependencies

Main project dependencies:
- @reduxjs/toolkit: ^2.7.0
- react-redux: ^9.2.0
- react: ^19.1.0
- typescript: ^4.9.5

## Browser Support

The project supports:
- All modern browsers
- Internet Explorer is not supported
- Optimized for mobile devices

## Contributing

1. Fork the project
2. Create a branch for new functionality
3. Submit a pull request

## License

This project is private and not intended for distribution.
