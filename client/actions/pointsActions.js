import { REDEEM_POINTS } from './types';

export function redeem(redeem) {
  return {
    type: REDEEM_POINTS,
    payload: redeem
  }
}