'use client';

import { useState } from 'react';
import cls from 'classnames';

import { ActiveTab } from '@/interfaces/about-me';
import { Sidebar } from './sidebar';
import { About } from './about';
import { Education } from './education';
import { Experience } from './experience';
import { Resume } from './resume';
import { Projects } from './projects';
import { Skills } from './skills';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('about');
  const [navbar, setNavbar] = useState<boolean>(false);

  const showNavBar = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <div className="relative flex h-full w-full select-none bg-gray-950 text-white">
      <div className="hidden w-1/4 flex-col overflow-y-auto border-r border-black bg-gray-900 text-sm md:flex md:w-1/5">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div
        onClick={showNavBar}
        className="absolute left-1 top-1 flex h-6 w-6 flex-col items-center justify-center rounded bg-gray-900 md:hidden"
      >
        <div className="w-3.5 border-t border-white"></div>
        <div
          className="w-3.5 border-t border-white"
          style={{ marginTop: '2pt', marginBottom: '2pt' }}
        ></div>
        <div className="w-3.5 border-t border-white"></div>
        <div
          className={cls(
            'absolute left-0 top-full mt-1 rounded-sm border border-black border-opacity-20 bg-gray-900 px-1 py-0.5 text-xs shadow md:hidden',
            navbar ? ' animateShow visible z-30 ' : ' invisible ',
          )}
        >
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
      <div className=" flex w-2/4 flex-grow flex-col  justify-start overflow-y-auto bg-gray-950 md:w-3/5">
        {activeTab === 'about' && <About />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'resume' && <Resume />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'skills' && <Skills />}
      </div>
    </div>
  );
};

export { AboutMe };
