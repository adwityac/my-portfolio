import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4 w-20  md:w-28">
        <Image
          src="/myImage.jpg"
          alt="Adwitya"
          className="w-full rounded-full"
          height={300}
          width={500}
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
          </span>
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
              solutions .
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
