import { useEffect, useRef } from 'react';
const Modal = ({ className, children }: any) => {
  const ref: any = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // ref.current.showModal();
      console.log(ref.current);
    }
  }, []);

  return (
    <dialog
      ref={ref}
      className={'fixed left-0 top-0 w-screen h-screen flex justify-center items-center ' + (className || '')}
      style={{ backdropFilter: 'blur(4px)', background: 'rgb(0, 0, 0, 0.2)', zIndex: 99999 }}
    >
      {children}
    </dialog>
  );
};

export default Modal;
