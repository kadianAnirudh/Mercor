import { AiOutlinePlus } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import CommentIcon from "@mui/icons-material/Comment";
import FolderIcon from "@mui/icons-material/Folder";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import Image from "next/image";
import { Person4Sharp } from "@mui/icons-material";

const Kanban = () => {
  const ToDo = [
    {
      Priority: "Low",
      Heading: "Brainstorming",
      Text: "Brainstorming brings team members' diverse experience into play",
      comments: 12,
      files: 0,
      PriorityBg: `#DFA874`,
      PriorityTextColor: "#D58D49",
      avatarNumber: 3,
    },
    {
      Priority: "High",
      Heading: "Research",
      Text: "User research helps you to create an optimal product for users.",
      comments: 10,
      files: 3,
      PriorityBg: "#F68894",
      PriorityTextColor: "#D8727D",
      avatarNumber: 2,
    },
    {
      Priority: "High",
      Heading: "Wireframes",
      Text: "Low fidelity wireframes include the most basic content and visuals.",
      comments: 8,
      files: 1,
      PriorityBg: "#F68894",
      PriorityTextColor: "#D8727D",
      avatarNumber: 3,
    },
  ];

  const OnProgress = [
    {
      Priority: "Low",
      Heading: "Onboarding Illustrations",
      comments: 12,
      files: 15,
      avatarNumber: 3,
      image: p3,
    },
    {
      Priority: "Low",
      Heading: "Moodboard",
      comments: 9,
      files: 10,
      avatarNumber: 2,
      image: p2,
      image2: p1,
    },
  ];

  const Done = [
    {
      Priority: "Low",
      Heading: "Onboarding Illustrations",
      comments: 12,
      files: 15,
      avatarNumber: 3,
      image: p4,
    },
    {
      Priority: "Low",
      Heading: "Moodboard",
      comments: 9,
      files: 10,
      avatarNumber: 2,
      text: "It just needs to adapt the UI from what you did before ",
    },
  ];

  return (
    <div className="text-black h-3/4 mt-4 w-auto">
      <div class="flex flex-col h-screen text-gray-700 bg-white from-blue-200 via-indigo-200 to-pink-200">
        <div class="flex flex-grow mt-4 space-x-6">
          {/* Grey container for To Do*/}
          <div class="flex flex-col flex-shrink-0 w-[32%] px-4 py-4 bg-[#F5F5F5] rounded-md">
            <div class="flex items-center flex-shrink-0 h-10 px-2">
              {/* Container header */}
              <div className="block rounded-full h-[8px] w-[8px] bg-[#5030e5] mx-2"></div>
              <span class="block text-sm font-semibold">To Do </span>
              <span class="flex items-center justify-center w-5 h-5 ml-2 border border-[#DBDBDB] text-sm font-semibold text-indigo-500 bg-[#DBDBDB] rounded-full bg-opacity-30">
                4
              </span>
              <div className="w-[20px] h-[20px] flex justify-center items-center bg-[#dcd6fa] rounded-md ml-auto cursor-pointer">
                <AiOutlinePlus className="text-[#5030E5]" />
              </div>
            </div>
            <div className="block rounded-full h-[3px] w-full bg-[#5030e5] my-2"></div>
            {/* child container */}
            <div class="flex flex-col pb-2">
              {/* Child card 1 */}
              {ToDo.map((task, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100`}
                  draggable="true"
                >
                  <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                  <span
                    className={`flex items-center h-6 px-3 text-xs font-semibold bg-pink-100 text-[#D8727D] rounded-xl`}
                  >
                    {task.Priority}
                  </span>
                  <h1 className="mt-3 text-xl font-semibold">{task.Heading}</h1>
                  <h4 className="mt-3 text-sm font-medium">{task.Text}</h4>

                  <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    {/* Icon container */}
                    <div className="avatar-group-container w-6/12 flex justify-center">
                      <AvatarGroup total={task.avatarNumber} className="w-3/5">
                        <Avatar
                          className=""
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

                    <div className="flex justify-center">
                      <div className="flex items-center justify-center">
                        <CommentIcon className="" />
                        <span className="ml-1 leading-none">
                          {task.comments} comments
                        </span>
                      </div>

                      <div className="relative flex items-center ml-4">
                        <FolderIcon />
                        <span className="ml-1 leading-none">{task.files}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grey container for On Progress */}
          <div class="flex flex-col flex-shrink-0 w-[32%] px-4 py-4 bg-[#F5F5F5] rounded-md">
            <div class="flex items-center flex-shrink-0 h-10 px-2">
              {/* Container header */}
              <div className="block rounded-full h-[8px] w-[8px] bg-[#FFA500] mx-2"></div>
              <span class="block text-sm font-semibold"> On Progress </span>
              <span class="flex items-center justify-center w-5 h-5 ml-2 border border-[#DBDBDB] text-sm font-semibold text-black bg-[#DBDBDB] rounded-full bg-opacity-30">
                3
              </span>
            </div>
            <div className="block rounded-full h-[3px] w-full bg-[#FFA500] my-2"></div>
            {/* child container */}
            <div class="flex flex-col pb-2 overflow-auto">
              {/* Child card 1 */}
              {OnProgress.map((task, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100`}
                  draggable="true"
                >
                  <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                  <span
                    className={`flex items-center h-6 px-3 text-xs font-semibold bg-[#f7dec7] text-[#D58D49] rounded-xl`}
                  >
                    {task.Priority}
                  </span>
                  <h1 className="mt-3 text-xl font-semibold">{task.Heading}</h1>
                  <div className="w-full flex justify-center">
                    <div className="flex justify-center items-center my-2">
                      <Image src={task.image} alt="" className="mx-2" />
                      <Image src={task.image2} alt="" className="mx-2" />
                    </div>
                  </div>
                  <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    {/* Icon container */}
                    <div className="avatar-group-container w-6/12 flex justify-center">
                      <AvatarGroup total={task.avatarNumber} className="w-3/5">
                        <Avatar
                          className=""
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

                    <div className="flex justify-center">
                      <div className="flex items-center justify-center">
                        <CommentIcon className="" />
                        <span className="ml-1 leading-none">
                          {task.comments} comments
                        </span>
                      </div>

                      <div className="relative flex items-center ml-4">
                        <FolderIcon />
                        <span className="ml-1 leading-none">{task.files}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grey container for Done */}
          <div class="flex flex-col flex-shrink-0 w-[32%] px-4 py-4 bg-[#F5F5F5] rounded-md">
            <div class="flex items-center flex-shrink-0 h-10 px-2">
              {/* Container header */}
              <div className="block rounded-full h-[8px] w-[8px] bg-[#76A5EA] mx-2"></div>
              <span class="block text-sm font-semibold"> Done </span>
              <span class="flex items-center justify-center w-5 h-5 ml-2 border border-[#DBDBDB] text-sm font-semibold text-black bg-[#DBDBDB] rounded-full bg-opacity-30">
                2
              </span>
            </div>
            <div className="block rounded-full h-[3px] w-full bg-[#8BC48A] my-2"></div>
            {/* child container */}
            <div class="flex flex-col pb-2 overflow-auto">
              {/* Child card 1 */}
              {Done.map((task, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100`}
                  draggable="true"
                >
                  <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                  <span
                    className={`flex items-center h-6 px-3 text-xs font-semibold bg-[#f7dec7] text-[#D58D49] rounded-xl`}
                  >
                    {task.Priority}
                  </span>
                  <h1 className="mt-3 text-xl font-semibold">{task.Heading}</h1>

                  <div className="w-full flex justify-center">
                    <div className="flex justify-center items-center mt-2">
                      <Image src={task.image} alt="" className="mx-2" />
                      <Image src={task.image2} alt="" className="mx-2" />
                    </div>
                  </div>
                  <h4 className="mt-3 text-sm font-medium">{task.text}</h4>
                  <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    {/* Icon container */}
                    <div className="avatar-group-container w-6/12 flex justify-center">
                      <AvatarGroup total={task.avatarNumber} className="w-3/5">
                        <Avatar
                          className=""
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

                    <div className="flex justify-center">
                      <div className="flex items-center justify-center">
                        <CommentIcon className="" />
                        <span className="ml-1 leading-none">
                          {task.comments} comments
                        </span>
                      </div>

                      <div className="relative flex items-center ml-4">
                        <FolderIcon />
                        <span className="ml-1 leading-none">{task.files}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
