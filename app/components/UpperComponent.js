"use client";

import { FiLink2 } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const UpperComponent = () => {
  return (
    <div className="text-black h-1/5 flex justify-center items-center">
      {/* child component 1 */}
      <div className="bind1 w-6/12">
        <div className="bind1a w-max flex justify-center items-center ml-4">
          <h1 className="font-semibold text-4xl cursor-pointer">
            {" "}
            Mobile App{" "}
          </h1>

          <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#dcd6fa] rounded-md mx-4 cursor-pointer">
            <GoPencil className="text-[#5030E5]" />
          </div>

          <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#dcd6fa] rounded-md cursor-pointer">
            <FiLink2 className="text-[#5030E5]" />
          </div>
        </div>

        <div className="bind-1b w-6/12 mt-8 ml-4">
          <Button
            size="small"
            variant="outlined"
            className="border-[#787486] text-[#787486] mr-4"
            startIcon={<FilterAltOffIcon className="text-[#787486]" />}
            endIcon={<KeyboardArrowDownIcon className="text-[#787486]" />}
          >
            Filter
          </Button>

          <Button
            size="small"
            variant="outlined"
            className="border-[#787486] text-[#787486]"
            startIcon={<PermContactCalendarIcon className="text-[#787486]" />}
            endIcon={<KeyboardArrowDownIcon className="text-[#787486]" />}
          >
            Today
          </Button>
        </div>
      </div>

      <div className="bind2 w-6/12">
        <div className="bind2a flex justify-end items-center ml-4">
          <div className="w-[25px] h-[25px] flex justify-center items-center bg-[#dcd6fa] rounded-md mx-2 cursor-pointer">
            <AiOutlinePlus className="text-[#5030E5]" />
          </div>

          <h1 className="font-semibold text-[#5030E5] cursor-pointer mx-2">
            Invite
          </h1>

          <AvatarGroup total={6} className="mx-2">
            <Avatar
              alt="Remy Sharp"
              src="https://media.licdn.com/dms/image/D4D03AQFNLNEQCHMwyA/profile-displayphoto-shrink_800_800/0/1686031798643?e=1692230400&v=beta&t=yRBklbOe4vz9MtIDnqAYFkdllQ2hqvKHsumnSqEABdc"
            />
            <Avatar
              alt="Travis Howard"
              src="https://media.licdn.com/dms/image/D4D03AQFluxFf_Xetxw/profile-displayphoto-shrink_400_400/0/1671019308937?e=1692230400&v=beta&t=MYpdpBmxlvs1F2LGYHwTjEORt5OzDAWLB0ns04JAUPA"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://media.licdn.com/dms/image/D4E03AQEg6chuO5A6Sw/profile-displayphoto-shrink_400_400/0/1684724677319?e=1692230400&v=beta&t=HTnZIQZ-fS8Ea1fZZdRxinXqo084gXq8Kku7-qCzKeQ"
            />
            <Avatar
              className="bg-black"
              alt="Trevor Henderson"
              src="https://media.licdn.com/dms/image/D5603AQE-PfZ7LSuhuA/profile-displayphoto-shrink_400_400/0/1670613259460?e=1692230400&v=beta&t=Ok8vmnMl4QG_uYtKq2Z9RHnshQ8jZKXcwbVqA_sqXCA"
            />
          </AvatarGroup>
        </div>

        <div className="bind-2b mt-8 ml-4 flex justify-end mx-2">
          <Button
            size="small"
            variant="outlined"
            className="border-[#787486] text-[#787486] mr-4"
            startIcon={<PeopleAltIcon className="text-[#787486]" />}
          >
            share
          </Button>
          <div className="flex justify-center items-center"> | </div>
          <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#5030E5] rounded-md mx-4 cursor-pointer">
            <SpaceDashboardIcon className="text-[white]" />
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <DragIndicatorIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperComponent;
