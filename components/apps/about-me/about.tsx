import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;

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
      <div className="mb-6 mt-4 px-1 text-lg md:text-2xl">
        <div>
          Hi there, I&apos;m <span className="font-bold">Adwitya! 👋</span>
        </div>
        <div className="font-normal">
          A passionate <span className="font-bold text-orange-600">Techie 💻✨</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed text-gray-200 w-5/6 md:w-3/4">
        I’m a <span className="font-medium">tech enthusiast</span> from India, driven by a love for
        clean, concise code, and always exploring new technologies to expand my skill set. I am
        committed to continuously enhancing my skills to effectively solve{' '}
        <span className="text-orange-600">real-world problems through technology</span>. Here are my
        key specializations:
      </p>

      {/* Key Points List */}
      <ul className="mt-4 w-5/6 md:w-3/4 text-sm md:text-base leading-relaxed tracking-tight list-none space-y-3 text-gray-200">
        <li>
          <span className="text-orange-600 font-semibold">⚙️ Continuous Improvement:</span>{' '}
          Committed to learning and adapting to new technologies.
        </li>
        <li>
          <span className="text-orange-600 font-semibold">💡 Passionate about Innovation:</span>{' '}
          Enjoy working with the latest tools to develop innovative solutions.
        </li>
        <li>
          <span className="text-orange-600 font-semibold">🧩 Problem Solver at Heart:</span>{' '}
          Embrace challenges that push me to grow and improve.
        </li>
      </ul>
    </div>
  );
};

export { About };
