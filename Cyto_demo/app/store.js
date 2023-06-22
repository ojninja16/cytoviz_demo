// store.js
// import create from 'zustand';
import { create } from 'zustand';

const usePlotStore = create((set) => ({
  handlePlotClick: null,
  setHandlePlotClick: (handlePlotClick) => set({ handlePlotClick }),
  fileId: '',
  setFileId: (fileId) => set({ fileId }),
}));
export const setFileId = (fileId) => usePlotStore.setState({ fileId });

export default usePlotStore;
