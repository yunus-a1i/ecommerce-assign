"use client";

import { useState, useRef } from "react";
import { useFilters } from "./useFilters";
import { debounce } from "../lib/utils";

export function useSearch() {
  const [inputValue, setInputValue] = useState("");
  const { setSearch } = useFilters();

  const debouncedSearch = useRef(
    debounce((value) => {
      setSearch(value);
    }, 300)
  ).current;

  const handleSearchChange = (value) => {
    setInputValue(value);
    debouncedSearch(value);
  };

  const clearSearch = () => {
    setInputValue("");
    setSearch("");
  };

  return {
    inputValue,
    handleSearchChange,
    clearSearch,
  };
}
