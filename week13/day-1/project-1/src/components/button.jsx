export const Button = ({ disabled, children, onClick }) => {
  return (
   
    <span
      onclick={onClick}
    //   px is padding x means horizontal padding
    //   py is padding y means vertical padding
    //   text-white is text color white
    //    cursor-pointer is cursor pointer
    // rounded-3xl means border radius of 3xl
      className={` px-32 py-8 text-white cursor-pointer rounded-3xl ${disabled ? "bg-blue-200" : "bg-green-400"} `}
    >
      {children}
    </span>
    
  );
};
