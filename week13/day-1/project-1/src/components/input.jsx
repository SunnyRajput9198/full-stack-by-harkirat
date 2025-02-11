export const Input = ({  onClick,type,placeholder }) => {
    return (
      <span
        onclick={onClick}
        className={ "p-8 text-4xl px-2 py-2 text-white cursor-pointer rounded-3xl  bg-green-400 "} 
      >
        <input type={type} placeholder={placeholder}
        className="bg-blue-500 outline-none" />
        
      </span>
      
    );
  };