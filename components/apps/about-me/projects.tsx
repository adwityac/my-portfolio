'use client';

import { useEffect, useState } from 'react';

import { Skeleton } from '@/components/skeleton';
import { getRepos } from '@/services/github';
import { NotFound } from '@/components/not-found';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRequest = async () => {
    try {
      setIsLoading(true);
      const data = await getRepos();
      setProjects(data);
    } catch (error) {
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div
      className="overflow-y-auto p-5"
      style={{
        scrollbarColor: '#cd4d1f #ef470a',
        scrollbarWidth: 'thin',
      }}
    >
      <div className="mb-10 text-center text-2xl font-bold text-orange-600 md:text-3xl">
        Projects
      </div>
      {isLoading ? (
        <Skeleton />
      ) : projects?.length > 0 ? (
        projects?.map((item: any) => (
          <a
            key={item?.id}
            href={item.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="my-2 w-full cursor-pointer rounded border border-orange-600 border-opacity-10 px-2 py-1 hover:bg-orange-600 hover:bg-opacity-10">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className=" mr-2 text-base md:text-lg">
                    {item.name.toLowerCase()}
                  </div>
                  <iframe
                    src={`https://ghbtns.com/github-btn.html?user=adwityac&repo=${item.name}&type=star&count=true`}
                    frameBorder="0"
                    scrolling="0"
                    width="150"
                    height="20"
                    title={item.name.toLowerCase() + '-star'}
                  ></iframe>
                </div>
                <div className="text-sm font-light text-gray-300">
                  {item.created_at}
                </div>
              </div>
              {item.description ? (
                <div className="mt-1 text-sm font-light leading-tight tracking-normal text-gray-100">
                  {item.description}
                </div>
              ) : null}
              {/* Topics section removed */}
            </div>
          </a>
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export { Projects };
