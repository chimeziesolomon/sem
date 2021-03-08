import React from 'react';
import '../../default.scss';

const Footer = (props) => {
	return (
		<footer className="footer">
			<section className=" text-primary container space-between footer-list-title">
				<div>
					Customer Support
					<ul className="footer-list-menu">
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
					<div className=" text-primary footer-list-title">
						Company Info
						<ul className="footer-list-menu">
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
						</ul>
					</div>
					<div>
						<div className="text-primary footer-list-title">
							Privacy &amp; Terms
							<ul className="footer-list-menu">
								<li>
									<a href="#">Privacy &amp; Security</a>
								</li>
								<li>
									<a href="#">Statement</a>
								</li>
								<li>
									<a href="#">Terms &amp; Conditions</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="">
						<ul className="">
							<li>
								<a href="#">facebook</a>
							</li>
							<li>
								<a href="#">twitter</a>
							</li>
							<li>
								<a href="#">linkedIn</a>
							</li>
							<li>
								<a href="#">instagram</a>
							</li>
						</ul>
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

				<section />

				<div className="text-primary">&copy;Sem 2021</div>
			</section>
		</footer>
	);
};

export default Footer;
