import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  minPrice: 0,
  maxPrice: 1000,
  brands: [],
  search: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },

    toggleCategory(state, action) {
      const category = action.payload;
      const index = state.categories.indexOf(category);
      if (index === -1) {
        state.categories.push(category);
      } else {
        state.categories.splice(index, 1);
      }
    },

    setPriceRange(state, action) {
      const { min, max } = action.payload;
      state.minPrice = min;
      state.maxPrice = max;
    },

    setBrands(state, action) {
      state.brands = action.payload;
    },

    toggleBrand(state, action) {
      const brand = action.payload;
      const index = state.brands.indexOf(brand);
      if (index === -1) {
        state.brands.push(brand);
      } else {
        state.brands.splice(index, 1);
      }
    },

    setSearch(state, action) {
      state.search = action.payload;
    },

    resetFilters(state) {
      state.categories = [];
      state.minPrice = 0;
      state.maxPrice = 1000;
      state.brands = [];
      state.search = '';
    },

    setAllFilters(state, action) {
      const filters = action.payload;
      if (filters.categories) state.categories = filters.categories;
      if (filters.minPrice !== undefined) state.minPrice = filters.minPrice;
      if (filters.maxPrice !== undefined) state.maxPrice = filters.maxPrice;
      if (filters.brands) state.brands = filters.brands;
      if (filters.search !== undefined) state.search = filters.search;
    },
  },
});

export const {
  setCategories,
  toggleCategory,
  setPriceRange,
  setBrands,
  toggleBrand,
  setSearch,
  resetFilters,
  setAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;