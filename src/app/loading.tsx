import LoadingSpinner from "@/components/ui/svg/LoadingSpinner";

function Loading({ className }: { className?: string }) {
	return <div className={`h-screen w-full flex justify-center items-center ${className && className}`}><LoadingSpinner /></div>;
}

export default Loading;
