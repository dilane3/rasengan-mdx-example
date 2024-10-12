type Props = {
	children: React.ReactNode;
	type?: "success" | "error" | "info" | "tip";
};

export default function AlertBox({ children }: Props) {
	return (
		<div
			className={
				"w-full rounded-lg border-2 px-4 py-2 flex overflow-hidden my-4 border-primary bg-primary/5"
			}
		>
			<div className='flex flex-col justify-center'>{children}</div>
		</div>
	);
}
