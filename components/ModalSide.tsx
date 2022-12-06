import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { BiX } from 'react-icons/bi';

import ClickableIcon from './ClickableIcon';

interface ModalSideProps {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalSide = ({ children, open, setOpen }: ModalSideProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-20"
          variants={{
            enter: { opacity: 1 },
            leave: { opacity: 0 },
          }}
          animate="enter"
          initial="leave"
          exit="leave"
          role="button"
          tabIndex={0}
          onClick={(e) => {
            if (modalRef.current?.contains(e.target as HTMLElement)) {
              return;
            }

            setOpen(false);
          }}
        >
          <motion.div
            className="w-48 p-4 fixed right-0 top-0 bg-white h-screen text-left"
            ref={modalRef}
            variants={{
              enter: { opacity: 1, x: 0 },
              leave: { opacity: 0, x: '100%' },
            }}
            animate="enter"
            initial="leave"
            exit="leave"
          >
            <ClickableIcon className="float-right" onClick={() => setOpen(false)}>
              <BiX />
            </ClickableIcon>
            <div className="flex flex-col gap-4 text-xl">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalSide;
