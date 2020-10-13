import React from 'react';

const Dashboard = ()=>{

	const getItems = ()=>{
		return [
			{
				name: "Stethoscope",
				return_date: "8 hours",
				item_id: 23801
			},
			{
				name: "Behavioural biology textbook",
				return_date: "2 days",
				item_id: 48920
			},
			{
				name: "Design kit",
				return_date: "6 days",
				item_id: 98384
			}
		];
	}

	return(
		<div className='dashboard-container'>
			<div className='dashboard-header'>
				<p>Your items</p>
			</div>
			<div className='dashboard-list'>
				<ul>
					{getItems().map((item, index)=>{
						return(
							<li key={index}>
								<span>{item.name}</span>
								<span>{item.return_date}</span>
								<button type="button">More</button>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	);
}

export default Dashboard;