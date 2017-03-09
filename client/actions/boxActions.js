import { INCREMENT_PRODUCE, DECREMENT_PRODUCE, INCREMENT_DAIRY, DECREMENT_DAIRY, INCREMENT_BAKED_GOODS, DECREMENT_BAKED_GOODS, ALL_PRODUCE, ALL_DAIRY, ALL_BAKED_GOODS, CLEAR_BAKED_GOODS, CLEAR_DAIRY, CLEAR_PRODUCE } from './types';

export function incrementProduce() {
  console.log('action creator hit');
    return {
        type: INCREMENT_PRODUCE
    }
}

export function incrementDairy() {
    return {
        type: INCREMENT_DAIRY
    }
}

export function incrementBakedGoods() {
    return {
        type: INCREMENT_BAKED_GOODS
    }
}

export function decrementProduce() {
    return {
        type: DECREMENT_PRODUCE
    }
}

export function decrementDairy() {
    return {
        type: DECREMENT_DAIRY
    }
}

export function decrementBakedGoods() {
    return {
        type: DECREMENT_BAKED_GOODS
    }
}

export function allProduce(produce) {
    return {
        type: ALL_PRODUCE,
        payload: produce
    }
}

export function allDairy(dairy) {
    return {
        type: ALL_DAIRY,
        payload: dairy
    }
}

export function allBakedGoods(bakedGoods) {
    return {
        type: ALL_BAKED_GOODS,
        payload: bakedGoods
    }
}

export function clearBakedGoods(bakedGoods) {
    return {
        type: CLEAR_BAKED_GOODS,
        payload: bakedGoods
    }
}

export function clearDairy(dairy) {
    return {
        type: CLEAR_DAIRY,
        payload: dairy
    }
}

export function clearProduce(produce) {
    return {
        type: CLEAR_PRODUCE,
        payload: produce
    }
}