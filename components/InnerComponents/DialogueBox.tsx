import { useEffect } from 'react';
import { JsxElement } from 'typescript';

export interface ButtonDesc {
  text: JSX.Element;
  classes: string;
  linkTo: number;
}

export interface DialogueBoxProps {
  topimg: string;
  imgAlt: string;
  text: JSX.Element;
  buttonOptions: ButtonDesc[];
  toNext?: (box_num: number) => void;
  onStart?: () => void;
}

const DialogueBox = ({ topimg, imgAlt, text, buttonOptions, toNext, onStart }: DialogueBoxProps) => {
  useEffect(() => {
    if (onStart) {
      onStart();
    }
  }, [onStart]);
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <img src={topimg} className="w-4/6" alt={imgAlt} />

      <div>
        {text}
        {/* buttons */}
        <div className="flex mt-4 justify-center gap-4">
          {buttonOptions.map((b: ButtonDesc, ind: number) => (
            <button
              key={'button-ind' + ind}
              onClick={() => {
                if (toNext) toNext(b.linkTo);
              }}
              className={'border-2 border-black p-2 ' + b.classes}
            >
              {b.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DialogueBox;
