import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";
import * as userActions from "../store/user/user.actions";
// ! ---- c помощью этого персонального хука нам можно не делать каждый рах диспатч и не импортировать эешены в каждый файл -----

// ! Если много экшенов, нужно вынести их в другой файл
const rootActions = {
	...actions,
	...userActions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	// ! Для того чтобы ссылка не переобновлялась каждый раз, чтобы закешировать
	// ? bindActionCreators - позволяет обернуть все экешены в dispatch
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
