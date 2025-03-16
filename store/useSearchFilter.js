import {create} from 'zustand';

// zustand 스토어 생성
const useSearchFilter = create((set) => ({
    filters: [], // 초기 상태
    setFilters: (filters) => set({ filters: filters }), // 상태 업데이트 함수
    selectedFilter: null, // 선택된 필터 상태 (단일 객체)
    setSelectedFilter: (selectedFilter) => set({ selectedFilter: selectedFilter }), // 선택된 필터 상태 업데이트 함수
}));

export default useSearchFilter;
