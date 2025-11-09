import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;

  return (
    <div className="mt-8 flex flex-col items-center justify-center px-4 md:flex-row md:items-start md:space-x-8 md:px-12">
      {/* Left Section - Image */}
      <div className="relative h-56 w-44 flex-shrink-0 overflow-hidden rounded-2xl border border-orange-600 shadow-lg md:h-72 md:w-56">
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
      <div className="mt-6 max-w-xl text-center md:mt-0 md:text-left">
        <div className="mb-4 text-lg leading-snug md:text-2xl">
          <div>
            Hi there, I&apos;m <span className="font-bold">Adwitya! 👋</span>
          </div>
          <div>
            A passionate{' '}
            <span className="font-bold text-orange-600">Techie 💻✨</span>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-200 md:text-base">
          I’m a <span className="font-medium">tech enthusiast</span> from India
          driven by a love for clean, concise code, and always exploring new
          technologies to expand my skill set. I am committed to continuously
          enhancing my skills to effectively solve{' '}
          <span className="text-orange-600">
            real-world problems through technology
          </span>
          . Here are my key specializations:
        </p>

        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-200 md:text-base">
          <li>
            <span className="text-orange-600">Continuous Improvement:</span>{' '}
            Committed to learning and adapting to new technologies.
          </li>
          <li>
            <span className="text-orange-600">
              Passionate about Innovation:
            </span>{' '}
            Enjoy working with the latest tools to develop innovative solutions.
          </li>
          <li>
            <span className="text-orange-600">Problem Solver at Heart:</span>{' '}
            Embrace challenges that push me to grow and improve.
          </li>
        </ul>
      </div>
    </div>
  );
};

export { About };
