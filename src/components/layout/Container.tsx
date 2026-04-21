const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-12">
      {children}
    </div>
  );
};

export default Container;