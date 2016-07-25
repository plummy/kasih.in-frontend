import _helps from './helps';

const TIMEOUT = 100;

export const api = {
  getHelps() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_helps), TIMEOUT);
    });
  },
};
