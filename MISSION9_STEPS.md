# Mission 9 Step-by-Step Guide (React + JSON Data)

Follow these steps to complete the assignment requirements exactly.

## 1. Put the JSON file in `src`
1. Move `CollegeBasketballTeams.json` into your app's `src` folder.
2. Final location should be: `src/CollegeBasketballTeams.json`

## 2. Create the component files
Create a `components` folder inside `src`, then create these files:
- `src/components/Heading.tsx`
- `src/components/TeamCard.tsx`
- `src/components/TeamList.tsx`

You now have 3 components in addition to `App`, which matches the requirement.

## 3. Create `Heading.tsx`
```tsx
function Heading() {
  return (
    <header>
      <h1>NCAA College Basketball Teams</h1>
      <p>Browse schools, mascots, and locations for all teams in the dataset.</p>
    </header>
  );
}

export default Heading;
```

## 4. Create `TeamCard.tsx`
```tsx
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
      <p><strong>Mascot:</strong> {mascot}</p>
      <p><strong>Location:</strong> {city}, {state}</p>
    </article>
  );
}

export default TeamCard;
```

## 5. Create `TeamList.tsx`
```tsx
import teamsData from "../CollegeBasketballTeams.json";
import TeamCard from "./TeamCard";

type Team = {
  tid: number;
  school: string;
  name: string; // mascot
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
```

## 6. Update `App.tsx`
Replace your `App.tsx` content with:

```tsx
import Heading from "./components/Heading";
import TeamList from "./components/TeamList";

function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  );
}

export default App;
```

## 7. Run and verify
1. Start the app (`npm run dev` for Vite, or your normal start command).
2. Verify the page shows:
- A heading section at the top.
- A card per team.
- Each card includes school name, mascot name, and city/state location.

## 8. If JSON import errors in TypeScript
If TypeScript complains about importing JSON, ensure your `tsconfig` supports it:
- `"resolveJsonModule": true`
- `"esModuleInterop": true` (usually already set)

## 9. Submission checklist
- `App` + at least 3 additional components used.
- Data comes from external JSON file in `src`, not a hardcoded `const`.
- All teams displayed from `teams` array.
