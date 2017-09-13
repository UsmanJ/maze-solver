const ROUTES =
  process.env.NODE_ENV === 'development'
    ? {
      BaseURL: 'localhost:9000',
    }
    : null;

export { ROUTES }; // eslint-disable-line import/prefer-default-export
