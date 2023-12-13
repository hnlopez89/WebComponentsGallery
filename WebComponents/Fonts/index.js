const URL_FOLDERS_FONTS= "https://fonts.gstatic.com/s/";

const FONTS = []
FONTS.push({
	family: "Roboto, Sans-Serif",
	src: `url(${URL_FOLDERS_FONTS}roboto/v30/KFOkCnqEu92Fr1Mu51xEIzIFKw.woff2) format('woff2')`,
	descriptors: {
		style: "normal",
		weight: "400",
		display: "swap",
	}
})

FONTS.push({
	family: "Montserrat",
	src: `url(${URL_FOLDERS_FONTS}montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxy7mw9c.woff2) format('woff2')`,
	descriptors: {
		style: "normal",
		weight: "400",
		display: "swap",
	}
})



async function loadFonts() {
	const promisedFonts = FONTS.map(font => new FontFace (font.family,font.src,font.descriptors).load())
    const fonts = await Promise.all(promisedFonts).then (r => r)
	fonts.forEach(font=> document.fonts.add(font))
}

loadFonts()

export const COMPONENT_FONTS = 'component-fonts'