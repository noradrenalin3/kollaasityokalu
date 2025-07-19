import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig";
import {
	useTemplateAction,
	useCanvasAction,
	useRatioAction,
} from "@/hooks/useReduxAction";
import { useCanvasConfigData } from "@/hooks/useReduxData";
import clsx from "clsx";
import toast from "react-hot-toast";

const OrientationButton = ({
	direction,
	active,
	disabled,
	onClick,
}: {
	direction: string;
	active: boolean;
	disabled: boolean;
	onClick: () => void;
}) => {
	return (
		<button
			key={`ratio-${direction}`}
			aria-label={`suunta ${direction}`}
			className={clsx(
				"cursor-pointer rounded transition-colors",
				"flex flex-col items-center justify-center text-center",
				"w-20 py-0.5 sm:w-1/2 sm:py-1 lg:w-20",
				"disabled:cursor-not-allowed disabled:bg-neutral-700/50 disabled:text-neutral-400",
				{
					"bg-indigo-600/80": active,
					"hover:bg-neutral-800": !active && !disabled,
				}
			)}
			onClick={onClick}
			disabled={disabled}
		>
			<span className="text-center">{direction}</span>
		</button>
	);
};

export default function TabTemplate() {
	const { activeRatio, activeTemplateIndex } = useCanvasConfigData();
	const { changeRatio } = useRatioAction();
	const { changeTemplate } = useTemplateAction();
	const { setAddBorderAction } = useCanvasAction();

	const setOrientation = (val: "landscape" | "portrait") => {
		const { width, height } = activeRatio;
		const current =
			width === height ? "square" : width > height ? "landscape" : "portrait";
		if (val == current) {
			return;
		}
		const newRatio = {
			...activeRatio,
			width: height,
			height: width,
		};
		changeRatio(newRatio);
		setAddBorderAction(false);
		toast.success(`Käännetty`, {
			duration: 650,
			id: "toast-ratio",
		});
	};
	return (
		<div className="flex w-full flex-col overflow-x-hidden">
			<div className="mb-2 flex items-center gap-1 border-b border-neutral-800 pb-2 text-white max-sm:w-full sm:flex-wrap sm:px-1 sm:pb-3 sm:pt-1 lg:flex-nowrap">
				<h3 className="text-left font-medium max-sm:ml-1 sm:w-full">Suunta</h3>
				<div className="flex gap-1 rounded-md bg-neutral-800 p-0.5 max-sm:ml-auto sm:max-lg:w-full">
					<OrientationButton
						direction="Vaaka"
						active={activeRatio.width > activeRatio.height}
						disabled={activeRatio.width === activeRatio.height}
						onClick={() => setOrientation("landscape")}
					/>
					<OrientationButton
						direction="Pysty"
						active={activeRatio.width < activeRatio.height}
						disabled={activeRatio.width === activeRatio.height}
						onClick={() => setOrientation("portrait")}
					/>
				</div>
			</div>
			<div className="flex max-sm:overflow-x-auto">
				<div className="flex flex-nowrap place-items-start text-white sm:flex-wrap">
					{COLLAGE_TEMPLATES.map((template, index) => {
						return (
							<button
								key={`template-${index}`}
								aria-label={`vaihda kollaasi ${template.name}`}
								className={clsx(
									"cursor-pointer rounded transition-colors",
									"flex flex-col items-center justify-center text-center",
									"mx-1 h-16 w-16 sm:h-20",
									"md:w-[calc(50%-8px)]",
									"sm:mb-2 sm:w-full",
									{
										"bg-neutral-800": index === activeTemplateIndex,
										"hover:bg-neutral-800": index !== activeTemplateIndex,
									}
								)}
								onClick={() => {
									changeTemplate(index);
									setAddBorderAction(false);
									toast.success(`Kollaasi muutettu`, {
										duration: 650,
										id: "toast-template",
									});
								}}
							>
								{<img src={template.icon} alt={template.name} />}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}
