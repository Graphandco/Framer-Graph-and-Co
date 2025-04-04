import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const SectionLegend = ({ text }) => {
	return (
		<div className="flex items-center uppercase">
			<MdOutlineSubdirectoryArrowRight className="text-primary" />
			<div>{text}</div>
		</div>
	);
};

export default SectionLegend;
