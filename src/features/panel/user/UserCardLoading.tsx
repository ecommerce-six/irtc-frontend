function UserCardLoading() {
  return (
    <div className="pb-5 flex items-center gap-4 justify-between flex-wrap border-b border-dim-secondary">
      <div className="mt-3 w-14 h-14 loading" />

      <div className="mt-3 w-[6rem] lg:w-[8rem] h-[1rem] loading" />

      <div className="mt-3 w-[5rem] lg:w-[8rem] h-[1rem] loading" />

      <div className="mt-3 w-[8rem] lg:w-[14rem] h-[1rem] loading" />

      <div className="mt-3 w-[4rem] lg:w-[5rem] h-[1.5rem] loading" />

      <div className="mt-3 w-[6rem] lg:w-[8rem] h-[2.75rem] loading" />
    </div>
  );
}
export default UserCardLoading;
