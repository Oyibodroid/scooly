
const SearchBox = (props) => {
  return (
    <div>
      <form action="">
        <div className="">
          <div>
            <input
              type="text"
              placeholder={props.placeholder}
              className="rounded-lg max-w-[40rem] px-4 py-2 border outline-4 focus:outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
