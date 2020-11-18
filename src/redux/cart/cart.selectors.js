import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
    );

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCounter = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((prevItem, nextItem)=> prevItem + nextItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((prevItem, nextItem)=> prevItem + nextItem.quantity * nextItem.price, 0)
)