import React from 'react';

export const AmbientCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-20" aria-hidden="true">
      <span
        className="material-symbols-outlined absolute text-sky-400 anim-float-1"
        style={{ top: '14%', left: '4%', fontSize: '42px' }}
      >
        checkroom
      </span>
      <span
        className="material-symbols-outlined absolute text-sky-400 anim-float-2"
        style={{ top: '26%', right: '5%', fontSize: '36px' }}
      >
        print
      </span>
      <span
        className="material-symbols-outlined absolute text-sky-400 anim-float-3"
        style={{ top: '58%', left: '3%', fontSize: '46px' }}
      >
        palette
      </span>
      <span
        className="material-symbols-outlined absolute text-sky-400 anim-float-4"
        style={{ top: '74%', right: '6%', fontSize: '38px' }}
      >
        local_shipping
      </span>
      <span
        className="material-symbols-outlined absolute text-sky-400 anim-float-1"
        style={{ top: '88%', left: '7%', fontSize: '32px' }}
      >
        stylus_note
      </span>
    </div>
  );
};
