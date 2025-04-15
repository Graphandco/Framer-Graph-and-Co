const Form = () => {
	return (
		<div
			className="sib-form"
			style={{ textAlign: "center", backgroundColor: "#eff2f7" }}
		>
			<div id="sib-form-container" className="sib-form-container">
				<div
					id="sib-container"
					className="sib-container--medium sib-container--vertical"
					style={{
						textAlign: "center",
						backgroundColor: "transparent",
						maxWidth: "350px",
						borderRadius: "3px",
						borderWidth: "0px",
						borderColor: "#c0ccd9",
						borderStyle: "solid",
					}}
				>
					<form
						id="sib-form"
						method="POST"
						action="https://sibforms.com/serve/MUIFANJyRG5ui9nqCzNiKywSbLJNRg6gsdouVZ5N8DEAhPpma9Noso7Pyg7jwcf4BxJ0DzCZexSt1osBrRiLjJww8UY4_dNcqUHQ9XY46YcERwUrhG81l1FoDnq5DYQPZLWSdNAKGKBT7aZ4Rv4x91XMGlruCqEM6R7g6D8Vb2EBB7wlKlrjI4010-fFaVmsHKRkySJA4mSUzT3X"
					>
						<div style={{ padding: "8px 0" }}>
							<div className="sib-input sib-form-block">
								<div className="form__entry entry_block">
									<div className="form__label-row">
										<div className="entry__field">
											<input
												className="input"
												type="text"
												id="EMAIL"
												name="EMAIL"
												autoComplete="off"
												data-required="true"
												required
											/>
										</div>
									</div>

									<label
										className="entry__error entry__error--primary"
										style={{
											fontSize: "16px",
											textAlign: "left",
											fontFamily: "Helvetica, sans-serif",
											color: "#661d1d",
											backgroundColor: "#ffeded",
											borderRadius: "3px",
											borderColor: "#ff4949",
										}}
									></label>
								</div>
							</div>
						</div>

						<div style={{ padding: "8px 0" }}>
							<div
								className="sib-form-block"
								style={{ textAlign: "left" }}
							>
								<CustomButton
									className="sib-form-block__CustomButton sib-form-block__CustomButton-with-loader"
									style={{
										fontSize: "15px",
										textAlign: "left",
										fontWeight: 700,
										fontFamily:
											'"Trebuchet MS", sans-serif',
										color: "#ffffff",
										backgroundColor: "#020202",
										borderRadius: "20px",
										borderWidth: "0px",
									}}
									form="sib-form"
									type="submit"
								>
									<svg
										className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
										viewBox="0 0 512 512"
									>
										<path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
									</svg>
									SUBSCRIBE
								</CustomButton>
							</div>
						</div>

						<input
							type="text"
							name="email_address_check"
							value=""
							className="input--hidden"
						/>
						<input type="hidden" name="locale" value="en" />
						<input type="hidden" name="html_type" value="simple" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
