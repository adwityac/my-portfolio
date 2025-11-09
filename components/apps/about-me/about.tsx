import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center md:px-12">
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
      <div className="mb-6 mt-4 px-1 text-lg md:text-2xl">
        <div>
          Hi there, I&apos;m <span className="font-bold">Adwitya! 👋</span>
        </div>
        <div className="font-normal">
          A passionate{' '}
          <span className="font-bold text-orange-600">Techie 💻✨</span>
        </div>
      </div>

      <ul className="emoji-list mt-4 w-5/6 text-sm leading-tight tracking-tight md:w-3/4 md:text-base">
        <li>
          I’m a <span className="font-medium">tech enthusiast</span> from India{' '}
          <span className="font-medium">
            driven by a love for clean, concise code, and always exploring new
            technologies to expand my skill set.
          </span>{' '}
          I am committed to continuously enhancing my skills to effectively
          solve{' '}
          <span className="text-orange-600">
            real-world problems through technology
          </span>
          . Here are my key specializations:
          <ul className="mt-2 list-inside list-disc">
            <li>
              <span className="text-orange-600">Continuous Improvement:</span>{' '}
              Committed to learning and adapting to new technologies.
            </li>
            <li>
              <span className="text-orange-600">
                Passionate about Innovation:
              </span>{' '}
              Enjoy working with the latest tools to develop innovative
              solutions.
            </li>
            <li>
              <span className="text-orange-600">Problem Solver at Heart:</span>{' '}
              Embrace challenges that push me to grow and improve.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export { About };
