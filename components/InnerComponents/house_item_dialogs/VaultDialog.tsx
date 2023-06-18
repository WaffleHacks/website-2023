import React, { useEffect, useRef, useState } from 'react';

import VaultGetIn from './VaultGetIn';

interface VaultDialogProps {
  on: boolean;
  setOff: () => void;
}

const VaultDialog = ({ on, setOff }: VaultDialogProps) => {
  const vaultDialog: any = useRef(null);

  const [correct, setCorrect] = useState(false);
  const [timeFinished, setTiemFinished] = useState('');
  var canvas: any = useRef(null);
  var sparks: any = useRef([]);
  var timeSinceComplete = useRef(0);

  function triggerPamphlet(on: boolean) {
    if (vaultDialog.current) {
      if (on && !vaultDialog.current.open) {
        vaultDialog.current.showModal();
      } else if (!on && vaultDialog.current.open) {
        vaultDialog.current.close();
        setOff();
      }
    }
  }

  useEffect(() => {
    if (on) {
      triggerPamphlet(true);
    }
  }, [on]);

  useEffect(() => {
    if (correct) {
      if (timeSinceComplete.current === 0) timeSinceComplete.current = Date.now();
      // requestAnimationFrame(showSparks);
      let timeCompleted = new Date(timeSinceComplete.current);
      let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      let minutes = timeCompleted.getUTCMinutes() + '';
      if (minutes.length == 1) minutes = '0' + minutes;
      let seconds = timeCompleted.getUTCSeconds() + '';
      if (seconds.length == 1) seconds = '0' + seconds;
      let timeCompletedString = `${weekdays[timeCompleted.getUTCDay()]}, ${
        months[timeCompleted.getUTCMonth()]
      } ${timeCompleted.getUTCDate()} at ${timeCompleted.getUTCHours()}:${minutes}:${seconds} UTC`;
      setTiemFinished(timeCompletedString);

      return () => {
        setCorrect(false);
        setTimeout(() => {
          console.log('resetting');
          setCorrect(true);
          sparks.current = [];
          timeSinceComplete.current = 0;
        }, 100);
      };
    }
  }, [correct]);

  function showSparks() {
    if (!canvas.current) return;
    if (Math.random() < 0.25) {
      //                         angle,        radius (in vw),  opacity (0.75-1),     width (5-7),     speed (2-3)
      sparks.current.push([Math.random() * 2 * Math.PI, 0, 0, Math.random() * 2 + 3, Math.random() * 0.5 + 1.5]);
    }
    // the height of all the sparks is 15
    let rid = [];
    let ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    for (let i = 0; i < sparks.current.length; i++) {
      let [angle, radius, opacity, width, speed] = sparks.current[i];
      radius = (canvas.current.width * radius) / 100;

      // x = r cos theta
      // y = r sin theta
      let x = radius * Math.cos(angle) + canvas.current.width / 2;
      let y = radius * Math.sin(angle) + canvas.current.height / 2;
      ctx.fillStyle = `rgba(232, 105, 33, ${opacity})`;
      ctx.beginPath();
      ctx.ellipse(x, y, 0.08 * canvas.current.width, width, angle, 0, 2 * Math.PI);
      ctx.fill();

      sparks.current[i][1] += speed; // decrease radius
      sparks.current[i][4] += 0.01; // increase speed
      if (sparks.current[i][1] >= 100) rid.push(i); // see if the spark should be removed
      sparks.current[i][2] += 0.03; // decrease opacity
      sparks.current[i][3] = Math.max(sparks.current[i][3] - 0.03, 0); // decrease width
    }
    for (let i = rid.length - 1; i >= 0; i--) {
      sparks.current.splice(rid[i], 1);
    }

    // let timeCompleted = new Date(timeSinceComplete.current);
    // let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // let timeCompletedString = `${weekdays[timeCompleted.getUTCDay()]}, ${months[timeCompleted.getUTCMonth()]} ${timeCompleted.getUTCDate()} at ${timeCompleted.getUTCHours()}:${timeCompleted.getUTCMinutes()}:${timeCompleted.getUTCSeconds()} UTC`;
    // ctx.fillText(`Completed on ${timeCompletedString}`, canvas.current.width/2, canvas.current.height/2 + 95);
    // ctx.fillText(`Take a screenshot and DM it`, canvas.current.width/2, canvas.current.height/2 + 160);
    // ctx.fillText(`to an organizer on Discord!`, canvas.current.width/2, canvas.current.height/2 + 210);

    if (correct) {
      requestAnimationFrame(showSparks);
    }
  }

  return (
    <dialog ref={vaultDialog} className="text-left bg-gray-900 rounded-lg px-12 pb-8">
      <button onClick={() => triggerPamphlet(false)} className="absolute top-4 left-4 z-10">
        <img className="w-6" src="/images/scav/backarrow white.svg" alt="" />
      </button>
      <br />
      {correct ? (
        <div className="text-white text-center">
          <canvas id="complete-sparks" ref={canvas} className="absolute top-0 left-0 z-0 w-full h-full hidden"></canvas>
          <h1 className="text-2xl font-bold">YOU FOUND THE RECIPE!</h1>
          <br />
          <span>Finished on {timeFinished}</span>
          <br />
          <span>Take a screenshot and DM it to @Ethaniel in the discord!</span>
          <br />
          <img src="/images/scav/recipe scroll.webp" alt="recipe" className="w-[50vw]" />
        </div>
      ) : (
        <VaultGetIn onCorrect={() => setCorrect(true)} />
      )}
    </dialog>
  );
};

export default VaultDialog;
