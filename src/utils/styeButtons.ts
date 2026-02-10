const BASE_BUTTON_CLASSES = 
` flex items-center border-none justify-center gap-2 py-1.5 px-3 
  font-medium w-[129px] text-[16px]
  rounded-xl  text-sm transition duration-300 
  `;

const BASE_BUTTON_CLASSES_HEADER = 
" flex  items-center border-none justify-center p-1.5 rounded-xl font-semibold text-sm transition duration-300";

export const PRIMARY_BUTTON_CLASSES = `
  ${BASE_BUTTON_CLASSES}
  text-[var(--bg-card)] bg-[var(--button-pressed)] hover:text-[var(--button-pressed)] hover:bg-[var(--color-icons)] shadow-md cursor-pointer
  
`;

export const SECONDARY_BUTTON_CLASSES = `
  ${BASE_BUTTON_CLASSES}
      text-[var(--text-primary)] hover:text-[var(--button-pressed)] hover:bg-[var(--button-hover)]  cursor-pointer 
`;


export const PRIMARY_BUTTON_CLASSES_HEADER = `
  ${BASE_BUTTON_CLASSES_HEADER}
   text-[var(--bg-card)] bg-[var(--text-primary)] hover:text-[var(--button-pressed)] hover:bg-[var(--color-icons)] shadow-md cursor-pointer
  
`;

export const SECONDARY_BUTTON_CLASSES_HEADER = `
  ${BASE_BUTTON_CLASSES_HEADER}
      text-[var(--text-primary)] hover:text-[var(--button-pressed)] hover:bg-[var(--color-icons)]  cursor-pointer
`;

