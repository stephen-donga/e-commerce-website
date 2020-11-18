import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
    );

export const selectCartItemsCounter = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((prevItem, nextItem)=> prevItem + nextItem.quantity, 0)
);