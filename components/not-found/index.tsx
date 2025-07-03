const NotFound = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-primary-600 mb-4 font-caveat text-3xl font-extrabold tracking-tight text-orange-600 lg:text-5xl">
            Projects Not Found
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            You haven&apos;t added any projects, or the list is empty.
          </p>
        </div>
      </div>
    </section>
  );
};

export { NotFound };
