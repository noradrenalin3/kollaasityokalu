import { AspectRatioType } from "@/types";

export function getAspectRatio(): AspectRatioType {
	const urlParams = new URLSearchParams(window.location.search);
	const pSize = urlParams.get("pSize");
	if (!pSize) {
		return { width: 1, height: 1 };
	}

	const size = parseSize(pSize);
	if (!size) {
		return { width: 1, height: 1 };
	}
	const ratio: AspectRatioType = {
		width: size.width,
		height: size.height,
	};
	return ratio;
}

function parseSize(size: string) {
	const split = size.split("x");
	if (split.length !== 2) {
		return null;
	}
	const parsed = split.map((s) => Number(s));
	if (parsed.some((n) => isNaN(n))) {
		return null;
	}
	return {
		width: parsed[0],
		height: parsed[1],
	};
}
