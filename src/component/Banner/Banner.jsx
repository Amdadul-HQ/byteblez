

const Banner = () => {
    return (
        <section className="min-h-[calc(100vh-124px)] text-center flex flex-col justify-center items-center space-y-6">
            <h1 className="text-5xl font-bold">Welcome to <span>ByteBlaze</span></h1>
            <p className="max-w-[512px] mx-auto">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
            <div>
            <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Button Text</span>
            </a>
            </div>
        </section>
    );
};

export default Banner;