import { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const defaultValue = {
	name: "",
	image: "",
};

export default function Form() {
	const [recipe, setRecipe] = useState({
		name: "",
		image: "",
	});

	const [createRecipe] = useCreateRecipeMutation();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(recipe);

		createRecipe(recipe).then(() => setRecipe(defaultValue));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<p style={{ marginBottom: 10 }}>Create new recipe: </p>
				<label>
					<input
						type="text"
						placeholder="name"
						value={recipe.name}
						onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
					/>
				</label>
				<label>
					<input
						type="text"
						placeholder="image"
						value={recipe.image}
						onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
					/>
				</label>

				<button type="submit">Create</button>
			</form>
		</div>
	);
}
