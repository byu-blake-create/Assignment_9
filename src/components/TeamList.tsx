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
  const teams: Team[] = teamsData.teams;

  return (
    <section>
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
