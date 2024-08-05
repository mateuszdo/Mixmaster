import {Form, redirect, useNavigation} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({request}) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		const response = await axios.post(newsletterUrl, data);
		console.log(response);
		toast.success(response.data.msg);
		return redirect("/");
	} catch (error) {
		console.log(error.message);
		toast.error(error?.response?.data.msg);
		return error;
	}
};

const Newsletter = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<Form className="form" method="POST">
			<h4 style={{textAlign: "center", marginBottom: "2rem"}}>
				Newsletter
			</h4>
			<div className="form-row">
				<label className="form-label" htmlFor="name">
					Name
				</label>
				<input
					type="text"
					className="form-input"
					name="name"
					id="name"
					required
				/>
			</div>
			<div className="form-row">
				<label className="form-label" htmlFor="lastName">
					Last Name
				</label>
				<input
					type="text"
					className="form-input"
					name="lastName"
					id="lastName"
					required
				/>
			</div>
			<div className="form-row">
				<label className="form-label" htmlFor="email">
					Email
				</label>
				<input
					type="text"
					className="form-input"
					name="email"
					id="email"
					required
					defaultValue="test@test.com"
				/>
			</div>
			<button
				type="submit"
				className="btn btn-block"
				disabled={isSubmitting}
			>
				{isSubmitting ? "Submitting" : "Submit"}
			</button>
		</Form>
	);
};

export default Newsletter;
