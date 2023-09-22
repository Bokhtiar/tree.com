export const PrimaryButton = () => {
    return <button className="btn bg-primary text-white font-content px-8">
        Order now
    </button>
}

export const WatchButton = () => {
    return <>
        <button className="flex items-center gap-1">
            <span class="material-symbols-outlined text-3xl text-gray-400">
                play_circle
            </span>
            <span className="font-content ">Watch Video</span>
        </button>
    </>
}

