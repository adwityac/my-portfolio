import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-12 animate-fadeIn">
      {/* Profile Image */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 my-6 rounded-full overflow-hidden border-2 border-orange-600 shadow-lg">
        <Image
          src="/myImage.jpg" 
          alt="Adwitya"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 128px, 160px"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="max-w-2xl text-gray-200 text-base md:text-lg leading-relaxed">
        <p>
          Hey there! I’m <span className="font-bold text-white">Adwitya</span> 👋 — a techie who
          loves building cool projects and learning new things. I’m always curious about how things work behind the scenes. When I’m not coding,
          I like watching anime or horror movies — you’ll probably catch me doing one of those! 💻🎬
        </p>
      </div>
    </div>
  );
};

export { About };
