import React from 'react';

export type ButtonProps = {
  tag: string
  style?: string
  tooltip?: string
  enabled?: boolean
  handleOnClick: (message : string) => void
}

export const Button: React.FC<ButtonProps> = ({
  tag, style, tooltip, handleOnClick, enabled = true,
}) => {
  let cName = '';
  let msg = '';
  // const id = useState(tooltip);
  if (style === 'secondary') {
    cName = 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full';
    msg = 'secondary button!';
  } else {
    cName = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full';
    msg = 'primary button!';
  }

  return (
    <button
      type="button"
      className={cName}
      title={tooltip}
      onClick={() => {
        handleOnClick(msg);
      }}
      disabled={!enabled}
    >
      {tag}
    </button>
  );
};
