const locales = 'en-US'

const options = {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
}

export const usdFormatter = new Intl.NumberFormat(locales, options)