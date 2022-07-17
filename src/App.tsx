import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredArray } from "./hooks";
import { RootState } from "./reducer";
import { addFilter, addProgram } from "./state/actions";
import { Filter, FilterTypes, Program } from "./types";

const App = () => {
  // selector to grab programs from correct section
  const programs = useSelector(
    (state: RootState) => state.programReducer.programs
  );

  // grab filtered array from custom hook
  const { filteredPrograms, activeFilters } = useGetFilteredArray(programs);

  // access the dispatch function to fire actions at reducers
  const dispatch = useDispatch();

  // add the filters; can be done anywhere as via dispatch
  useEffect(() => {
    const filterByIsHiring: Filter = {
      type: FilterTypes.BY_HIRING,
      values: true,
    };
    const filterByName: Filter = {
      type: FilterTypes.BY_NAME,
      values: ["b", "a"],
    };
    dispatch(addFilter(filterByIsHiring));
    dispatch(addFilter(filterByName));
  }, [dispatch]);

  // populate programs; mimic network request (can be done anywhere as via dispatch)
  useEffect(() => {
    setTimeout(() => {
      createProgs().forEach((prog) => dispatch(addProgram(prog)));
    }, 5000);
  }, [dispatch]);

  return (
    <div>
      <h1>Hello</h1>
      <h2>Unfiltered</h2>
      {programs.map((program) => {
        return (
          <div key={program.id}>
            <p>{JSON.stringify(program)}</p>
          </div>
        );
      })}

      <h2>Filtered</h2>
      {filteredPrograms.map((program) => {
        return (
          <div key={program.id}>
            <p>{JSON.stringify(program)}</p>
          </div>
        );
      })}

      <div>
        <h2>Active Filters</h2>
        <p>{JSON.stringify(activeFilters)}</p>
      </div>
    </div>
  );
};

export default App;

// helper func to just populate random data
const createProgs = (): Program[] => {
  const progs: Program[] = [
    { name: "a", id: "asdasd", isHiring: false },
    { name: "b", id: "badsbbdsa", isHiring: true },
    { name: "c", id: "aadddss", isHiring: false },
    { name: "d", id: "fgdfgdfg", isHiring: true },
  ];
  return progs;
};
