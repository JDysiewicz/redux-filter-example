import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { availableFilters, FilterFn } from "./filters";
import { RootState } from "./reducer";
import { Program } from "./types";

export const useGetFilteredArray = (programs: Program[]) => {
  const activeFilters = useSelector((state: RootState) => state.programReducer.activeFilters);
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  
  // apply filters
  useEffect(() => {
    const getFilterFns = (): FilterFn[] => {
      const filterFns = activeFilters.map(filter => {

        // find the available filter which matches the type
        const obj = availableFilters.find(f => f.type === filter.type);
        if (!obj) return undefined;

        // pass the values to that function to create a new filter function
        const filterFn = obj.fn(filter.values);
        return filterFn
      })

      // making typescript happy
      const removeUndef = filterFns.filter(f => f != undefined) as FilterFn[];
      return removeUndef
    }

    // pass the data array to each filter sequentially, applying
    // each filter to the array
    const applyFilters = (dataArr: Program[], filterFns: FilterFn[]) => {
      return filterFns.reduce((acc, curr) => curr(acc), dataArr);
    }

    const filterFns = getFilterFns();
    const filteredArr = applyFilters(programs, filterFns);

    // update the currently displayed array
    setFilteredPrograms(filteredArr)
  }, [programs])

  return {filteredPrograms, activeFilters}
}
 
