import React from "react";
import styles from "./Header.module.css";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useFavorites } from "../../hooks/useFavorites";

export default function Header() {
	const { favorites } = useFavorites();
	return (
		<header className={styles.header}>
			<BsFillBagHeartFill fontSize={25}></BsFillBagHeartFill>
			<span>{favorites.length}</span>
		</header>
	);
}
