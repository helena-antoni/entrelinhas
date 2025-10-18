const BASE_BUTTON_CLASSES = 
"flex items-center border-none justify-center gap-2 py-1.5 px-3 rounded-xl font-semibold text-sm transition duration-300";


export const PRIMARY_BUTTON_CLASSES = `
  ${BASE_BUTTON_CLASSES}
  text-[#663800] shadow-md bg-[#CC7000] hover:text-[#663800] hover:bg-[#FFF3E5]
`;

export const SECONDARY_BUTTON_CLASSES = `
  ${BASE_BUTTON_CLASSES}
  bg-warm-ochre bg-[#CC7000] hover:bg-[#A85A00] text-white shadow-md
`;