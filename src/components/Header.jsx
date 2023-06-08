import {useEffect, useState} from "react";

const Header = () => {
	const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date().toLocaleString());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<header className={'header'}>
			<p className={'header__date'}>
				{currentTime}
			</p>
			<p>
				Касса #1
			</p>
		</header>
	);
};

export default Header;
