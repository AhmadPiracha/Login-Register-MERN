
import React, { useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem(token)
				navigate.replace('/login')
			} else {
				// populateQuote()
			}
		}
	}, [navigate])
	return (
		<>
			<div className="container-fluid mt-5">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12">
						<div className="card bg-dark text-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '400px' }}>
							<div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
								<p className="b-2 text-uppercase fw-bold">Hello World</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default Dashboard