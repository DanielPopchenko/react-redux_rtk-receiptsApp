import React from "react";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";
import css from "./RecipeItem.module.css";

export default function RecipeItem({ recipe }) {
	const { favorites } = useFavorites();
	const { toggleFavorites } = useActions();

	// console.log(favorites);

	const doesExist = favorites.some((r) => r.id === recipe.id);
	return (
		<div className={css.item}>
			<img src={recipe.image} alt={recipe.name} width={150} height={130} />
			<h3>{recipe.name}</h3>
			<button type="button" onClick={() => toggleFavorites(recipe)}>
				{!doesExist ? "Add to favorites" : "Remove from favorites"}
			</button>
		</div>
	);
}
