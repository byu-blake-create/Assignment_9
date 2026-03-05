import teamsData from "../CollegeBasketballTeams.json";
import TeamCard from "./TeamCard";

type Team = {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
};

function TeamList() {
  // Pull the teams array from the imported JSON file.
  const teams: Team[] = teamsData.teams;

  return (
    <section>
      {/* Render one TeamCard per team in the dataset */}
      {teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          mascot={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </section>
  );
}

export default TeamList;
