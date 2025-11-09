import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;
  return (
    <div className="my-6 flex items-center justify-center">
      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-orange-600 shadow-lg bg-[#0b0b0b]">
        <Image
          src="/myImage.jpg"
          alt="Adwitya"
          fill
          className="object-contain object-top scale-110"
          sizes="(max-width: 768px) 144px, 176px"
          priority
        />
      </div>
      <div className="mb-6 mt-4 px-1 text-center text-lg md:mt-8 md:text-2xl">
        <div>
          Hi there, I&apos;m <span className="font-bold">Adwitya! 👋</span>
        </div>
        <div className="ml-1 font-normal">
          A passionate{' '}
          <span className="font-bold text-orange-600">Techie 💻✨</span>{' '}
        </div>
      </div>
      <ul className="emoji-list mt-4 w-5/6 text-sm leading-tight tracking-tight md:w-3/4 md:text-base">
        <li className="list-alumnus">
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
