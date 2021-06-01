import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			// grab the index of the product being added
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id
			);
			// if the product does not already exist in the items array, add it
			if (index === -1) {
				state.items = [...state.items, action.payload];
			} else {
				// update quantity of product
				state.items[index] = {
					...state.items[index],
					quantity: state.items[index].quantity + 1,
				};

				state.items = [...state.items];
			}
		},
		removeFromBasket: (state, action) => {
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id
			);

			if (index >= 0) {
				// if quantity === 0 remove from cart entirely
				if (state.items[index].quantity === 1) {
					state.items.splice(index, 1);
					state.items = [...state.items];
				} else {
					// otherwise remove 1 item
					state.items[index] = {
						...state.items[index],
						quantity: state.items[index].quantity - 1,
					};

					state.items = [...state.items];
				}
			} else {
				console.warn(`Product not found in basket (id: ${action.payload.id})`);
				// item doesnt exist
			}
		},
	},
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
	state.basket.items.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

export default basketSlice.reducer;
