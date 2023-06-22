import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

export default function User() {
	const { isLoading, error, user } = useSelector((state) => state.reducer.user);

	const { getUserById } = useActions();

	return (
		<div>
			<button type="button" onClick={() => getUserById(1)}>
				Get user
			</button>
			<>
				{isLoading ? (
					<div>Loading...</div>
				) : error ? (
					<div>{error.message}</div>
				) : user.name ? (
					<h1>{user.name}</h1>
				) : (
					<h1>User not found !</h1>
				)}
			</>
		</div>
	);
}
