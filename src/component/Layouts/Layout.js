import React from 'react';
import classes from './Layout.module.css';
export function Sidebar() {
	return <aside className={classes.sidebar}></aside>;
}

export function ContainerMain({ children }) {
	return <div className={classes.containerMain}>{children}</div>;
}

export function Nav() {
	return <div className={classes.nav}></div>;
}
