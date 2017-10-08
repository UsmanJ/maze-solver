const ROUTES =
  process.env.NODE_ENV === 'development'
    ? {
      BaseURL: 'http://localhost:9000',
    }
    : {
      BaseURL: 'https://maze-solver-app.herokuapp.com',
    };

export { ROUTES }; // eslint-disable-line import/prefer-default-export
