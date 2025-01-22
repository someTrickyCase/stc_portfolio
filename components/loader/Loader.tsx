export default function Loader() {
    return (
        <div
            id='loader'
            className='fullscreen !absolute top-0 left-0 center-all z-50 bg-[#000] transition-all duration-[2000ms] ease opacity-100'>
            <h2 className='absolute text-[48px] lg:text-[72px]  font-extrabold uppercase roboto tracking-normal !text-[#49361930] animate-pulse'>
                Please wait
            </h2>
            <div className='absolute h-[600px] w-[600px] border-6 border-[var(--brown)] rounded-full border-l-[1px] center-all animate-spin-slow'>
                <div className='h-48 w-48 border-6 border-[var(--brown)] rounded-full border-l-[1px] center-all animate-spin'>
                    <div className='h-36 w-36 border-6 border-[var(--brown)] rounded-full border-b-[1px] center-all animate-spin-left'>
                        <div className='h-24 w-24 border-1 border-transparent border-t-[var(--brown)] rounded-full border-t-[1px] animate-spin-slow' />
                    </div>
                </div>
            </div>
        </div>
    );
}
