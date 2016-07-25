import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

const getSubmitting = state => state.help.submitting;
const getPostedHelp = state => state.help.submitted;
const getFeedsHelp = state => state.helps.items;

// For now it is just add your posted help to the feeds
// This selector is supposed to combine the submitted help with the available feed.
export const getSortedFeeds = createSelector(
  [getSubmitting, getPostedHelp, getFeedsHelp],
  (submitting, submitted, items) => {
    // Check if the submission is success and there is an item in the submitted
    if (!submitting && !isEmpty(submitted)) {
      return [submitted, ...items];
    }
    return items;
  }
);
