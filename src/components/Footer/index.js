import React from 'react';
import '../../default.scss';

const Footer = (props) => {
	return (
		<footer
			className="footer"
			style={{
				fontSize: '1rem',
				textAlign: 'center',
				letterSpacing: '3px',
				marginTop: '-280px',
				backgroundColor: 'transparent',
				listStyleType: 'none'
			}}
		>
			<section className="container space-between support">
				<div
					className="text-primary"
					style={{
						listStyleType: 'none',
						float: 'left'
					}}
				>
					Customer Support
					<ul
						className=""
						style={{
							listStyleType: 'none'
						}}
					>
						<li>
							<a href="#">Contact Us</a>
						</li>
						<li>
							<a href="#">Order Tracker</a>
						</li>
						<li>
							<a href="#">Returns &amp; Refunds</a>
						</li>
						<li>
							<a href="#">Size Guide</a>
						</li>
					</ul>
				</div>
				<div>
					<div
						className="text-primary"
						style={{
							left: '200px'
						}}
					>
						Company Info
						<ul
							className=""
							style={{
								listStyle: 'none'
							}}
						>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
						</ul>
					</div>
					<div>
						<div
							className="text-primary"
							style={{
								float: 'right',
								marginTop: '-5.2rem'
							}}
						>
							Privacy &amp; Terms
							<ul
								className=""
								style={{
									listStyle: 'none'
								}}
							>
								<li>
									<a
										href="#"
										style={{
											listStyle: 'none',
											marginBottom: '10px'
										}}
									>
										Privacy &amp; Security
									</a>
								</li>
								<li>
									<a
										href="#"
										style={{
											listStyle: 'none'
										}}
									>
										Statement
									</a>
								</li>
								<li>
									<a href="#">Terms &amp; Conditions</a>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<div>Email Updates</div>
						<div>Exclusive sales, special offers, and more.</div>
						<div className="">
							<input type="text" placeholder="Enter email address" />
							<button className="">Contact Us</button>
						</div>
					</div>
				</div>

				<section>
					<div
						className="flex flex-column align-center"
						className=""
						style={{
							listStyle: 'none'
						}}
					/>
				</section>

				<div className="text-primary">&copy;Sem 2021</div>
			</section>
		</footer>
	);
};

export default Footer;
