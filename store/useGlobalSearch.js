import {create} from 'zustand';

// zustand 스토어 생성
const useGlobalSearch = create((set) => ({
    searchKeyword: '', // 초기 상태
    setSearchKeyword: (keyword) => set({ searchKeyword: keyword }), // 상태 업데이트 함수
}));

export default useGlobalSearch;
