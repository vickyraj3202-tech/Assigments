import { useEffect, useState } from "react";

function IPLTable() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTeams() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("IPL data load nahi hua. Dobara try karo.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("API ka data expected format mein nahi hai.");
        }

        // Field names ko lowercase mein convert karo
        const formattedData = data.map((team) =>
          Object.fromEntries(
            Object.entries(team).map(([key, value]) => [
              key.trim().toLowerCase(),
              value
            ])
          )
        );

        // Check karo ki NRR valid number hai
        const invalidNRR = formattedData.some(
          (team) =>
            team.nrr == null ||
            String(team.nrr).trim() === "" ||
            !Number.isFinite(Number(team.nrr))
        );

        if (invalidNRR) {
          throw new Error("API mein valid NRR field nahi mili.");
        }

        // Lowest NRR se highest NRR tak sort karo
        formattedData.sort(
          (a, b) => Number(a.nrr) - Number(b.nrr)
        );

        setTeams(formattedData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchTeams();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>Loading IPL points table...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <div>
      <h1>IPL Season 2022 Points</h1>

      {teams.length === 0 ? (
        <p>No teams found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Team</th>
              <th scope="col">Matches</th>
              <th scope="col">Won</th>
              <th scope="col">Lost</th>
              <th scope="col">Tied</th>
              <th scope="col">NRR</th>
              <th scope="col">Points</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, index) => (
              <tr key={team.id ?? team.no ?? index}>
                <td>{team.no ?? team.id ?? "—"}</td>
                <td>{team.team ?? "—"}</td>
                <td>{team.matches ?? "—"}</td>
                <td>{team.won ?? "—"}</td>
                <td>{team.lost ?? "—"}</td>
                <td>{team.tied ?? "—"}</td>
                <td>{Number(team.nrr).toFixed(3)}</td>
                <td>{team.points ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default IPLTable;