import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comment {
  id: string;
  userId: string;
  userName: string;
  avatar: string;
  content: string;
  createTime: string;
}

interface DiaryItem {
  id: string;
  title: string;
  content: string;
  location: string;
  createTime: string;
  images: string[];
  likes: number;
  isLiked: boolean;
  comments: Comment[];
  author: {
    id: string;
    name: string;
    avatar: string;
  };
}

interface DiaryState {
  list: DiaryItem[];
  currentDiary: DiaryItem | null;
  loading: boolean;
  error: string | null;
}

const initialState: DiaryState = {
  list: [],
  currentDiary: null,
  loading: false,
  error: null
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    fetchDiariesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDiariesSuccess: (state, action: PayloadAction<DiaryItem[]>) => {
      state.loading = false;
      state.list = action.payload;
      state.error = null;
    },
    fetchDiariesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentDiary: (state, action: PayloadAction<DiaryItem>) => {
      state.currentDiary = action.payload;
    },
    clearCurrentDiary: (state) => {
      state.currentDiary = null;
    },
    addDiary: (state, action: PayloadAction<DiaryItem>) => {
      state.list.unshift(action.payload);
    },
    updateDiary: (state, action: PayloadAction<DiaryItem>) => {
      const index = state.list.findIndex(diary => diary.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      if (state.currentDiary?.id === action.payload.id) {
        state.currentDiary = action.payload;
      }
    },
    toggleLike: (state, action: PayloadAction<string>) => {
      const diary = state.list.find(d => d.id === action.payload);
      if (diary) {
        diary.isLiked = !diary.isLiked;
        diary.likes += diary.isLiked ? 1 : -1;
      }
      if (state.currentDiary?.id === action.payload) {
        state.currentDiary.isLiked = !state.currentDiary.isLiked;
        state.currentDiary.likes += state.currentDiary.isLiked ? 1 : -1;
      }
    },
    addComment: (state, action: PayloadAction<{ diaryId: string; comment: Comment }>) => {
      const { diaryId, comment } = action.payload;
      const diary = state.list.find(d => d.id === diaryId);
      if (diary) {
        diary.comments.push(comment);
      }
      if (state.currentDiary?.id === diaryId) {
        state.currentDiary.comments.push(comment);
      }
    }
  }
});

export const {
  fetchDiariesStart,
  fetchDiariesSuccess,
  fetchDiariesFailure,
  setCurrentDiary,
  clearCurrentDiary,
  addDiary,
  updateDiary,
  toggleLike,
  addComment
} = diarySlice.actions;

export default diarySlice.reducer;