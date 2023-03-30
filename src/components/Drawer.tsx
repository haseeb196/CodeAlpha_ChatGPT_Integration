import React from "react";
import { Add, Launch, Logout, Person } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Drawers: React.FC = () => {
  const styles = {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
      borderWidth: "thin",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
      borderWidth: "thin",
    },
    ".MuiSvgIcon-root ": {
      fill: "white !important",
    },
  };
  return (
    <div className="relative flex h-screen  !w-screen !max-w-[275px] flex-col  justify-between  bg-[#202123] p-2 !text-white shadow-2xl">
      <div>
        <div>
          {" "}
          <button className="border-gray flex w-full flex-row items-center gap-3 rounded-md border-[1px] border-white/20 py-3 pl-2 text-[14px] transition-colors duration-[200] hover:bg-gray-500/10">
            <Add className="text-[17px]" />
            <p>New chat</p>
          </button>
        </div>

        <div className="mt-6">
          <FormControl size="small" fullWidth>
            <InputLabel id="selcet" className="!text-white">
              Model
            </InputLabel>
            <Select
              labelId="selcet"
              id="selcet"
              label="Age"
              sx={styles}
              className="!text-white"
              defaultValue={20}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mt-3 text-center text-gray-500">
          <p>History is unavailable.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t-[0.5px] pt-3 text-[13px]">
        <div className="flex cursor-pointer items-center gap-9 rounded-md py-3 pl-2 transition-colors hover:bg-gray-500/10">
          <div className="flex items-center gap-2">
            {" "}
            <Person fontSize="small" />
            <p>Upgrade to Plus</p>
          </div>
          <span className="rounded-md bg-[yellow] px-1  text-black">NEW</span>
        </div>

        <div className="flex cursor-pointer items-center gap-2 rounded-md py-3 pl-2 transition-colors hover:bg-gray-500/10">
          <Launch fontSize="small" />
          <p>Updates & FAQ</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 rounded-md py-3 pl-2 transition-colors hover:bg-gray-500/10">
          <Logout fontSize="small" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default Drawers;