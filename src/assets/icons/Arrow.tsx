type Props = {
  color: string;
};

const Arrow = ({ color }: Props) => {
  return (
    <svg width="768" height="113" viewBox="0 0 768 113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M67.0537 99.0922L31.291 57.3691L67.0537 15.646" 
      stroke={color} 
      strokeOpacity="0.5" 
      strokeWidth="8.64" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path d="M700.946 99.0922L736.709 57.3691L700.946 15.646" 
      stroke={color} 
      strokeOpacity="0.5" 
      strokeWidth="8.64" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    </svg>
  );
};

export default Arrow;
