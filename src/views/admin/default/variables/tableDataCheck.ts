type RowObj = {
	name: string;
	previousclosingprice: number;
	marketprice: number;
	closingprice: number;
  
	highprice: number;
	lowprice: number;
  
	tradingvolume24 : number;
	floatingprice:number;
	ratechange: number;
};

const tableDataCheck: RowObj[] = [
	{
		name: "VALOR",
		previousclosingprice: 268.6,
		marketprice: 268.6,
		closingprice: 275,
	  
		highprice: 275,
		lowprice: 263.1,
	  
		tradingvolume24 : 263.1,
		floatingprice:263.1,
		ratechange: 263.1,
	},
	{
		name: "ASM",
		previousclosingprice: 268.6,
		marketprice: 268.6,
		closingprice: 275,
	  
		highprice: 275,
		lowprice: 263.1,
	  
		tradingvolume24 : 263.1,
		floatingprice:263.1,
		ratechange: 263.1,
	},
	{
		name: "TDROP",
		previousclosingprice: 268.6,
		marketprice: 268.6,
		closingprice: 275,
	  
		highprice: 275,
		lowprice: 263.1,
	  
		tradingvolume24 : 263.1,
		floatingprice:263.1,
		ratechange: 263.1,
	}
];

export default tableDataCheck;
