type Props = {
  color: string;
};

const PreArrow = ({ color }: Props) => {
  return (
    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M38.5714 57L18 33L38.5714 9" 
        stroke={color}
        strokeWidth="3.6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
    
  );
};

export default PreArrow;
