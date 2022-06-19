import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleTitleCase() {
    //split the above string into an array of strings
    //whenever a blank space is encountered
    const array = text.split(" ");

    //loop through each element of the array and capitalize the first letter.
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    let newText = array.join(" ");
    setText(newText);
  }

  function handleUppercase() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLowercase() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function clearFormData() {
    setText("");
  }


  return (
    <div className="py-20">
      <form>
        <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200">
          <div class="py-2 px-4 bg-white rounded-t-lg">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              value={text}
              onChange={handleOnChange}
              id="comment"
              rows="4"
              class="px-0 w-full text-sm text-gray-700 bg-white focus:ring-0 border-none"
              placeholder="Write your content..."
              required=""
            ></textarea>
          </div>
          <div class="flex justify-between items-center py-2 px-3 border-t">
            <div class="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={handleTitleCase}
                type="button"
                class="py-2 px-4 text-sm font-medium text-blue-500 bg-transparent rounded-l-lg border border-blue-500 hover:bg-blue-500 hover:text-white focus:z-10 focus:bg-blue-500 focus:text-white"
              >
                Title Case
              </button>
              <button
                onClick={handleUppercase}
                type="button"
                class="py-2 px-4 text-sm font-medium text-blue-500 bg-transparent border-t border-b border-blue-500 hover:bg-blue-500 hover:text-white focus:z-10 focus:bg-blue-500 focus:text-white"
              >
                UPPERCASE
              </button>
              <button
                onClick={handleLowercase}
                type="button"
                class="py-2 px-4 text-sm font-medium text-blue-500 bg-transparent border-t border-b border-l border-blue-500 hover:bg-blue-500 hover:text-white focus:z-10 focus:bg-blue-500 focus:text-white"
              >
                lowercase
              </button>
              <button
                onClick={clearFormData}
                type="button"
                class="py-2 px-4 text-sm font-medium text-blue-500 bg-transparent rounded-r-md border border-blue-500 hover:bg-blue-500 hover:text-white focus:z-10 focus:bg-blue-500 focus:text-white"
              >
                Clear
              </button>
            </div>

            <div class="flex pl-0 space-x-1 sm:pl-2">
              <button
                onClick={clearFormData}
                title="Refresh"
                type="button"
                class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-blue-500 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-blue-500 hover:bg-gray-100"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-blue-500 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
      <p class="ml-auto text-gray-500 space-x-3">
        <span className="font-bold">{text.split(" ").length}</span> words,
         <span className="font-bold">{text.length}</span> Charecters
      </p>
    </div>
  );
}
