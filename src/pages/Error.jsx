import Wrapper from "../assets/wrappers/ErrorPage";
import {useRouteError, Link} from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
	const error = useRouteError();
	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt="not found" />
					<h3>Uppssss!</h3>
					<p>The page you looking for seems to not exist</p>
					<Link to="/">Back Home</Link>
				</div>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<h2>Sorry, something went wrong!</h2>
		</Wrapper>
	);
};

export default Error;
