const ProgressBar = ({
    progress = 10,
    color = "bg-emerald-500",
}) => {
    const clampedProgress = Math.min(100, Math.max(0, progress));

    return (
        <div className="w-full px-5 py-3">
            <div
                className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700"
                role="progressbar"
                aria-label="Quiz progress"
                aria-valuenow={clampedProgress}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className={`h-full rounded-full transition-[width] duration-500 ease-in-out ${color}`}
                    style={{ width: `${clampedProgress}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
