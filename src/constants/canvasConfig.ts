import { LockedObjectType, CollageTemplateType } from "@/types";

export const OBJECT_LOCKED: LockedObjectType = {
	lockMovementX: true,
	lockMovementY: true,
	lockRotation: true,
	lockScalingFlip: true,
	lockScalingX: true,
	lockScalingY: true,
	lockSkewingX: true,
	lockSkewingY: true,
	hasControls: false,
	selectable: false,
};

export const COLLAGE_TEMPLATES: CollageTemplateType[] = [
	{
		name: "Two landscape photos",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_8)'%3E%3Crect x='0.5' y='15.5' width='29' height='14' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='29' height='15' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_8'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH + 1,
					top: -1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "width",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH + 1,
					top: CANVAS_HEIGHT * 0.5 - 1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "width",
			},
		],
	},
	{
		name: "Three landscape photos",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_2)'%3E%3Crect x='0.5' y='9.5' width='29' height='11' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='29' height='9' stroke='white'/%3E%3Crect x='0.5' y='20.5' width='29' height='9' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_2'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT * (1 / 3) + 1,
					width: CANVAS_WIDTH + 1,
					top: -1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "width",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT * (1 / 3) + 1,
					width: CANVAS_WIDTH + 1,
					top: CANVAS_HEIGHT * (1 / 3) - 1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "width",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3a3a3a",
					height: CANVAS_HEIGHT * (1 / 3) + 1,
					width: CANVAS_WIDTH + 1,
					top: CANVAS_HEIGHT * (1 / 3) * 2 - 1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "width",
			},
		],
	},
	{
		name: "Three portrait photos",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_30)'%3E%3Crect x='9.5' y='29.5' width='29' height='11' transform='rotate(-90 9.5 29.5)' stroke='white'/%3E%3Crect x='0.5' y='29.5' width='29' height='9' transform='rotate(-90 0.5 29.5)' stroke='white'/%3E%3Crect x='20.5' y='29.5' width='29' height='9' transform='rotate(-90 20.5 29.5)' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_30'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					left: -1,
					top: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					left: CANVAS_WIDTH * (1 / 3) - 1,
					top: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3a3a3a",
					height: CANVAS_HEIGHT + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					left: CANVAS_WIDTH * (1 / 3) * 2 - 1,
					top: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
		],
	},
	{
		name: "Two portrait photos",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_12)'%3E%3Crect x='0.5' y='29.5' width='29' height='14' transform='rotate(-90 0.5 29.5)' stroke='white'/%3E%3Crect x='14.5' y='29.5' width='29' height='15' transform='rotate(-90 14.5 29.5)' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_12'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					left: -1,
					top: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					left: CANVAS_WIDTH * 0.5 - 1,
					top: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
		],
	},
	{
		name: "4 squares",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_18)'%3E%3Crect x='15.5' y='15.5' width='14' height='14' stroke='white'/%3E%3Crect x='0.5' y='15.5' width='15' height='14' stroke='white'/%3E%3Crect x='15.5' y='0.5' width='14' height='15' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='15' height='15' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_18'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: -1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: -1,
					left: CANVAS_WIDTH * 0.5 - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3a3a3a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: CANVAS_HEIGHT * 0.5 - 1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#4a4a4a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: CANVAS_HEIGHT * 0.5 - 1,
					left: CANVAS_WIDTH * 0.5 - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
		],
	},
	{
		name: "6 portrait",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_8_2)'%3E%3Crect x='20.5' y='0.5' width='9' height='15' stroke='white'/%3E%3Crect x='20.5' y='15.5' width='9' height='14' stroke='white'/%3E%3Crect x='10.5' y='0.5' width='10' height='15' stroke='white'/%3E%3Crect x='10.5' y='15.5' width='10' height='14' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='10' height='15' stroke='white'/%3E%3Crect x='0.5' y='15.5' width='10' height='14' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_8_2'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT * (1 / 2) + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					top: -1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT * (1 / 2) + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					top: -1,
					left: CANVAS_WIDTH * (1 / 3) - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3a3a3a",
					height: CANVAS_HEIGHT * (1 / 2) + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					top: -1,
					left: CANVAS_WIDTH * (2 / 3) - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},

			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1f1f1f",
					height: CANVAS_HEIGHT * (1 / 2) + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					top: CANVAS_HEIGHT * (1 / 2) - 1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2f2f2f",
					height: CANVAS_HEIGHT * (1 / 2) + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					top: CANVAS_HEIGHT * (1 / 2) - 1,
					left: CANVAS_WIDTH * (1 / 3) - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3f3f3f",
					height: CANVAS_HEIGHT * (1 / 2) + 1,
					width: CANVAS_WIDTH * (1 / 3) + 1,
					top: CANVAS_HEIGHT * (1 / 2) - 1,
					left: CANVAS_WIDTH * (2 / 3) - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
		],
	},
	{
		name: "4 squares uneven",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_24)'%3E%3Crect x='15.5' y='11.5' width='14' height='18' stroke='white'/%3E%3Crect x='0.5' y='18.5' width='15' height='11' stroke='white'/%3E%3Crect x='15.5' y='0.5' width='14' height='11' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='15' height='18' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_24'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT * 0.6 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: -1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT * 0.4 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: CANVAS_HEIGHT * 0.6 - 1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3a3a3a",
					height: CANVAS_HEIGHT * 0.4 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: -1,
					left: CANVAS_WIDTH * 0.5 - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#4a4a4a",
					height: CANVAS_HEIGHT * 0.6 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: CANVAS_HEIGHT * 0.4 - 1,
					left: CANVAS_WIDTH * 0.5 - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
		],
	},
	{
		name: "3 squares - 2 left, 1 right",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_29)'%3E%3Crect x='0.5' y='15.5' width='15' height='14' stroke='white'/%3E%3Crect x='15.5' y='0.5' width='14' height='29' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='15' height='15' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_29'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: -1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: CANVAS_HEIGHT * 0.5 - 1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3a3a3a",
					height: CANVAS_HEIGHT + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: -1,
					left: CANVAS_WIDTH * 0.5 - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
		],
	},
	{
		name: "3 squares - 2 right, 1 left",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_34)'%3E%3Crect x='14.5' y='15.5' width='15' height='14' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='14' height='29' stroke='white'/%3E%3Crect x='14.5' y='0.5' width='15' height='15' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_34'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3a3a3a",
					height: CANVAS_HEIGHT + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: -1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: -1,
					left: CANVAS_WIDTH * 0.5 - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: CANVAS_HEIGHT * 0.5 - 1,
					left: CANVAS_WIDTH * 0.5 - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
		],
	},
	{
		name: "1 landscape, 2 squares bottom",
		icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5_18)'%3E%3Crect x='15.5' y='14.5' width='14' height='15' stroke='white'/%3E%3Crect x='0.5' y='14.5' width='15' height='15' stroke='white'/%3E%3Crect x='0.5' y='0.5' width='29' height='14' stroke='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5_18'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
		config: [
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#1a1a1a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH + 1,
					top: -1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "width",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#2a2a2a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: CANVAS_HEIGHT * 0.5 - 1,
					left: -1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
			{
				rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
					fill: "#3a3a3a",
					height: CANVAS_HEIGHT * 0.5 + 1,
					width: CANVAS_WIDTH * 0.5 + 1,
					top: CANVAS_HEIGHT * 0.5 - 1,
					left: CANVAS_WIDTH * 0.5 - 1,
					absolutePositioned: true,
					hoverCursor: "pointer",
				}),
				scaleTo: "height",
			},
		],
	},
];
