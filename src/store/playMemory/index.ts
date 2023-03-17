import create from 'zustand'

interface PlayMemoryState {
  counter: number
  isStart: boolean
  setCounter: () => void
  removeCounter: () => void
  setIsStart: () => void
  setIsStartEnd: () => void
}

export const usePlayMemoryStore = create<PlayMemoryState>((set) => ({
  counter: 0,
  isStart: false,
  setCounter: () => set((state) => ({ counter: state.counter + 1 })),
  removeCounter: () => set(() => ({ counter: 0 })),
  setIsStart: () => set((state) => ({ isStart: true })),
  setIsStartEnd: () => set((state) => ({ isStart: false }))
}))
