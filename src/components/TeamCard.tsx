type TeamCardProps = {
  school: string;
  mascot: string;
  city: string;
  state: string;
};

function TeamCard({ school, mascot, city, state }: TeamCardProps) {
  return (
    <article>
      <h2>{school}</h2>
      <p>
        <strong>Mascot:</strong> {mascot}
      </p>
      <p>
        <strong>Location:</strong> {city}, {state}
      </p>
    </article>
  );
}

export default TeamCard;
