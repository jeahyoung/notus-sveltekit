

<script lang="ts">
    import { Search } from 'flowbite-svelte';
    import Grid from 'gridjs-svelte';
    import { send } from "$lib/api";

    // core components
    const bootstrap = "/assets/img/bootstrap.jpg";
  const angular = "/assets/img/angular.jpg";
  const sketch = "/assets/img/sketch.jpg";
  const react = "/assets/img/react.jpg";
  const vue = "/assets/img/react.jpg";

  const team1 = "/assets/img/team-1-800x800.jpg";
  const team2 = "/assets/img/team-2-800x800.jpg";
  const team3 = "/assets/img/team-3-800x800.jpg";
  const team4 = "/assets/img/team-4-470x470.png";

  // can be one of light or dark
  const color = "light";

  export let error: string;
  export let success: string;
  export let data: any;

  

  const userSearchHandle = async (event: SubmitEvent) => {
    error = '';
    success = '';
    //event.preventDefault();
    const formEl = event.target as HTMLFormElement;
    console.log('form=================>',formEl.action);
    const response = await send(formEl);
    //alert('click'+new FormData(formEl).get('userSearch'));
    if (response.error){
            error = response.error;
        }

        if(response.success){
            
            success = response.success;
           
        }
        event.preventDefault();
        //formEl.reset();
  }

  // const data = [
  //   { name: "John", email: "john@example.com" },
  //   { name: "Mark", email: "mark@gmail.com" },
  // ];

  const style = { 
       td: {
      border: '1px solid #ccc'
    },
    table: {
      'text-indent': '0',
      'border-color': 'inherit',
    'align-items': 'center',
      'border-collapse': 'collapse',
    'width': '100%'
    }};

    const language = {
    'search': {
      'placeholder': '🔍 Search...'
    },
    'pagination': {
      'previous': '⬅️',
      'next': '➡️',
      'showing': '😃 Displaying',
      'results': () => 'Records'
    }
  };
  </script>
  
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
        <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}"
      >
        <!-- <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                class="font-semibold text-lg text-blueGray-700"
              >
                사용자 관리
              </h3>
            </div>
          </div>
        </div> -->

        <div class="block w-full overflow-x-auto mt-6 items-center">
            <div class="mb-6 flex justify-between">
              <div class="items-center ml-4">
                <h3 class="font-semibold text-lg text-blueGray-700">
                사용자 관리
              </h3>
              </div>
              <div class='w-80 mr-4'>
                <Search placeholder='사용자명을 입력하세요' on:submit={userSearchHandle} name="userSearch"/>
              </div>
            </div>

          <Grid {data} {style} pagination={true} {language}/>
          <!-- Projects table -->
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
                >
                  Project
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
                >
                  Budget
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
                >
                  Status
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
                >
                  Users
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
                >
                  Completion
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                >
                  <img
                    src="{bootstrap}"
                    class="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  />
                  <span
                    class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
                  >
                    Argon Design System
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  $2,500 USD
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <i class="fas fa-circle text-orange-500 mr-2"></i> pending
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex">
                    <img
                      src="{team1}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    />
                    <img
                      src="{team2}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team3}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team4}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">60%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                      >
                        <div
                          style="width: 60%;"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                
              </tr>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                >
                  <img
                    src="{angular}"
                    class="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  />
                  <span
                    class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
                  >
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  $1,800 USD
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <i class="fas fa-circle text-emerald-500 mr-2"></i>
                  completed
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex">
                    <img
                      src="{team1}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    />
                    <img
                      src="{team2}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team3}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team4}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">100%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                      >
                        <div
                          style="width: 100%;"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                
              </tr>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                >
                  <img
                    src="{sketch}"
                    class="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  />
                  <span
                    class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
                  >
                    Black Dashboard Sketch
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  $3,150 USD
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <i class="fas fa-circle text-red-500 mr-2"></i> delayed
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex">
                    <img
                      src="{team1}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    />
                    <img
                      src="{team2}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team3}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team4}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">73%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                      >
                        <div
                          style="width: 73%;"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                
              </tr>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                >
                  <img
                    src="{react}"
                    class="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  />
                  <span
                    class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  $4,400 USD
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <i class="fas fa-circle text-teal-500 mr-2"></i> on schedule
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex">
                    <img
                      src="{team1}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    />
                    <img
                      src="{team2}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team3}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team4}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">90%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-teal-200"
                      >
                        <div
                          style="width: 90%;"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                
              </tr>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                >
                  <img
                    src="{vue}"
                    class="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  />
                  <span
                    class="ml-3 font-bold {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  $2,200 USD
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <i class="fas fa-circle text-emerald-500 mr-2"></i>
                  completed
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex">
                    <img
                      src="{team1}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    />
                    <img
                      src="{team2}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team3}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                    <img
                      src="{team4}"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    />
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">100%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                      >
                        <div
                          style="width: 100%;"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  