export const title = (t: string): string => {
	if (t) {
		let e, n
		for (e = t?.toString().toLowerCase().trim().split(' '), n = 0; n < e.length; n++) {
			const r = e[n]; r[0] && (e[n] = r[0].toUpperCase() + r.slice(1))
		}
		return e.join(' ')
	}
  return t
}