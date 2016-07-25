import _helps from './helps';

const TIMEOUT = 1000;

export const api = {
  getHelps() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_helps), TIMEOUT);
    });
  },
};

// TODO: Write for post once we have the backend
