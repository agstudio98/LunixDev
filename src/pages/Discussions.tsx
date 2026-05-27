import { DiscussionsMain } from './Discussions/Main';
import { DiscussionsFilter } from './Discussions/Filter';

export function Discussions() {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
      <aside className="lg:w-80 shrink-0">
        <DiscussionsFilter />
      </aside>
      <main className="grow">
        <DiscussionsMain />
      </main>
    </div>
  );
}
