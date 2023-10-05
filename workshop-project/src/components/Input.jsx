import React, { forwardRef } from "react";

// Utilisez React.forwardRef() pour créer un composant de fonction avec une référence
const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className="rounded-[2rem] h-8 md:h-10 bg-zinc-200"
      {...props}
    />
  );
});

export default Input;