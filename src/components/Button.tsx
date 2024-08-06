import { ReactNode } from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
	typeButton?: "primary" | "secondary";
	children: ReactNode | JSX.Element;
}

const Button = ({ typeButton = "primary", children, sx, ...rest }: ButtonProps) => {
	let color = "";
	let backgroundColor = "";
	let border = "1px solid transparent";

	switch (typeButton) {
		case "primary":
		default:
			color = "white";
			backgroundColor = "purple";
			break;

		case "secondary":
			color = "purple";
			backgroundColor = "white";
			border = "1px solid purple";
			break;
	}

	return (
		<MuiButton
			sx={{
				maxWidth: "fit-content",
				borderRadius: 0,
				transition: "all 0.3s ease",
				fontSize: "1.5rem",
				color: color,
				backgroundColor: backgroundColor,
				border: border,
				":hover": { color: color, backgroundColor: backgroundColor, filter: "brightness(0.7)" },
				":active": { filter: "brightness(0.5)" },
				...sx,
			}}
			{...rest}
		>
			{children}
		</MuiButton>
	);
};

export default Button;
