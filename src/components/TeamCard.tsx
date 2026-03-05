type TeamCardProps = {
  school: string;
  mascot: string;
  city: string;
  state: string;
};

function TeamCard({ school, mascot, city, state }: TeamCardProps) {
  return (
    // Single school card showing required fields: name, mascot, and location.
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
