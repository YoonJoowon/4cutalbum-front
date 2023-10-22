type Props = {
  color: string;
  width: string;
  height: string;
};

const DeleteIcon = ({ color = '#666666', height, width }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.9873 35.0616L35.5258 5.52315M35.5258 35.0616L5.9873 5.52315"
        stroke={color}
        strokeWidth="2.21538"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
