import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:space-x-8 mt-8 px-4 md:px-12">
      {/* Left Section - Image */}
      <div className="relative w-44 h-56 md:w-56 md:h-72 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border border-orange-600">
        <Image
          src="/myImage.jpg"
          alt="Adwitya"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 176px, 224px"
          priority
        />
      </div>

      {/* Right Section - Text */}
      <div className="text-center md:text-left mt-6 md:mt-0 max-w-xl">
        <div className="mb-4 text-lg md:text-2xl leading-snug">
          <div>
            Hi there, I&apos;m <span className="font-bold">Adwitya! 👋</span>
          </div>
          <div>
            A passionate <span className="font-bold text-orange-600">Techie 💻✨</span>
          </div>
        </div>

        <p className="text-sm md:text-base leading-relaxed text-gray-200">
          I’m a <span className="font-medium">tech enthusiast</span> from India driven by a love for
          clean, concise code, and always exploring new technologies to expand my skill set. I am
          committed to continuously enhancing my skills to effectively solve{' '}
          <span className="text-orange-600">real-world problems through technology</span>. Here are
          my key specializations:
        </p>

        <ul className="mt-3 list-disc list-inside text-sm md:text-base text-gray-200 space-y-1">
          <li>
            <span className="text-orange-600">Continuous Improvement:</span> Committed to learning
            and adapting to new technologies.
          </li>
          <li>
            <span className="text-orange-600">Passionate about Innovation:</span> Enjoy working with
            the latest tools to develop innovative solutions.
          </li>
          <li>
            <span className="text-orange-600">Problem Solver at Heart:</span> Embrace challenges
            that push me to grow and improve.
          </li>
        </ul>
      </div>
    </div>
  );
};

export { About };