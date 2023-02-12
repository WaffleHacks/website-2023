const Modal = ({ className, children }: any) => {
  return (
    <div
      className={'fixed left-0 top-0 w-screen h-screen flex justify-center items-center ' + (className || '')}
      style={{ backdropFilter: 'blur(4px)', background: 'rgb(0, 0, 0, 0.2)', zIndex: 99999 }}
    >
      {children}
    </div>
  );
};

export default Modal;
