const BASE_BUTTON_CLASSES = 
` flex items-center border-none justify-center gap-2 lg:py-1.5 lg:px-3 md:py-1.5 md:px-3 py-1 px-2.5 
  font-medium w-auto text-[16px]
  rounded-xl  text-sm transition duration-300 
  `;

const BASE_BUTTON_CLASSES_HEADER = 
" flex  items-center border-none justify-center p-1.5 rounded-xl font-semibold text-sm transition duration-300";



export const PRIMARY_BUTTON_CLASSES = `
  ${BASE_BUTTON_CLASSES}
    text-[var(--bg-card)] bg-[var(--button-pressed)] hover:text-[var(--button-pressed)] hover:bg-[var(--button-hover)] shadow-md cursor-pointer
`;

export const SECONDARY_BUTTON_CLASSES = `
  ${BASE_BUTTON_CLASSES}
    text-[var(--text-primary)] hover:text-[var(--button-pressed)] hover:bg-[var(--button-hover)]  cursor-pointer 
`;



export const PRIMARY_BUTTON_CLASSES_HEADER = `
  ${BASE_BUTTON_CLASSES_HEADER}
    text-[var(--bg-card)] bg-[var(--button-pressed)] hover:text-[var(--button-pressed)] hover:bg-[var(--button-hover)] shadow-md cursor-pointer
  
`;

export const SECONDARY_BUTTON_CLASSES_HEADER = `
  ${BASE_BUTTON_CLASSES_HEADER}
    text-[var(--text-primary)] hover:text-[var(--button-pressed)] hover:bg-[var(--button-hover)]  cursor-pointer
`;

