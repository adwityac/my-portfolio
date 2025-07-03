const Skeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="flex w-full animate-pulse flex-col px-4" key={index}>
          <div className="my-2 w-full rounded border border-orange-600 border-opacity-30 px-2 py-1">
            <div className="flex flex-wrap items-center justify-between">
              <div className="mr-2 h-4 w-1/3 rounded bg-gray-400"></div>
            </div>
            <div className="mt-1 h-4 w-3/4 rounded bg-gray-400"></div>
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="h-2 w-1/4 rounded bg-gray-400"></div>
              <div className="h-2 w-1/5 rounded bg-gray-400"></div>
              <div className="h-2 w-1/6 rounded bg-gray-400"></div>
              <div className="h-2 w-1/4 rounded bg-gray-400"></div>
              <div className="h-2 w-1/5 rounded bg-gray-400"></div>
              <div className="h-2 w-1/6 rounded bg-gray-400"></div>
              <div className="h-2 w-1/4 rounded bg-gray-400"></div>
              <div className="h-2 w-1/5 rounded bg-gray-400"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { Skeleton };
