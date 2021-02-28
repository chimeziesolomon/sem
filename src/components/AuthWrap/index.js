import React from 'react';
import '../../default.scss';

const AuthWrap = ({ headline, children }) => {
	return (
		<div className="authWrap">
			<div className="wrap">
				{headline && <h2>{headline}</h2>}
				<div className="children">{children && children}</div>
			</div>
		</div>
	);
};

export default AuthWrap;
