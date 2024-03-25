import wave from '../../../public/assets/wave.svg'

const Banner = () => {
    return (
        <section className="relative min-h-[calc(100vh-124px)] text-center flex flex-col justify-center items-center space-y-6">
            <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">ByteBlaze</span></h1>
            <p className="max-w-[512px] mx-auto">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
            <div className="space-x-4">
                <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                    <span className="relative text-black group-hover:text-white">Read Blogs</span>
                </a>
                <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                    <span className="relative text-black group-hover:text-white">BooksMarks</span>
                </a>
            </div>
            <img className='absolute w-full bottom-0 left-0' src={wave} alt="" />
        </section>
    );
};

export default Banner;