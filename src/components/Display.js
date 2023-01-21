import React, { Link } from "react";

const Display = (props) => {
  return (
    <div className="mt-16 bg-black text-white">
      <div className=" justify-center py-5  text-center">
        <h1 className="font-serif text-xl font-bold">Username</h1>

        <h3 className="font-mono text-lg">{props.nam.login}</h3>
        <br />
        <div className="flex justify-center mb-4">
          <img src={props.nam.avatar_url} alt="" className="w-56 h-56 " />
        </div>
      </div>
      <div className="flex-col overflow-auto">
        <div>
          <table className="table-auto w-full border-collapse border-solid  border-slate-500">
            <thead>
              <tr className="h-20">
                <th className="border border-slate-600">Name</th>
                <th className="border border-slate-600">Number of following</th>
                <th className="border border-slate-600">Number of followers</th>
                <th className="border border-slate-600">
                  Number of Repositories
                </th>
                <th className="border border-slate-600">Twitter</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="h-14">
                <td className="border border-slate-600 font-extrabold">
                  {props.nam.name}
                </td>
                <td className="border border-slate-600">
                  {props.nam.following}
                </td>
                <td className="border border-slate-600">
                  {props.nam.followers > 0
                    ? props.nam.followers
                    : "Not mentioned"}
                </td>
                <td className="border border-slate-600">
                  {props.nam.public_repos > 0
                    ? props.nam.public_repos
                    : "Not mentioned"}
                </td>
                <td className="border border-slate-600">
                  {props.nam.twitter_username > 0
                    ? props.nam.twitter_username
                    : "Not mentioned"}
                </td>
              </tr>
              <tr className="h-14 font-semibold ">
                <td className="border border-slate-600">
                  <a
                    href={props.nam.html_url > 0 ? props.nam.html_url : "/"}
                    className="text-green-400"
                  >
                    More info.
                  </a>
                </td>
                <td className="border border-slate-600">
                  <a
                    href={
                      props.nam.html_url > 0
                        ? props.nam.html_url + "?tab=following"
                        : "/"
                    }
                    className="text-green-400"
                  >
                    Following list
                  </a>
                </td>
                <td className="border border-slate-600">
                  <a
                    href={
                      props.nam.html_url > 0
                        ? props.nam.html_url + "?tab=followers"
                        : "/"
                    }
                    className="text-green-400"
                  >
                    Followers list
                  </a>
                </td>
                <td className="border border-slate-600">
                  <a
                    href={
                      props.nam.html_url > 0
                        ? props.nam.html_url + "?tab=repositories"
                        : "/"
                    }
                    className="text-green-400"
                  >
                    Repositories list
                  </a>
                </td>
                <td className="border border-slate-600">
                  <a
                    href={
                      "https://twitter.com/" + props.nam.twitter_username > 0
                        ? props.nam.twitter_username
                        : ""
                    }
                    className="text-green-400"
                  >
                    Twitter
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-10 flex-col justify-center">
          <table className="table-auto w-full border-collapse border-solid  border-slate-500">
            <thead>
              <tr className="h-16">
                <th className="border w-56 border-slate-600">Mail ID</th>
                <th className="border w-44 border-slate-600">Location</th>
                <th className="border w-32 border-slate-600">Blog</th>

                <th className="border w-52 border-slate-600">
                  Created Date and Time
                </th>
                <th className="border w-52 border-slate-600">
                  Updated Date and time
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="h-14">
                <td className="border border-slate-600 ">
                  {props.nam.email > 0 ? props.nam.email : "Not mentioned"}
                </td>
                <td className="border border-slate-600 ">
                  {props.nam.location > 0
                    ? props.nam.location
                    : "Not mentioned"}
                </td>
                <td className="border w-10 border-slate-600">
                  <a
                    href={props.nam.blog > 0 ? props.nam.blog : "/"}
                    className="text-green-400"
                  >
                    Blog link
                  </a>
                </td>
                <td className="border w-36 border-slate-600">
                  {props.nam.created_at > 0
                    ? props.nam.created_at
                    : "Not mentioned"}
                </td>
                <td className="border w-36 border-slate-600">
                  {props.nam.updated_at > 0
                    ? props.nam.updated_at
                    : "Not mentioned"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="py-10 flex justify-center">
          <table className="table-auto w-full border-collapse border-solid  border-slate-500">
            <thead>
              <tr>
                <th className="text-xl">Bio.</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>{props.nam.bio > 0 ? props.nam.bio : "Not mentioned"}</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    //i will put link on that number and that will render to original github
  );
};

export default Display;
