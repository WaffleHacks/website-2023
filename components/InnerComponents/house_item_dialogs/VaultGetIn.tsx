import React from 'react';

interface VaultGetInProps {
  onCorrect: () => void;
}

const VaultGetIn = ({ onCorrect }: VaultGetInProps) => {
  function getVaultInput() {
    let els: any = document.querySelectorAll('.vault .vault-input');
    let total = '';
    for (let i = 0; i < els.length; i++) {
      total += els[i].value;
    }
    let wanted = '181112120102040301052005';
    if (total === wanted) {
      onCorrect();
    }
  }

  function focusNext(e: any) {
    let els: any = document.querySelectorAll('.vault .vault-input');
    if (e.target.value.length < 1) return;
    for (let i = 0; i < els.length; i++) {
      if (els[i] === e.target && i < els.length - 1) {
        els[i + 1].focus();
        break;
      }
    }
  }

  return (
    <div>
      <h1 className="text-center text-white text-2xl font-bold">VAULT</h1>
      <br />
      <div className="vault">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="mb-2 flex text-white gap-2 items-center">
            <div className="border-white border-b-2 py-1">
              <input
                type="number"
                min={0}
                max={9}
                onInput={focusNext}
                className="vault-input border-white border-2 rounded-md bg-transparent text-center w-7"
              />
            </div>
            <div className="border-white border-b-2 py-1">
              <input
                type="number"
                min={0}
                max={9}
                onInput={focusNext}
                className="vault-input border-white border-2 rounded-md bg-transparent text-center w-7"
              />
            </div>
            <span>/</span>
            <div className="border-white border-b-2 py-1">
              <input
                type="number"
                min={0}
                max={9}
                onInput={focusNext}
                className="vault-input border-white border-2 rounded-md bg-transparent text-center w-7"
              />
            </div>
            <div className="border-white border-b-2 py-1">
              <input
                type="number"
                min={0}
                max={9}
                onInput={focusNext}
                className="vault-input border-white border-2 rounded-md bg-transparent text-center w-7"
              />
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="w-full text-center">
        <button
          onClick={getVaultInput}
          className="text-center bg-white/25 hover:bg-white/50 text-white py-2 px-4 rounded-md"
        >
          UNLOCK
        </button>
      </div>
    </div>
  );
};

export default VaultGetIn;
