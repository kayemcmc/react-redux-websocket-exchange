import { createStore } from "redux";

import reducers from "../reducers";

/**
 * Create a testing store with reducers and initial state
 * @param  {object} initialState - initialState for store
 * @function  storeFactory
 * @returns {store} --Redux store
 *
 */

export const storeFactory = initialState => {
  createStore(reducers, initialState);
};

/**
 * Return ShallowWrapper containing nodes with data-test value
 * @param  {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param  {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 *
 */

export const findTestbyAttribute = (wrapped, val) => {
  return wrapped.find(`[data-test='${val}']`);
};
