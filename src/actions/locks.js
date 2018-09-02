import kisiClient from '../helpers/kisiClientInit';

import { locksActions } from '../config/actionTypes';
import apiRoutes from '../config/apiRoutes';


export const setCurrentUserLocks = locks => ({
  type: locksActions.VIEW_CURRENT_USER_LOCKS,
  locks,
});

export const viewCurrentUserLocks = () => (
  async (dispatch) => {
    try {
      const { data } = await kisiClient.get(apiRoutes.Locks);
      dispatch(setCurrentUserLocks(data));
    } catch (e) {
      console.log(e);
    }
  }
);
