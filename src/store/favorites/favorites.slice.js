import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: [],
	reducers: {
		toggleFavorites: (state, { payload: recipe }) => {
			const doesExist = state.some((r) => r.id === recipe.id);

			if (doesExist) {
				const idx = state.findIndex((item) => item.id === recipe.id);

				if (idx !== 1) {
					state.splice(idx, 1);
				}
			} else {
				state.push(recipe);
			}
		},
	},
});

export const { actions, reducer } = favoritesSlice;
