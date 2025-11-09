import Image from 'next/image';

const About = () => {
  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center px-4 text-center md:px-12">
      {/* Profile Image */}
      <div className="relative my-6 h-32 w-32 overflow-hidden rounded-full border-2 border-orange-600 shadow-lg md:h-40 md:w-40">
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
      <div className="max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
        <p>
          Hey there! I’m <span className="font-bold text-white">Adwitya</span>{' '}
          👋 — a techie who loves building cool projects and learning new
          things. I’m always curious about how things work behind the scenes.
          When I’m not coding, I like watching anime or horror movies — you’ll
          probably catch me doing one of those! 💻🎬
        </p>
      </div>
    </div>
  );
};

export { About };
