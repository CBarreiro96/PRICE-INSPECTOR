import React from "react";


const SingUp = () => {
  let form = (null);
  const handleSubmit = (event) => {
		event.preventDefault();
		const form_data = new FormData(form.current);
		let payload = {};
		form_data.forEach(function (value, key) {
			payload[key] = value;
		});
    //   console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
		<section className="bg-nianza h-screen">
			<div className="mx-auto flex justify-center lg:items-center h-full">
				<form ref={form} onSubmit={handleSubmit} className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 py-10 px-2 sm:px-0">
					<div className="pt-0 px-2 flex flex-col items-center justify-center">
						<h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold">Create Your Account</h3>
					</div>
					<div className="mt-12 w-full px-2 sm:px-6">
						<div className="flex flex-col mt-5">
							<label htmlFor="email" className="text-lg font-semibold">
								First Name
							</label>
							<input required id="firts_name" name="first_name" className="form_imput" type="first_name"/>
						</div>
						<div className="flex flex-col mt-5">
							<label htmlFor="email" className="text-lg font-semibold">
								Last Name
							</label>
							<input required id="email" name="email" className="form_imput" type="email"/>
						</div>
						<div className="flex flex-col mt-5">
							<label htmlFor="email" className="text-lg font-semibold">
								Email
							</label>
							<input required id="email" name="email" className="form_imput" type="email"/>
						</div>
						<div className="flex flex-col mt-5">
							<label htmlFor="password" className="text-lg font-semibold ">
								Password
							</label>
							<input required id="password" name="password" className="form_imput" type="password"/>
						</div>
					</div>
					<div className="px-2">
						<button className="w-full bg-lime_green rounded px-8 py-3 text-sm mt-6">Login</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SingUp;
