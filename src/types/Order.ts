interface ILineItems {
	product_id: number,
	name: string,
	quantity: number,
	price: string
}
export interface IOrderDetails {
	payment_method: string,
	payment_method_title: string,
	set_paid: boolean,
	total: string,
	total_tax: string,
	prices_include_tax: boolean,
	customer_user_agent: string,
	billing:
		{
			first_name: string,
			last_name: string,
			email: string
		},
	line_items: ILineItems[]
}

export interface IOrderComplete {
	customer_id: number,
	orderID: number
}
