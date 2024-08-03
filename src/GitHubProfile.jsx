import React, { useEffect, useState } from "react";

const GitHubProfile = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const username = "ojas9299";
  const token = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    // Fetch repositories
    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
      signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRepos(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error.message);
        }
      });

    return () => {
      abortController.abort(); // Cleanup function to abort fetch
    };
  }, [username, token]);

  const filteredRepos = repos.filter((repo) =>
    [
      "Project_Localite",
      "Student_Database_Management_APP",
      "Code-Coffee-",
      "React-calculator",
    ].includes(repo.name)
  );

  return (
    <div className="flex mb-36 text-white">
      <div>
        <h1 className="lg:mx-20 mb-32 text-4xl font-bold font-rock-salt tracking-widest text-center">
          Projects
        </h1>
        {error && <p className="text-red-500 text-center">Error: {error}</p>}
        <div className="repos grid grid-cols-1 lg:grid-cols-2 lg:mx-20 gap-20 lg:gap-14 mx-5">
          {filteredRepos.map((repo) => (
            <div
              className="repo border-2 p-5 lg:pb-10 lg:px-10 border-white rounded-2xl git-card"
              key={repo.id} // Use repo.id as the key
            >
              <h2 className="my-5 text-3xl font-bold font-Rubik_Mono_One hover:text-red-400 hvr-underline-from-left">
                {repo.name}
              </h2>
              <p className="my-8  hover:text-yellow-300 text-lg">
                {repo.description}
              </p>
              <a
                className="border-2 border-white py-2 px-6 rounded-full hover:bg-blue-600 bg-[#4595ea]"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
