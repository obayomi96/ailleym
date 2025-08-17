import { forwardRef, useState } from "react";
import clsx from "clsx";

export interface SearchFieldProps {
  name?: string;
  setValue?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  inputClass?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent) => void;
  className?: string;
  placeholder?: string;
}

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      value = "",
      onChange = () => {},
      setValue,
      name,
      className,
      inputClass,
      placeholder,
      ...rest
    },
    ref
  ) => {
    const [inputFocused, setInputFocued] = useState(false);

    return (
      <div className={`${className}`}>
        <main
          onMouseDown={() => setInputFocued(true)}
          onMouseOut={() => setInputFocued(false)}
          className={clsx({
            "w-full rounded-[0.25rem] py-[0.6rem] px-1 flex items-center justify-between gap-[0.5rem] outline-none ring-0 h-full":
              true,
            "border-[#BBDFF2]": inputFocused,
          })}
        >
          <div className="w-full h-full flex">
            <div className="w-[2rem] h-full">
              <img
                src="../../src/assets/tiny_search.svg"
                alt="search icon"
                className="w-5 h-5 p-2 rounded-md"
              />
            </div>
            <input
              {...rest}
              type={"text"}
              ref={ref}
              name={name}
              onChange={onChange}
              value={value}
              autoComplete="off"
              placeholder={placeholder}
              className={`w-full h-full placeholder-[#8f8d8d] placeholder:text-opacity-[65%] bg-transparent outline-0 !pr-3 text-[0.875rem] leading-normal font-normal ring-0 ${inputClass}`}
            />
            {value !== "" && (
              <img
                onClick={setValue}
                alt=""
                src="../../src/assets/close_circle.svg"
                className="mr-2"
              />
            )}
          </div>
        </main>
      </div>
    );
  }
);

export default SearchField;
