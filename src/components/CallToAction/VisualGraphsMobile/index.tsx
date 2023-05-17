import * as S from "./styles";

export const VisualGraphsMobile = () => {
	return (
		<>
			<S.GraphsLeftMobile
				src="/svg/graphs_left_bottom.svg"
				width={100}
				height={100}
				alt="visual lines"
			/>

			<S.GraphsRightMobile
				src="/svg/graphs_right_top.svg"
				width={100}
				height={100}
				alt="visual lines"
			/>
		</>
	);
};
