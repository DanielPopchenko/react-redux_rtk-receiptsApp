import React from "react";
import { useGetRecipesQuery } from "../store/api/api";
import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
// import User from "./user/User";
import Form from "./form/Form";

// ! Можем подставить null (нету айди) и запроса у нас не будет
// const userId = 1;

export default function App() {
	const { data, isLoading } = useGetRecipesQuery();
	// undefined, {
	// ? Авторизация
	// ! Говорим что если юзера у нас нету, или он не зареганный, то и запроса быть не может
	// 	skip: !userId,
	// }

	return (
		<section>
			<Header />
			{/* <User></User> */}
			<Form />
			<div>
				{isLoading ? (
					<div>Loading...</div>
				) : data ? (
					data.map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)
				) : (
					<div>Not found!</div>
				)}
			</div>
		</section>
	);
}
