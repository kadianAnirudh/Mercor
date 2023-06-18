import { AiOutlinePlus } from "react-icons/ai";

const Kanban = () => {
  return (
    <div className="text-black h-3/4 mt-4 w-max overflow-x-hidden">
      <div class="flex flex-col h-screen text-gray-700 bg-white from-blue-200 via-indigo-200 to-pink-200">
        <div class="flex flex-grow px-10 mt-4 space-x-6">
          {/* Grey container for To Do*/}
          <div class="flex flex-col flex-shrink-0 w-1/4 px-4 py-4 bg-[#F5F5F5] rounded-md">
            <div class="flex items-center flex-shrink-0 h-10 px-2">
              {/* Container header */}
              <div className="block rounded-full h-[8px] w-[8px] bg-[#5030e5] mx-2"></div>
              <span class="block text-sm font-semibold">To Do </span>
              <span class="flex items-center justify-center w-5 h-5 ml-2 border border-[#DBDBDB] text-sm font-semibold text-indigo-500 bg-[#DBDBDB] rounded-full bg-opacity-30">
                6
              </span>
              <div className="w-[20px] h-[20px] flex justify-center items-center bg-[#dcd6fa] rounded-md ml-auto cursor-pointer">
                <AiOutlinePlus className="text-[#5030E5]" />
              </div>
            </div>
            <div className="block rounded-full h-[3px] w-full bg-[#5030e5] my-2"></div>
            {/* child container */}
            <div class="flex flex-col pb-2">
              {/* Child card 1 */}
              <div
                class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                draggable="true"
              >
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    class="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                  Design
                </span>
                <h4 class="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                  <div class="flex items-center">
                    <svg
                      class="w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div class="relative flex items-center ml-4">
                    <svg
                      class="relative w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">4</span>
                  </div>
                  <div class="flex items-center ml-4">
                    <svg
                      class="w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">1</span>
                  </div>
                  <img
                    class="w-6 h-6 ml-auto rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grey container for On Progress */}
          <div class="flex flex-col flex-shrink-0 w-1/4 px-4 py-4 bg-[#F5F5F5] rounded-md">
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
              <div
                class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                draggable="true"
              >
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    class="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                  Design
                </span>
                <h4 class="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                  <div class="flex items-center">
                    <svg
                      class="w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div class="relative flex items-center ml-4">
                    <svg
                      class="relative w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">4</span>
                  </div>
                  <div class="flex items-center ml-4">
                    <svg
                      class="w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">1</span>
                  </div>
                  <img
                    class="w-6 h-6 ml-auto rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grey container for Done */}
          <div class="flex flex-col flex-shrink-0 w-1/4 px-4 py-4 bg-[#F5F5F5] rounded-md">
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
              <div
                class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                draggable="true"
              >
                <button class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    class="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                  Design
                </span>
                <h4 class="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                  <div class="flex items-center">
                    <svg
                      class="w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div class="relative flex items-center ml-4">
                    <svg
                      class="relative w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">4</span>
                  </div>
                  <div class="flex items-center ml-4">
                    <svg
                      class="w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-1 leading-none">1</span>
                  </div>
                  <img
                    class="w-6 h-6 ml-auto rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
