import { MainHero } from './home/main';
import { Slogans } from './home/slogans';
import { TopTrending } from './home/top';
import { TopUsers } from './home/users';
import { Carrousel } from './home/carrousel';
import { Ecosystem } from './home/ecosystem';

export function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className="container mx-auto px-6 py-12 flex flex-col gap-12">
        <MainHero />
        <Slogans />
      </div>
      
      <Ecosystem />

      <div className="container mx-auto px-6 py-12 flex flex-col gap-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <TopTrending />
          <TopUsers />
        </div>
        <Carrousel />
      </div>
    </div>
  );
}
