function ArticleCardLoading() {
  return (
    <div className="p-[1rem] w-full md:max-w-[32.5rem] rounded-xl shadow-dark">
      <div className="w-full h-[10rem] lg:h-[17rem] loading" />

      <div className="mt-4 mx-auto w-[85%] h-[1.25rem] loading" />

      <div className="mt-5 mx-auto w-[95%] h-[.8rem] loading" />
      <div className="mt-3 mx-auto w-[95%] h-[.8rem] loading" />
      <div className="mt-3 mx-auto w-[75%] h-[.8rem] loading" />

      <span className="block mt-4 w-full h-[1px] bg-secondary opacity-25" />

      <div className="mt-3 mx-auto w-[10rem] h-[1.75rem] loading" />
    </div>
  );
}

export default ArticleCardLoading;
