import { INCREMENT_PRODUCE, DECREMENT_PRODUCE, INCREMENT_DAIRY, DECREMENT_DAIRY, INCREMENT_BAKED_GOODS, DECREMENT_BAKED_GOODS, ALL_PRODUCE, ALL_DAIRY, ALL_BAKED_GOODS } from './types';

export function incrementProduce() {
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