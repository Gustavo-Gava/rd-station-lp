import * as S from "./styles";

export const VisualGraphsDesktop = () => {
	return (
		<>
			<S.GraphsLeftDesktop
				src="/svg/graphs_left_bottom.svg"
				width={1120}
				height={520}
				alt="visual lines"
			/>

			<S.GraphsRightDesktop
				src="/svg/graphs_right_top.svg"
				width={1120}
				height={520}
				alt="visual lines"
			/>
		</>
	);
};
