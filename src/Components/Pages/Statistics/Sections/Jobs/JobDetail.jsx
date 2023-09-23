import { useLoaderData, useParams } from "react-router-dom";


const JobDetail = () => {

      const job = useLoaderData()

      const { id } = useParams();

      const { company_name, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job.find(data => data.id == id);


      const { phone, email, address } = contact_information;

      return (
            <div className="container mx-auto">
                  <h2 className="py-40 text-center text-3xl font-bold">Job Details</h2>


                  <div className="grid grid-cols-3">
                        <div className="col-span-2 grid gap-8">
                              <div className="text-base">
                                    <span className="font-bold">Job Description:</span> {job_description}
                              </div>
                              <div className="text-base">
                                    <span className="font-bold">Job Responsibility:</span> {job_responsibility}
                              </div>
                              <div className="text-base">
                                    <span className="font-bold">Educational Requirements:</span>  {educational_requirements}
                              </div>
                              <div className="text-base ">
                                    <span className="font-bold">Experiences::</span> {experiences}
                              </div>
                        </div>
                        <div className="bg-pink-50 p-8 text-xl rounded">
                              <h3 className="text-2xl font-extrabold">Job Details</h3>
                              <div className="flex gap-2 my-4">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                    >
                                          <path
                                                stroke="url(#paint0_linear_7_406)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                          ></path>
                                          <defs>
                                                <linearGradient
                                                      id="paint0_linear_7_406"
                                                      x1="3"
                                                      x2="21"
                                                      y1="11.861"
                                                      y2="11.861"
                                                      gradientUnits="userSpaceOnUse"
                                                >
                                                      <stop stopColor="#7E90FE"></stop>
                                                      <stop offset="1" stopColor="#9873FF"></stop>
                                                </linearGradient>
                                          </defs>
                                    </svg>
                                    <span className="text-xl font-extrabold">Salary:</span> {salary}
                              </div>
                              <div className="pb-6 flex gap-2">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                    >
                                          <g>
                                                <path
                                                      stroke="url(#paint0_linear_7_412)"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="1.5"
                                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                                ></path>
                                          </g>
                                          <defs>
                                                <linearGradient
                                                      id="paint0_linear_7_412"
                                                      x1="3"
                                                      x2="21"
                                                      y1="11.861"
                                                      y2="11.861"
                                                      gradientUnits="userSpaceOnUse"
                                                >
                                                      <stop stopColor="#7E90FE"></stop>
                                                      <stop offset="1" stopColor="#9873FF"></stop>
                                                </linearGradient>
                                          </defs>
                                    </svg>
                                    <span className="text-xl font-extrabold">Job Title:</span> {job_title}

                              </div>
                              <div className="border-b ">
                                    <h4 className="py-8 text-2xl font-extrabold">Contact Information</h4>
                              </div>
                              <div className="grid gap-6">
                                    <div className="flex pt-7 gap-2">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                          >
                                                <path
                                                      stroke="url(#paint0_linear_7_465)"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="1.5"
                                                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                                ></path>
                                                <defs>
                                                      <linearGradient
                                                            id="paint0_linear_7_465"
                                                            x1="2.25"
                                                            x2="21.75"
                                                            y1="11.85"
                                                            y2="11.85"
                                                            gradientUnits="userSpaceOnUse"
                                                      >
                                                            <stop stopColor="#7E90FE"></stop>
                                                            <stop offset="1" stopColor="#9873FF"></stop>
                                                      </linearGradient>
                                                </defs>
                                          </svg>
                                          <span className="text-xl font-extrabold">Phone:</span> {phone}
                                    </div>
                                    <div className="flex gap-2">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                          >
                                                <path
                                                      stroke="url(#paint0_linear_7_463)"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="1.5"
                                                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                ></path>
                                                <defs>
                                                      <linearGradient
                                                            id="paint0_linear_7_463"
                                                            x1="2.25"
                                                            x2="21.75"
                                                            y1="11.885"
                                                            y2="11.885"
                                                            gradientUnits="userSpaceOnUse"
                                                      >
                                                            <stop stopColor="#7E90FE"></stop>
                                                            <stop offset="1" stopColor="#9873FF"></stop>
                                                      </linearGradient>
                                                </defs>
                                          </svg>
                                          <span className="text-xl font-extrabold">Email:</span> {email}
                                    </div>
                                    <div className="flex gap-2">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                          >
                                                <path
                                                      stroke="url(#paint0_linear_7_463)"
                                                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                ></path>
                                                <defs>
                                                      <linearGradient
                                                            id="paint0_linear_7_463"
                                                            x1="2.25"
                                                            x2="21.75"
                                                            y1="11.885"
                                                            y2="11.885"
                                                            gradientUnits="userSpaceOnUse"
                                                      >
                                                            <stop></stop>
                                                            <stop offset="1"></stop>
                                                      </linearGradient>
                                                </defs>
                                          </svg>
                                          <span className="text-xl font-extrabold">Address:</span> {address}
                                    </div>


                              </div>


                        </div>
                  </div>
            </div>
      );
};

export default JobDetail;