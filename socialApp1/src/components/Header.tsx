import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/login" class={url == '/404' && 'active'}>
					Login
				</a>
				<a href="/registration" class={url == '/404' && 'active'}>
					Sign Up
				</a>
			</nav>
		</header>
	);
}
